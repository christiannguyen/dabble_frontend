import React from 'react'
import styled from 'styled-components'

const SearchSuggestionsWrapper = styled.div`
  margin-top: 20px;
  padding-left: 10px;
  width: 100%;
`

const SUGGESTIONS_LIST = [
  'Food',
  'Drinks',
  'Coffee',
  'Shops',
  'Arts',
  'Outdoors',
  'Sights',
  'Trending'
]

const SuggestionsSpan = styled.span`
  padding: 5px 8px;
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #e8e8e8;
  /* color: #c2c2c2; */
  /* font-weight: bold; */
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`

const Suggestions = ({ suggestion }) => {
  return <SuggestionsSpan>{suggestion}</SuggestionsSpan>
}

const SearchSuggestions = () => {
  return (
    <SearchSuggestionsWrapper>
      <p>Suggestions</p>
      {SUGGESTIONS_LIST.map(suggestion => (
        <Suggestions suggestion={suggestion} />
      ))}
    </SearchSuggestionsWrapper>
  )
}

export default SearchSuggestions
