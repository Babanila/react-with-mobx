import React from "react"
import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "mobx-react"
import ItemStore from "./stores/ItemStore"
import App from "./App"

render(
  <Provider ItemStore={ItemStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
