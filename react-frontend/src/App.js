import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Notifications from "react-notify-toast";

import "./App.css";
import indexCSS from "./index.css";

// REDUX
import { Provider } from "react-redux";
import store from "./redux/store/index";

// COMPONENTS
import Navbar from "./components/layout/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Landing from "./components/layout/landing/LandingPage";
import Footer from "./components/layout/footer/Footer";

// ADMIN COMPONENTS
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import DatasetTypeAdmin from "./components/datasettype/DatasetTypeAdmin";
import ProjectsAdmin from "./components/projects/ProjectsAdmin";
import DatasetsAdmin from "./components/datasets/DatasetAdmin";
import RequestQueryAdmin from "./components/requestQuery/RequestQueryAdmin";
import GrifFSAdmin from "./components/gridfs/GrifFSAdmin";
import Chartjs2Admin from "./components/chartjs2/Chartjs2Admin";

const main = {
  flex: "1 0 auto"
};

const body = {
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column"
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App" style={body}>
            <main className="" style={main}>
              <Navbar />
              <Notifications options={{ zIndex: 200, top: "12 rem" }} />
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/" component={Landing} />
                <Route exact path="/admin/register" component={Register} />
                <Route
                  exact
                  path="/projects/:projectType"
                  component={Projects}
                />
                <Route
                  exact
                  path="/admin/datasettype"
                  component={DatasetTypeAdmin}
                />
                <Route exact path="/admin/projects" component={ProjectsAdmin} />
                <Route exact path="/admin/datasets" component={DatasetsAdmin} />
                <Route
                  exact
                  path="/admin/requestqueries"
                  component={RequestQueryAdmin}
                />
                <Route exact path="/admin/gridfs" component={GrifFSAdmin} />
                <Route exact path="/admin/chartjs2" component={Chartjs2Admin} />
              </Switch>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
