import React from 'react'
import styled from 'styled-components'
import Searchbar from 'components/searchBar/searchBar'
import SearchSuggestions from 'components/searchSuggestions'

const SearchSidebarWrapper = styled.div`
  border-right: 1px solid #e8e8e8;
  width: 300px;
  height: calc(100% - 100px);
`

const SuggestionsWrapper = styled.div``

const SearchSidebar = ({ handleSearchInput, getActivities }) => {
  return (
    <SearchSidebarWrapper>
      <Searchbar
        handleSearchInput={handleSearchInput}
        handleSearch={getActivities}
      />
      <SearchSuggestions />
    </SearchSidebarWrapper>
  )
}

export default SearchSidebar
