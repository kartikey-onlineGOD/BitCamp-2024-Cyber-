import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeroPage from "./heropage"; // Adjust the path as necessary
import ImgTestGame from "./ImgTestGame"; // Adjust the path as necessary

const IndexPage = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HeroPage} />{" "}
      <Route exact path="/img-test-game" component={ImgTestGame} />{" "}
    </Switch>{" "}
  </Router>
);

// Check if window is defined (indicating the code is running in the browser)
if (typeof window !== "undefined") {
  ReactDOM.render(<IndexPage />, document.getElementById("root"));
}
