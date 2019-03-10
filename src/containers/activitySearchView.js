import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SearchSidebar from 'components/searchSidebar'
import { getActivities, handleSearchInput } from 'duck/activities/actions'
import Loader from 'react-loader-spinner'
import ActivityCard from 'components/activityCard/activityCard'
import styled from 'styled-components'

// function handleClick(props) {
//   // console.log('props from here', props);
//   if (!props.searchActivities.loading) {
//     console.log('called')
//     props.getActivities()
//   }
// }

const ActivitySearchView = props => {
  console.log('props searchview', props)
  return (
    <SearchSidebar
      handleSearchInput={props.handleSearchInput}
      getActivities={props.getActivities}
    />
  )
}

const mapStateToProps = state => ({
  searchActivities: state.searchActivities
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getActivities,
      handleSearchInput
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivitySearchView)
