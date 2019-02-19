import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SearchBar from 'components/searchBar/searchBar';
import { getActivities } from 'duck/activities/actions';
import Loader from 'react-loader-spinner'
import ActivityCard from 'components/activityCard/activityCard';

function handleClick(props) {
  // console.log('props from here', props);
  if(!props.searchActivities.loading) {
    console.log('called');
    props.getActivities();
  }
}

const ActivitySearch = (props) => {
  console.log('propsssss', props);
  const { searchActivities: { searchResults }} = props;
  return  (
    <React.Fragment>
      <SearchBar />
      <button onClick={handleClick.bind(null, props)}>testing</button>
      {props.searchActivities.loading && <Loader
	     type="Puff"
	     color="#00BFFF"
	     height="400"
	     width="400"
      />
      }
      {searchResults.map((venue) => {
        return (
          <ActivityCard title={venue.name} category={venue.categories[0].shortName}/>
        )
      })}
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  searchActivities: state.searchActivities,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getActivities,
      // changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivitySearch)
