import { baseGet } from 'libs/api';
import { URLS } from 'libs/constants';
import ActivitiesActionTypes from './types';


function requestingActivities() {
  return {
    type: ActivitiesActionTypes.requestActivities,
  };
}

function getActivitiesFailure(error) {
  return {
    type: ActivitiesActionTypes.receiveActivitiesFailure,
    payload: {
      error,
    },
  };
}

function getActivitiesSuccess(searchResults) {
  return {
    type: ActivitiesActionTypes.receiveActivitiesSuccess,
    payload: {
      searchResults,
    },
  };
}

const handleSearchInput = searchInput => (dispatch) => {
  dispatch({
    type: ActivitiesActionTypes.handleSearchInput,
    payload: {
      searchInput,
    },
  });
};

export const getActivities = () => async (dispatch, getState) => {
  const { searchActivities } = getState();
  const { searchInput } = searchActivities;
  try {
    dispatch(requestingActivities());
    const activitiesResponse = await baseGet(URLS.activities);
    const { data } = activitiesResponse;
    const venues = data.map(activities => activities.venue);
    console.log('venues', venues);
    dispatch(getActivitiesSuccess(venues));
  } catch (error) {
    console.log('err', error);
    // dispatch(getActivitiesFailure(error));
  }
};

export const setActivityTime = data => ({
  type: ActivitiesActionTypes.setActivityTime,
  payload: data,
});

// export const saveActivity = () => async (dispatch, getState) => {
//   const { activityTimes } = getState();
//   try {

//   }
// };