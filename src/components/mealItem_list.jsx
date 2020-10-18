import React, { Component } from "react";
import { Card, CardBody, CardHeader, Row, Col } from "reactstrap";
import _ from "lodash";

import ButtonPanel from "./buttonPanel";
import FastFoodStore from "./MealItemCard";
import { getSensitiveContents } from "../services/sensitiveContentServices";

import paginate from "../utils/paginate";
import { deleteMealItem, getMealItems } from "../services/mealItemServices";
import TranslateText from "../common/translateText";
import { AccessContext } from "../contexts/accessContext";

class MealItemsListView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      MealItems: [],
      pageSize: 10,
      currentPage: 1,
      searchItemName: null,
      searchItemPrice: null,
      searchCaloriesCount: null,
      Allergens: [],

      selected: -1,
      sortColumn: { property: "Id", order: "asc" }
    };
  }

  async componentDidMount() {
    // const { dispatch } = this.context;
    // dispatch({ type: "  " });

    const { data: response } = await getMealItems();
    this.setState({ MealItems: response.Result });
  }

  async componentDidUpdate(prevProps, prevState) {
    const { Allergens } = this.state;
    const { data: response } = await getSensitiveContents();
    if (Allergens.length !== response.Result.length) {
      this.setState({
        Allergens: response.Result
      });
    }
  }

  handleDelete = async id => {
    const originalMealItems = this.state.MealItems;
    const MealItems = this.state.MealItems.filter(c => c.Id !== id);
    this.setState({ MealItems });
    const { data: response } = await deleteMealItem(id);
    if (response.status >= 400 && response.status < 500) this.setState({ MealItems: originalMealItems });
  };

  handleTrackChanges = id => {
    this.props.history.push(`changes_list/mealItem/${id}`);
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
    console.log("TCL: MealItemsListView -> id", id);
    this.props.history.push(`mealItem_list/${id}`);
  };

  handleAdd = () => {
    this.props.history.push("mealItem_list/new");
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
      MealItems: allMealItems,
      itemName,
      itemPrice,
      caloriesCount
    } = this.state;

    const filtered = allMealItems;

    if (itemName || itemPrice || caloriesCount) filtered = this.filteredResult();

    const sorted = _.orderBy(filtered, [sortColumn.property], [sortColumn.order]);

    const MealItems = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: MealItems };
  };

  async filteredResult() {
    const { allMealItems } = this.state;
    let mealItems = { ...allMealItems };
    const { data: response } = await this.getOrders(); // TOPFB
    mealItems = response.value;
    this.setState({ mealItems });
  }

  render() {
    const { Allergens, selected } = this.state;

    const { data: MealItems } = this.getPagedData();
    return (
      <>
        <Card>
          <CardHeader className=" text-uppercase font-weight-bold" onDoubleClick={() => this.handleSelect(-1)}>
            <Row>
              <Col className="float-left">
                <span className="ml-2" style={{ fontSize: "1rem", fontWeight: 600 }}>
                  <TranslateText defaultText="Meal Items" resourceId="lbl_MealItems" />
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
            <Row md="2">
              {MealItems.map(item => (
                <Col key={item.Id} md={{ size: 2, offset: 0.5 }}>
                  <FastFoodStore
                    item={item}
                    lavel={25}
                    image="https://picsum.photos/500"
                    onEdit={this.handleEdit}
                    Delete={this.handleDelete}
                    Allergens={Allergens}
                  />
                </Col>
              ))}
            </Row>
          </CardBody>
        </Card>
      </>
    );
  }
}
MealItemsListView.contextType = AccessContext;
export default MealItemsListView;
