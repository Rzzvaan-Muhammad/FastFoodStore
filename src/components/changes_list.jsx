import React, { Component } from "react";
import { Card, CardBody, CardHeader, Row, Col } from "reactstrap";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import ButtonPanel from "./buttonPanel";
import paginate from "../utils/paginate";
import Pagination from "../common/pagination";
import SearchForm from "../forms/searchForm";
import ChangesTable from "./changesTable";
import { deleteChange, getChanges } from "../services/changeServices";
import TranslateText from "../common/translateText";

class ChangesListView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageSize: 5,
      currentPage: 1,
      sortColumn: { path: "Id", order: "asc" }, // Default Sort Column
      changes: [], // PFB_DeclareDataItemCollection
      searchName: "", // PFB_SearchColumns
      searchCategory: "",
      selected: -1
    };
  }

  async componentDidMount() {
    const { id, boName } = this.props.match.params;
    const { data } = await getChanges(boName, id);
    this.setState({
      changes: data.Result
    });
  }

  handleDelete = async id => {
    const originalChanges = this.state.changes;
    const changes = originalChanges.filter(c => c.Id !== id);
    this.setState({ changes });

    const { data: response } = await deleteChange(id);
    if (response.status >= 400 && response.status < 500)
      this.setState({ changes: originalChanges });
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
    this.props.history.push(`change_list/${id}`);
  };

  handleAdd = () => {
    this.props.history.push("change_list/new");
  };

  handleSearch = value => {
    const str = value.toLowerCase().split(" ");
    const keys = str.map(e => e.split(":"));

    console.log(`${keys[0][0]}:${keys[0][1]}`);
    console.log(`${keys[1][0]}:${keys[1][1]}`);

    // const words = value.split(" ");
    // this.setState({
    //   searchName: words[0],
    //   searchCategory: words[1],
    //   currentPage: 1
    // });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      changes: allChanges,
      searchName,
      searchCategory
    } = this.state;

    const filtered = allChanges;
    if (searchName !== null || searchCategory !== null) this.filteredResult();

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const changes = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: changes };
  };

  async filteredResult() {
    const { data: response } = await getChanges();
    this.setState({
      changes: response.Result,
      searchName: null,
      searchCategory: null
    });
  }

  render() {
    const { pageSize, currentPage, sortColumn, selected } = this.state;

    const { totalCount, data: changes } = this.getPagedData();
    return (
      <>
        <Card>
          <CardHeader onDoubleClick={() => this.handleSelect(-1)}>
            <Row>
              <Col className="float-left">
                <FontAwesomeIcon icon={faListAlt} />
                <span
                  className="ml-2"
                  style={{ fontSize: "1rem", fontWeight: 600 }}
                >
                  <TranslateText
                    defaultText="Changes"
                    resourceId="lbl_Changes"
                  />
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
                  onAdd={this.handleAdd}
                  onDelete={this.handleDelete}
                />
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <ChangesTable
              changes={changes}
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
export default ChangesListView;
