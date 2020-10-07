// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:18
import React, { Component } from "react";
import { Card, CardBody, CardHeader, Row, Col } from "reactstrap";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import ButtonPanel from "./buttonPanel";
import Pagination from "../common/pagination";
import paginate from "../utils/paginate";
import SearchForm from "../forms/searchForm";

import { deleteItemCategory, getItemCategorys } from "../services/ItemCategoryServices";
import ItemCategoriesTable from "./ItemCategorysTable";
import TranslateText from "../common/translateText";
import { getSensitiveContents } from "../services/listServices";
import { AccessContext } from "../contexts/accessContext";

class ItemCategorysListView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ItemCategorys: [],
      pageSize: 10,
      currentPage: 1,

      selected: -1,
      sortColumn: { property: "Id", order: "asc" }
    };
  }

  async componentDidMount() {
    const { dispatch } = this.context;
    dispatch({ type: "ExpenseType" });
    const { data: response } = await getItemCategorys();
    this.setState({ ItemCategorys: response.Result });

    await getSensitiveContents();
  }

  handleDelete = async id => {
    const originalItemCategorys = this.state.ItemCategorys;
    const ItemCategorys = this.state.ItemCategorys.filter(c => c.Id !== id);
    this.setState({ ItemCategorys });
    const { data: response } = await deleteItemCategory(id);
    if (response.status >= 400 && response.status < 500) this.setState({ ItemCategorys: originalItemCategorys });
  };

  handleTrackChanges = id => {
    this.props.history.push(`changes_list/itemCategory/${id}`);
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleSelect = id => {
    this.setState({ selected: id });
  };

  handleEdit = id => {
    this.props.history.push(`ItemCategory_list/${id}`);
  };

  handleAdd = () => {
    this.props.history.push("ItemCategory_list/new");
  };

  handleView = id => {
    this.props.history.push(`ItemCategory_list/view${id}&`);
  };

  handleSearch = value => {
    const str = value.toLowerCase().split(" ");
    const keys = str.map(e => e.split(":"));

    console.log(`${keys[0][0]}:${keys[0][1]}`);
    console.log(`${keys[1][0]}:${keys[1][1]}`);
  };

  getPagedData = () => {
    const { pageSize, currentPage, sortColumn, ItemCategorys: allItemCategorys } = this.state;

    const filtered = allItemCategorys;

    // if (searchName || searchCategory) filtered = this.filteredResult();

    const sorted = _.orderBy(filtered, [sortColumn.property], [sortColumn.order]);

    const ItemCategorys = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: ItemCategorys };
  };

  async filteredResult() {
    const { allItemCategorys } = this.state;
    let ItemCategorys = { ...allItemCategorys };
    const { data: response } = await this.getOrders(); // TOPFB
    ItemCategorys = response.value;
    this.setState({ ItemCategorys });
  }

  render() {
    const { pageSize, currentPage, sortColumn, selected } = this.state;

    const { totalCount, data: ItemCategorys } = this.getPagedData();
    return (
      <>
        <Card>
          <CardHeader className=" font-weight-bold" onDoubleClick={() => this.handleSelect(-1)}>
            <Row>
              <Col className="float-left">
                <FontAwesomeIcon icon={faListAlt} />
                <span className="ml-2" style={{ fontSize: "1rem", fontWeight: 600 }}>
                  <TranslateText defaultText="Item Categorys" resourceId="lbl_ItemCategorys" />
                  <br />
                  {totalCount}
                  <TranslateText defaultText="found" resourceId="lbl_found" />
                </span>
              </Col>
              <Col xs="*" md="6">
                <SearchForm onSearch={this.handleSearch} />
              </Col>
              <Col>
                <ButtonPanel
                  id={selected}
                  show="false"
                  onEdit={this.handleEdit}
                  onAdd={this.handleAdd}
                  onView={this.handleView}
                  onDelete={this.handleDelete}
                  onTrackChanges={this.handleTrackChanges}
                />
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <ItemCategoriesTable
              ItemCategorys={ItemCategorys}
              selected={selected}
              sortColumn={sortColumn}
              onSort={this.handleSort}
              onView={this.handleView}
              onDelete={this.handleDelete}
              onExport={this.handleExport}
              onSelect={this.handleSelect}
            />
          </CardBody>
          <Pagination
            itemsCount={totalCount || 0}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </Card>
      </>
    );
  }
}
ItemCategorysListView.contextType = AccessContext;

export default ItemCategorysListView;
