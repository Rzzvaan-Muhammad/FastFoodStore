import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loading from "./common/loading";
import NavMenu from "./components/navMenu";
// // [PFB_ImportModelComponent]

// load route components lazily
const ChangeHistory = lazy(() => import("./components/changes_list"));
const ItemCategories = lazy(() => import("./components/ItemCategory_list"));
const periPeriBox = lazy(() => import("./components/periPeriBox_List"));
const ItemCategoryForm = lazy(() => import("./forms/ItemCategoryForm"));
const MealBoxes = lazy(() => import("./components/mealBox_list"));
const MealBoxForm = lazy(() => import("./forms/mealBoxForm"));
const MealBoxItems = lazy(() => import("./components/mealBoxItem_list"));
const MealBoxItemForm = lazy(() => import("./forms/mealBoxItemForm"));
const MealItems = lazy(() => import("./components/mealItem_list"));
const MealItemForm = lazy(() => import("./forms/mealItemForm"));
const MealItemSensitivities = lazy(() =>
  import("./components/mealItemSensitivity_list")
);
const MealItemSensitivityForm = lazy(() =>
  import("./forms/mealItemSensitivityForm")
);
const SensitiveContents = lazy(() =>
  import("./components/sensitiveContent_list")
);
const SensitiveContentForm = lazy(() => import("./forms/sensitiveContentForm"));
const SpiceLevels = lazy(() => import("./components/spiceLevel_list"));
const SpiceLevelForm = lazy(() => import("./forms/spiceLevelForm"));
const OrderForm = lazy(() => import("./forms/OrderForm"));

class AppRoutes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localeId: "en-uk"
    };
  }

  handleLocaleChange = localeId => {
    this.setState({
      localeId
    });
  };

  render() {
    const { localeId } = this.state;

    return (
      <div>
        <NavMenu localeId={localeId} onLocaleChange={this.handleLocaleChange} />
        <main role="main">
          <ToastContainer />
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/changes_list/:id" component={ChangeHistory} />
              <Route
                path="/itemCategory_list/:id"
                component={ItemCategoryForm}
              />
              <Route path="/itemCategory_list" component={ItemCategories} />
              <Route path="/periPeriBox_list" component={periPeriBox} />
              <Route path="/mealBox_list/:id" component={MealBoxForm} />
              <Route path="/mealBox_list" component={MealBoxes} />
              <Route path="/mealBoxItem_list/:id" component={MealBoxItemForm} />
              <Route path="/mealBoxItem_list" component={MealBoxItems} />
              <Route path="/mealItem_list/:id" component={MealItemForm} />
              <Route path="/mealItem_list" component={MealItems} />
              <Route
                path="/mealItemSensitivity_list/:id"
                component={MealItemSensitivityForm}
              />
              <Route
                path="/mealItemSensitivity_list"
                component={MealItemSensitivities}
              />
              <Route
                path="/sensitiveContent_list/:id"
                component={SensitiveContentForm}
              />
              <Route
                path="/sensitiveContent_list"
                component={SensitiveContents}
              />
              <Route path="/spiceLevel_list/:id" component={SpiceLevelForm} />
              <Route path="/OrderForm" component={OrderForm} />

              <Route path="/spiceLevel_list" component={SpiceLevels} />
            </Switch>
          </Suspense>
        </main>
      </div>
    );
  }
}
export default AppRoutes;
