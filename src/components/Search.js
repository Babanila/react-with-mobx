import React from "react"
import "../styles/Seacrh.css"

const Search = props => {
  return (
    <form noValidate action="" role="search">
      <input
        type="text"
        name="userInput"
        value={props.userInput}
        placeholder="SEARCH"
        aria-label="SEARCH"
        onChange={props.onChange}
      />
    </form>
  )
}

export default Search
