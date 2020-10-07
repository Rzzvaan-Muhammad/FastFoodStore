// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:19
import React, { Component, useContext } from "react";
import { Card, CardBody, CardHeader, Row, Col } from "reactstrap";
import _ from "lodash";
import { CartContext } from "./CartContext";
import paginate from "../utils/paginate";
import { deleteMealBox, getMealBoxes } from "../services/mealBoxServices";
import TranslateText from "../common/translateText";
import { getSensitiveContents } from "../services/sensitiveContentServices";
import { getMealBoxItems } from "../services/mealBoxItemServices";
import { AccessContext } from "../contexts/accessContext";
import FastFoodStore from "./periItemCard";
import CartComponent from "./CartComponent";

// const [cart, setCart] = useContext(CartContext);
// const arrayLength = cart.reduce((acc, curr) => curr.Length, 0);

class MealBoxesListView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      MealBoxes: [],
      pageSize: 10,
      currentPage: 1,
      sidebarOpen: true,

      selected: -1,
      DUAttachments: [],
      Allergens: [],
      MealBoxItems: [],
      image: null,
      cartItems: 0,
      sortColumn: { property: "Id", order: "asc" },
    };
  }

  async componentDidMount() {
    const { dispatch } = this.context;
    dispatch({ type: "ExpenseType" });
    const { data: response } = await getMealBoxes();
    this.setState({
      MealBoxes: response.Result,
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    const { Allergens } = this.state;
    const { MealBoxItems } = this.state;
    // const { cart } = this.context;
    // const value = cart.reduce((acc, curr) => curr.Length, 0);
    // console.log("MealBoxesListView -> componentDidUpdate -> cart", value);
    const { data: response } = await getSensitiveContents();

    if (Allergens.length !== response.Result.length) {
      this.setState({
        Allergens: response.Result,
      });
    }
    const MealBoxItemslist = await getMealBoxItems();

    if (MealBoxItems.length !== MealBoxItemslist.data.Result.length) {
      this.setState({
        MealBoxItems: MealBoxItemslist.data.Result,
      });
    }
  }

  getFromCache = (id) => {
    const item = localStorage.getItem(id);
    return JSON.parse(item);
    // return item;
  };

  handleDelete = async (id) => {
    const originalMealBoxes = this.state.MealBoxes;
    const MealBoxes = this.state.MealBoxes.filter((c) => c.Id !== id);
    this.setState({ MealBoxes });
    const { data: response } = await deleteMealBox(id);
    if (response.status >= 400 && response.status < 500) this.setState({ MealBoxes: originalMealBoxes });
  };

  handleTrackChanges = (id) => {
    this.props.history.push(`changes_list/mealBox/${id}`);
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleSelect = (id) => {
    this.setState({ selected: id });
  };

  handleEdit = (id) => {
    this.props.history.push(`MealBox_list/${id}`);
    // this.props.history.push("MealBox_list/new");
  };

  handleAdd = () => {
    this.props.history.push("MealBox_list/new");
  };

  handleView = (id) => {
    this.props.history.push(`MealBox_list/view${id}&`);
  };

  handleSearch = (value) => {
    const str = value.toLowerCase().split(" ");
    const keys = str.map((e) => e.split(":"));
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
      totalCalories,
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
    const { image, Allergens, MealBoxItems } = this.state;
    const status = 25;
    const { totalCount, data: MealBoxes } = this.getPagedData();
    return (
      <>
        <div className="d-flex">
          <div className="container-fluid">
            <Card className="px-2">
              <CardHeader
                className="justify-content-between text-uppercase font-weight-bold"
                style={{ fontSize: "1rem", fontWeight: 400 }}
                onDoubleClick={() => this.handleSelect(-1)}
              >
                <Row>
                  {/* <Col className="float-left">
                    <span className="ml-2" style={{ fontSize: "1rem", fontWeight: 600 }}>
                      <TranslateText defaultText="Meal Boxes" resourceId="lbl_MealBoxes" />
                      <br />
                    </span>
                  </Col> */}
                  <Col xs="*">
                    <CartComponent buttonLabel="Cart" />
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row md="3">
                  {MealBoxes.map((item) => (
                    <Col
                      key={item.Id}
                      style={{ width: "300%", height: "10%" }}
                      // className="col-md-3 ml-1"
                      // md={{ size: 3, offset: 0.5 }}
                    >
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
                {/* <Row xs="2" className="padding-right" /> */}
              </CardBody>
            </Card>
          </div>
        </div>
      </>
    );
  }
}
MealBoxesListView.contextType = AccessContext;
export default MealBoxesListView;
