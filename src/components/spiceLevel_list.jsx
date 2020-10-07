// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:21
import React, { Component } from "react";
import { Card, CardBody, CardHeader, Row, Col } from "reactstrap";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import ButtonPanel from "./buttonPanel";
import Pagination from "../common/pagination";
import paginate from "../utils/paginate";
import SearchForm from "../forms/searchForm";
import { deleteSpiceLevel, getSpiceLevels } from "../services/spiceLevelServices";
import SpiceLevelsTable from "./spiceLevelsTable";
import TranslateText from "../common/translateText";
import { AccessContext } from "../contexts/accessContext";

class SpiceLevelsListView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      SpiceLevels: [],
      pageSize: 10,
      currentPage: 1,

      selected: -1,
      sortColumn: { property: "Id", order: "asc" }
    };
  }

  async componentDidMount() {
    const { dispatch } = this.context;
    dispatch({ type: "ExpenseType" });

    const { data: response } = await getSpiceLevels();
    this.setState({ SpiceLevels: response.Result });
    const spicelevelKey = "____spicelevels____";
    localStorage.removeItem(spicelevelKey);
  }

  handleDelete = async id => {
    const originalSpiceLevels = this.state.SpiceLevels;
    const SpiceLevels = this.state.SpiceLevels.filter(c => c.Id !== id);
    this.setState({ SpiceLevels });
    const { data: response } = await deleteSpiceLevel(id);
    if (response.status >= 400 && response.status < 500) this.setState({ SpiceLevels: originalSpiceLevels });
  };

  handleTrackChanges = id => {
    this.props.history.push(`changes_list/spiceLevel/${id}`);
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
    this.props.history.push(`SpiceLevel_list/${id}`);
  };

  handleView = id => {
    this.props.history.push(`SpiceLevel_list/view${id}&`);
  };

  handleAdd = () => {
    this.props.history.push("SpiceLevel_list/new");
  };

  handleSearch = value => {
    const str = value.toLowerCase().split(" ");
    const keys = str.map(e => e.split(":"));

    console.log(`${keys[0][0]}:${keys[0][1]}`);
    console.log(`${keys[1][0]}:${keys[1][1]}`);
  };

  getPagedData = () => {
    const { pageSize, currentPage, sortColumn, SpiceLevels: allSpiceLevels } = this.state;

    const filtered = allSpiceLevels;

    // if (searchName || searchCategory) filtered = this.filteredResult();

    const sorted = _.orderBy(filtered, [sortColumn.property], [sortColumn.order]);

    const SpiceLevels = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: SpiceLevels };
  };

  async filteredResult() {
    const { allSpiceLevels } = this.state;
    let spiceLevels = { ...allSpiceLevels };
    const { data: response } = await this.getOrders(); // TOPFB
    spiceLevels = response.value;
    this.setState({ spiceLevels });
  }

  render() {
    const { pageSize, currentPage, sortColumn, selected } = this.state;

    const { totalCount, data: SpiceLevels } = this.getPagedData();
    return (
      <>
        <Card>
          <CardHeader onDoubleClick={() => this.handleSelect(-1)}>
            <Row>
              <Col className="float-left">
                <FontAwesomeIcon icon={faListAlt} />
                <span className="ml-2" style={{ fontSize: "1rem", fontWeight: 600 }}>
                  <TranslateText defaultText="SpiceLevels" resourceId="lbl_SpiceLevels" />
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
                  show="false"
                  onEdit={this.handleEdit}
                  onAdd={this.handleAdd}
                  onDelete={this.handleDelete}
                  onTrackChanges={this.handleTrackChanges}
                />
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <SpiceLevelsTable
              SpiceLevels={SpiceLevels}
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
SpiceLevelsListView.contextType = AccessContext;

export default SpiceLevelsListView;
