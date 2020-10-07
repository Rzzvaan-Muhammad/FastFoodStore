// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:20
import React, { Component } from "react";
import { Card, CardBody, CardHeader, Row, Col } from "reactstrap";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import ButtonPanel from "./buttonPanel";
import Pagination from "../common/pagination";
import paginate from "../utils/paginate";
import SearchForm from "../forms/searchForm";

import { deleteMealItemSensitivity, getMealItemSensitivities } from "../services/mealItemSensitivityServices";
import MealItemSensitivitiesTable from "./mealItemSensitivitiesTable";
import TranslateText from "../common/translateText";
import { AccessContext } from "../contexts/accessContext";

class MealItemSensitivitiesListView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      MealItemSensitivities: [],
      pageSize: 10,
      currentPage: 1,

      selected: -1,
      sortColumn: { property: "Id", order: "asc" }
    };
  }

  async componentDidMount() {
    const { dispatch } = this.context;
    dispatch({ type: "" });

    const { data: response } = await getMealItemSensitivities();
    this.setState({ MealItemSensitivities: response.Result });
  }

  handleDelete = async id => {
    const originalMealItemSensitivities = this.state.MealItemSensitivities;
    const MealItemSensitivities = this.state.MealItemSensitivities.filter(c => c.Id !== id);
    this.setState({ MealItemSensitivities });
    const { data: response } = await deleteMealItemSensitivity(id);
    if (response.status >= 400 && response.status < 500)
      this.setState({ MealItemSensitivities: originalMealItemSensitivities });
  };

  handleTrackChanges = id => {
    this.props.history.push(`changes_list/mealItemSensitivity/${id}`);
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
    this.props.history.push(`MealItemSensitivity_list/${id}`);
  };

  handleView = id => {
    this.props.history.push(`MealItemSensitivity_list/view${id}&`);
  };

  handleAdd = () => {
    this.props.history.push("MealItemSensitivity_list/new");
  };

  handleSearch = value => {
    const str = value.toLowerCase().split(" ");
    const keys = str.map(e => e.split(":"));

    console.log(`${keys[0][0]}:${keys[0][1]}`);
    console.log(`${keys[1][0]}:${keys[1][1]}`);
  };

  getPagedData = () => {
    const { pageSize, currentPage, sortColumn, MealItemSensitivities: allMealItemSensitivities } = this.state;

    const filtered = allMealItemSensitivities;

    // if (searchName || searchCategory) filtered = this.filteredResult();

    const sorted = _.orderBy(filtered, [sortColumn.property], [sortColumn.order]);

    const MealItemSensitivities = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: MealItemSensitivities };
  };

  async filteredResult() {
    const { allMealItemSensitivities } = this.state;
    let mealItemSensitivities = { ...allMealItemSensitivities };
    const { data: response } = await this.getOrders(); // TOPFB
    mealItemSensitivities = response.value;
    this.setState({ mealItemSensitivities });
  }

  render() {
    const { pageSize, currentPage, sortColumn, selected } = this.state;

    const { totalCount, data: MealItemSensitivities } = this.getPagedData();
    return (
      <>
        <Card>
          <CardHeader className=" font-weight-bold" onDoubleClick={() => this.handleSelect(-1)}>
            <Row>
              <Col className="float-left">
                <FontAwesomeIcon icon={faListAlt} />
                <span className="ml-2" style={{ fontSize: "1rem", fontWeight: 600 }}>
                  <TranslateText defaultText="Meal Item Sensitivities" resourceId="lbl_MealItemSensitivities" />
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
            <MealItemSensitivitiesTable
              MealItemSensitivities={MealItemSensitivities}
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
MealItemSensitivitiesListView.contextType = AccessContext;
export default MealItemSensitivitiesListView;
