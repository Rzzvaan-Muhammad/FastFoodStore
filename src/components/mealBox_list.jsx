// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:19
import React, { Component } from "react";
import { Card, CardBody, CardHeader, Row, Col } from "reactstrap";
import _ from "lodash";
import ButtonPanel from "./buttonPanel";
import paginate from "../utils/paginate";
import { deleteMealBox, getMealBoxes } from "../services/mealBoxServices";
import TranslateText from "../common/translateText";
import { getSensitiveContents } from "../services/sensitiveContentServices";
import { getMealBoxItems } from "../services/mealBoxItemServices";

import FastFoodStore from "./ItemCard";
import { AccessContext } from "../contexts/accessContext";

class MealBoxesListView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      MealBoxes: [],
      pageSize: 10,
      currentPage: 1,
      // searchMealBoxTitle: null,
      // searchDescription: null,
      // searchMealBoxPrice: null,
      // searchTotalCalories: null,

      selected: -1,
      DUAttachments: [],
      Allergens: [],
      MealBoxItems: [],
      image: null,
      sortColumn: { property: "Id", order: "asc" }
    };
  }

  async componentDidMount() {
    const { dispatch } = this.context;
    dispatch({ type: "ExpenseType" });
    const { data: response } = await getMealBoxes();
    this.setState({
      MealBoxes: response.Result
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    const { Allergens } = this.state;
    const { MealBoxItems } = this.state;
    const { data: response } = await getSensitiveContents();

    if (Allergens.length !== response.Result.length) {
      this.setState({
        Allergens: response.Result
      });
    }
    const MealBoxItemslist = await getMealBoxItems();
    console.log(
      "TCL: MealBoxesListView -> componentDidUpdate -> MealBoxItemslist.data.Result",
      MealBoxItemslist.data.Result
    );
    if (MealBoxItems.length !== MealBoxItemslist.data.Result.length) {
      this.setState({
        MealBoxItems: MealBoxItemslist.data.Result
      });
    }
  }

  handleDelete = async id => {
    const originalMealBoxes = this.state.MealBoxes;
    const MealBoxes = this.state.MealBoxes.filter(c => c.Id !== id);
    this.setState({ MealBoxes });
    const { data: response } = await deleteMealBox(id);
    if (response.status >= 400 && response.status < 500) this.setState({ MealBoxes: originalMealBoxes });
  };

  handleTrackChanges = id => {
    this.props.history.push(`changes_list/mealBox/${id}`);
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
    this.props.history.push(`MealBox_list/${id}`);
    // this.props.history.push("MealBox_list/new");
  };

  handleAdd = () => {
    this.props.history.push("MealBox_list/new");
  };

  handleView = id => {
    this.props.history.push(`MealBox_list/view${id}&`);
  };

  handleSearch = value => {
    const str = value.toLowerCase().split(" ");
    const keys = str.map(e => e.split(":"));
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      MealBoxes: allMealBoxes,
      mealBoxTitle,
      description,
      mealBoxPrice,
      totalCalories
    } = this.state;

    const filtered = allMealBoxes;

    if (mealBoxTitle || description || mealBoxPrice || totalCalories) filtered = this.filteredResult();
    // if (searchName || searchCategory) filtered = this.filteredResult();

    const sorted = _.orderBy(filtered, [sortColumn.property], [sortColumn.order]);

    const MealBoxes = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: MealBoxes };
  };

  async filteredResult() {
    const { allMealBoxes } = this.state;
    let mealBoxes = { ...allMealBoxes };
    const { data: response } = await this.getOrders(); // TOPFB
    mealBoxes = response.value;
    this.setState({ mealBoxes });
  }

  render() {
    const { selected, image, Allergens, MealBoxItems } = this.state;
    const { data: MealBoxes } = this.getPagedData();
    return (
      <>
        <div className="container-fluid">
          <Card className="px-2">
            <CardHeader
              className="justify-content-between text-uppercase font-weight-bold"
              style={{ fontSize: "1rem", fontWeight: 400 }}
              onDoubleClick={() => this.handleSelect(-1)}
            >
              <Row>
                <Col className="float-left">
                  <span className="ml-2" style={{ fontSize: "1rem", fontWeight: 600 }}>
                    <TranslateText defaultText="Meal Boxes" resourceId="lbl_MealBoxes" />
                    <br />
                  </span>
                </Col>
                <Col xs="*" md="2" />
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
              <Row md="3">
                {MealBoxes.map(item => (
                  <Col key={item.Id} md={{ size: 3, offset: 0.5 }}>
                    <FastFoodStore
                      item={item}
                      lavel={25}
                      image={image}
                      onEdit={this.handleEdit}
                      Delete={this.handleDelete}
                      Allergens={Allergens}
                      MealBoxItems={MealBoxItems}
                    />
                  </Col>
                ))}
              </Row>
              <Row xs="2" className="padding-right" />
            </CardBody>
          </Card>
        </div>
      </>
    );
  }
}
MealBoxesListView.contextType = AccessContext;
export default MealBoxesListView;
