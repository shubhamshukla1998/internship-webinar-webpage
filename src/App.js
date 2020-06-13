import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Content from "./pages/Content";
import CompanyInfo from "./pages/CompanyInfo";
import WebinarMain from "./pages/webinarmain/webinar";
import WebninarHome from "./pages/webinardetails/webinardetails";

function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <Switch>
          <Route
            path="/"
            render={() => <Redirect to="/internships" />}
            exact={true}
          />
          <Route path="/internships" exact={true} component={Content} />
          <Route
            path="/internships/internship-detail/:id"
            component={CompanyInfo}
          />
          <Route path="/webinars" exact={true} component={WebinarMain} />
          <Route
            path="/webinars/webinar-details"
            exact={true}
            component={WebninarHome}
          />
          <Route component={() => <Redirect to="/internships" />} />
        </Switch>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
