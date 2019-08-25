import React from "react"
import { Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import HomePage from "./pages/HomePage"
import ModelerPage from "./pages/ModelerPage"
import { FrameworksPage } from "./pages/FrameworksPage"
import "./styles/App.css"

export default () => (
  <div id="bjs-container">
    <Navigation />
    <hr id="hr-line" />
    <div className="content">
      <Route exact path="/" component={HomePage} />
      <Route path="/modeler" component={ModelerPage} />
      <Route path="/frameworks" component={FrameworksPage} />
    </div>
  </div>
)
