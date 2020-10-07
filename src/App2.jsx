// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:21
// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:21
// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:20
// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:20
// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:19
// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:19
// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:18
import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Container } from "reactstrap";
import { ToastContainer } from "react-toastify";
import Loading from "./common/loading";
import NavMenu from "./components/navMenu";
import ChangesListView from "./components/changes_list";
// // [PFB_ImportModelComponent]

// load route components lazily
const NotFound = lazy(() => import("./common/notFound"));
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
const MealItemSensitivities = lazy(() => import("./components/mealItemSensitivity_list"));
const MealItemSensitivityForm = lazy(() => import("./forms/mealItemSensitivityForm"));
const SensitiveContents = lazy(() => import("./components/sensitiveContent_list"));
const SensitiveContentForm = lazy(() => import("./forms/sensitiveContentForm"));
const SpiceLevels = lazy(() => import("./components/spiceLevel_list"));
const SpiceLevelForm = lazy(() => import("./forms/spiceLevelForm"));

class App extends React.Component {
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
      <Container fluid>
        <main role="main">
          <NavMenu localeId={localeId} onLocaleChange={this.handleLocaleChange} />
          <ToastContainer />
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/changes_list/:id" component={ChangeHistory} />
              <Route path="/itemCategory_list/:id" component={ItemCategoryForm} />
              <Route path="/itemCategory_list" component={ItemCategories} />
              <Route path="/periPeriBox_list" component={periPeriBox} />
              <Route path="/mealBox_list/:id" component={MealBoxForm} />
              <Route path="/mealBox_list" component={MealBoxes} />
              <Route path="/mealBoxItem_list/:id" component={MealBoxItemForm} />
              <Route path="/mealBoxItem_list" component={MealBoxItems} />
              <Route path="/mealItem_list/:id" component={MealItemForm} />
              <Route path="/mealItem_list" component={MealItems} />
              <Route path="/mealItemSensitivity_list/:id" component={MealItemSensitivityForm} />
              <Route path="/mealItemSensitivity_list" component={MealItemSensitivities} />
              <Route path="/sensitiveContent_list/:id" component={SensitiveContentForm} />
              <Route path="/sensitiveContent_list" component={SensitiveContents} />
              <Route path="/spiceLevel_list/:id" component={SpiceLevelForm} />
              <Route path="/spiceLevel_list" component={SpiceLevels} />
              PFB_DefineRoutes
              <Route path="/notFound" component={NotFound} />
              <Redirect to="/notfound" />
            </Switch>
          </Suspense>
        </main>
      </Container>
    );
  }
}

export default App;
