import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import "../styles/Navigation.css"

class Navigation extends Component {
  render() {
    return (
      <div className="navBar">
        <ul className="navBarList">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/modeler">Modeler</NavLink>
          </li>
          <li>
            <NavLink to="/frameworks">Frameworks</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navigation
