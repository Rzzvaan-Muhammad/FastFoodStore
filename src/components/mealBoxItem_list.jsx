// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:19
import React, { Component } from "react";
import { Card, CardBody, CardHeader, Row, Col } from "reactstrap";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import ButtonPanel from "./buttonPanel";
import Pagination from "../common/pagination";
import paginate from "../utils/paginate";
import SearchForm from "../forms/searchForm";
import { deleteMealBoxItem, getMealBoxItems } from "../services/mealBoxItemServices";
import MealBoxItemsTable from "./mealBoxItemsTable";
import TranslateText from "../common/translateText";
import { getMealItems, getMealBoxes } from "../services/listServices";
import { AccessContext } from "../contexts/accessContext";

class MealBoxItemsListView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      MealBoxItems: [],
      pageSize: 10,
      currentPage: 1,

      selected: -1,
      sortColumn: { property: "Id", order: "asc" }
    };
  }

  async componentDidMount() {
    const { dispatch } = this.context;
    dispatch({ type: "ExpenseType" });

    await getMealItems();
    await getMealBoxes();
    const { data: response } = await getMealBoxItems();
    this.setState({ MealBoxItems: response.Result });
  }

  handleDelete = async id => {
    const originalMealBoxItems = this.state.MealBoxItems;
    const MealBoxItems = this.state.MealBoxItems.filter(c => c.Id !== id);
    this.setState({ MealBoxItems });
    const { data: response } = await deleteMealBoxItem(id);
    if (response.status >= 400 && response.status < 500) this.setState({ MealBoxItems: originalMealBoxItems });
  };

  handleTrackChanges = id => {
    this.props.history.push(`changes_list/mealBoxItem/${id}`);
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
    this.props.history.push(`MealBoxItem_list/${id}`);
  };

  handleAdd = () => {
    this.props.history.push("MealBoxItem_list/new");
  };

  handleView = id => {
    this.props.history.push(`MealBoxItem_list/view${id}&`);
  };

  handleSearch = value => {
    const str = value.toLowerCase().split(" ");
    const keys = str.map(e => e.split(":"));

    console.log(`${keys[0][0]}:${keys[0][1]}`);
    console.log(`${keys[1][0]}:${keys[1][1]}`);
  };

  getPagedData = () => {
    const { pageSize, currentPage, sortColumn, MealBoxItems: allMealBoxItems } = this.state;

    const filtered = allMealBoxItems;

    // if (searchName || searchCategory) filtered = this.filteredResult();

    const sorted = _.orderBy(filtered, [sortColumn.property], [sortColumn.order]);

    const MealBoxItems = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: MealBoxItems };
  };

  async filteredResult() {
    const { allMealBoxItems } = this.state;
    let mealBoxItems = { ...allMealBoxItems };
    const { data: response } = await this.getOrders(); // TOPFB
    mealBoxItems = response.value;
    this.setState({ mealBoxItems });
  }

  render() {
    const { pageSize, currentPage, sortColumn, selected } = this.state;

    const { totalCount, data: MealBoxItems } = this.getPagedData();
    return (
      <>
        <Card>
          <CardHeader onDoubleClick={() => this.handleSelect(-1)}>
            <Row>
              <Col className="float-left">
                <FontAwesomeIcon icon={faListAlt} />
                <span className="ml-2" style={{ fontSize: "1rem", fontWeight: 600 }}>
                  <TranslateText defaultText="MealBoxItems" resourceId="lbl_MealBoxItems" />
                  <br />
                  {totalCount}
                  <TranslateText defaultText="found" resourceId="lbl_found" />
                </span>
              </Col>
              <Col xs="*" md="8">
                <SearchForm onSearch={this.handleSearch} />
              </Col>
              <Col>
                <ButtonPanel
                  id={selected}
                  onEdit={this.handleEdit}
                  show="false"
                  onAdd={this.handleAdd}
                  onView={this.handleView}
                  onDelete={this.handleDelete}
                  onTrackChanges={this.handleTrackChanges}
                />
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <MealBoxItemsTable
              MealBoxItems={MealBoxItems}
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
MealBoxItemsListView.contextType = AccessContext;
export default MealBoxItemsListView;
