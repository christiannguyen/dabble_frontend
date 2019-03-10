import React, { useEffect } from 'react'
import styled from 'styled-components'

const SearchbarWrapper = styled.div`
  padding-top: 20px;
`

const SearchbarInput = styled.input`
  border-radius: 5px;
  display: block;
  width: 200px;
  margin: auto;
  padding: 5px 10px;
  border: 2px solid #e8e8e8;
  background-color: #f5f5f5;
`

const SearchBar = ({ handleSearchInput, handleSearch }) => {
  function handleChange(e) {
    const { value } = e.target
    handleSearchInput(value)
  }

  function handleKeyPress(e) {
    if (e.keyCode === 13 || e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <SearchbarWrapper>
      <SearchbarInput
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        placeholder="Search"
      />
    </SearchbarWrapper>
  )
}

export default SearchBar
