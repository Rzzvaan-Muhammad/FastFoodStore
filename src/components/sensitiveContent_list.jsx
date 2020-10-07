// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:21
import React, { Component } from "react";
import { Card, CardBody, CardHeader, Row, Col } from "reactstrap";
import _ from "lodash";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faListAlt } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
import ButtonPanel from "./buttonPanel";
import Pagination from "../common/pagination";
import paginate from "../utils/paginate";
import SearchForm from "../forms/searchForm";
import { deleteSensitiveContent, getSensitiveContents } from "../services/sensitiveContentServices";
import SensitiveContentsTable from "./sensitiveContentsTable";
import TranslateText from "../common/translateText";
import { AccessContext } from "../contexts/accessContext";

class SensitiveContentsListView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      SensitiveContents: [],
      pageSize: 10,
      currentPage: 1,

      selected: -1,
      sortColumn: { property: "Id", order: "asc" }
    };
  }

  async componentDidMount() {
    const { dispatch } = this.context;
    dispatch({ type: "ExpenseType" });

    const { data: response } = await getSensitiveContents();
    this.setState({ SensitiveContents: response.Result });
    // const sensitivecontentKey = "____sensitivecontents____";
    // localStorage.removeItem(sensitivecontentKey);
  }

  handleDelete = async id => {
    const originalSensitiveContents = this.state.SensitiveContents;
    const SensitiveContents = this.state.SensitiveContents.filter(c => c.Id !== id);
    this.setState({ SensitiveContents });
    const { data: response } = await deleteSensitiveContent(id);
    if (response.status >= 400 && response.status < 500)
      this.setState({ SensitiveContents: originalSensitiveContents });
  };

  handleTrackChanges = id => {
    this.props.history.push(`changes_list/sensitiveContent/${id}`);
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
    this.props.history.push(`SensitiveContent_list/${id}`);
  };

  handleView = id => {
    this.props.history.push(`SensitiveContent_list/view${id}&`);
  };

  handleAdd = () => {
    this.props.history.push("SensitiveContent_list/new");
  };

  handleSearch = value => {
    const str = value.toLowerCase().split(" ");
    const keys = str.map(e => e.split(":"));

    console.log(`${keys[0][0]}:${keys[0][1]}`);
    console.log(`${keys[1][0]}:${keys[1][1]}`);
  };

  getPagedData = () => {
    const { pageSize, currentPage, sortColumn, SensitiveContents: allSensitiveContents } = this.state;

    const filtered = allSensitiveContents;

    // if (searchName || searchCategory) filtered = this.filteredResult();

    const sorted = _.orderBy(filtered, [sortColumn.property], [sortColumn.order]);

    const SensitiveContents = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: SensitiveContents };
  };

  async filteredResult() {
    const { allSensitiveContents } = this.state;
    let sensitiveContents = { ...allSensitiveContents };
    const { data: response } = await this.getOrders(); // TOPFB
    sensitiveContents = response.value;
    this.setState({ sensitiveContents });
  }

  render() {
    const { pageSize, currentPage, sortColumn, selected } = this.state;

    const { totalCount, data: SensitiveContents } = this.getPagedData();
    return (
      <>
        <Card>
          <CardHeader className="font-weight-bold" onDoubleClick={() => this.handleSelect(-1)}>
            <Row>
              <Col className="float-left">
                {/* <FontAwesomeIcon icon={faListAlt} /> */}
                <span
                //  className="ml-2" style={{ fontSize: "1rem", fontWeight: 600 }}
                >
                  <TranslateText defaultText="Sensitive Contents" resourceId="lbl_SensitiveContents" />
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
                {/* <input className="form-control" type="search" placeholder="Search" aria-label="Search" /> */}
              </Col>
              {/* <Col xs="*" md="1">
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </Col> */}
            </Row>
          </CardHeader>
          <CardBody>
            <SensitiveContentsTable
              SensitiveContents={SensitiveContents}
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
SensitiveContentsListView.contextType = AccessContext;

export default SensitiveContentsListView;
