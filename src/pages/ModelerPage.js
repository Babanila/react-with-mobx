import React, { Component } from "react"
import BpmnJS from "bpmn-js/dist/bpmn-modeler.development.js"
import "bpmn-js/dist/assets/diagram-js.css"
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css"

// use the Modeler to instantiate a modeler instance
export default class ModelerPage extends Component {
  constructor(props) {
    super(props)
    this.modelerRef = React.createRef()
  }

  componentDidMount() {
    const container = this.modelerRef.current
    const modelViewer = new BpmnJS({ container })
  }

  componentWillUnmount() {
    const container = this.modelerRef.current
    const modelViewer = new BpmnJS({ container })
    modelViewer.detach()
  }

  render() {
    return (
      <div>
        <h1>Modeler</h1>
        <div ref={this.modelerRef} />
      </div>
    )
  }
}
