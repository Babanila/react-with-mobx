import React, { Component } from "react"
import styled from "styled-components"
import { inject, observer } from "mobx-react"
import Search from "../components/Search"

const FrameWorksDiv = styled.div`
  display: grid;
  width: 100%;
`

const P = styled.p`
  font-size: 1.5rem;
  color: red;
`

const ResultOutput = styled.div`
  margin-top: 5.8rem;
`

@inject("ItemStore")
@observer
export class FrameworksPage extends Component {
  constructor(props) {
    super(props)
    this.updateProperty = this.updateProperty.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  updateProperty(key, value) {
    this.props.ItemStore.searchItem[key] = value
  }

  onChange({ target }) {
    this.updateProperty(target.name, target.value)
  }

  results = resources => {
    if (resources.length === 0) {
      return <P>No results found</P>
    }
    return resources.map(resource => {
      const { title, description } = resource
      return (
        <ul key={title}>
          <li data-value={title}>
            <div>
              <p>
                <strong>{title}</strong>
              </p>
              <p>{description}</p>
            </div>
          </li>
        </ul>
      )
    })
  }

  searchResults = userInput => {
    const { items } = this.props.ItemStore
    if (!userInput.trim()) {
      return this.results(items)
    }
    const totalResults = []
    items.map(item => {
      if (item.description.toLowerCase().includes(userInput.toLowerCase())) {
        return totalResults.push(item)
      }
    })
    return this.results(totalResults)
  }

  render() {
    const { searchItem } = this.props.ItemStore
    return (
      <FrameWorksDiv>
        <Search userInput={searchItem.userInput} onChange={this.onChange} />

        <ResultOutput>{this.searchResults(searchItem.userInput)}</ResultOutput>
      </FrameWorksDiv>
    )
  }
}
