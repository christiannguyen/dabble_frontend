import { baseGet } from 'libs/api'
import { URLS } from 'libs/constants'
import ActivitiesActionTypes from './types'

function requestingActivities() {
  return {
    type: ActivitiesActionTypes.requestActivities
  }
}

function getActivitiesFailure(error) {
  return {
    type: ActivitiesActionTypes.receiveActivitiesFailure,
    payload: {
      error
    }
  }
}

function getActivitiesSuccess(searchResults) {
  return {
    type: ActivitiesActionTypes.receiveActivitiesSuccess,
    payload: {
      searchResults
    }
  }
}

export const handleSearchInput = searchInput => {
  return { type: ActivitiesActionTypes.handleSearchInput, payload: searchInput }
}

export const getActivities = () => async (dispatch, getState) => {
  const { searchActivities, selectedTrip } = getState()

  const { searchInput } = searchActivities
  const {
    tripInfo: { location }
  } = selectedTrip
  try {
    dispatch(requestingActivities())
    const queryParams = {
      location,
      query: searchInput
    }
    const activitiesResponse = await baseGet(URLS.activities, queryParams)

    const { data } = activitiesResponse
    const venues = data.map(activities => activities.venue)
    console.log('venues', venues)
    dispatch(getActivitiesSuccess(venues))
  } catch (error) {
    console.log('err', error)
    // dispatch(getActivitiesFailure(error));
  }
}

export const setActivityTime = data => ({
  type: ActivitiesActionTypes.setActivityTime,
  payload: data
})

// export const saveActivity = () => async (dispatch, getState) => {
//   const { activityTimes } = getState();
//   try {

//   }
// };
