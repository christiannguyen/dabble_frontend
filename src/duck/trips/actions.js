import { baseGet, basePost } from 'libs/api';
import { URLS } from 'libs/constants';
import { formatMomentDatetime } from 'libs/sharedHelpers';
import TripsActionTypes from './types';

export const selectTripDates = data => ({
  type: TripsActionTypes.selectDates,
  payload: data,
});

export const selectLocation = data => ({
  type: TripsActionTypes.selectLocation,
  payload: data,
});

export const createNewTrip = () => async (dispatch, getState) => {
  const { newTripDetails } = getState();
  const { startDate, endDate, location } = newTripDetails;

  const params = {
    startDate: formatMomentDatetime(startDate),
    endDate: formatMomentDatetime(endDate),
    location: location.value,
  };

  try {
    await basePost(URLS.trips, params);
  } catch (err) {
    console.log('err', err);
  }
};

const getUsersTripsSuccess = payload => ({
  type: TripsActionTypes.requestingUsersTripsSuccess,
  payload,
});

export const getUsersTrips = () => async (dispatch) => {
  try {
    dispatch({ type: TripsActionTypes.requestingUsersTrips });
    const response = await baseGet(URLS.trips);
    const trips = response.data;
    dispatch(getUsersTripsSuccess(trips));
  } catch (err) {
    console.log(err);
  }
};

const getSelectedTripSuccess = payload => ({
  type: TripsActionTypes.requestingSelectedTripSuccess,
  payload,
});

export const getSelectedTrip = shortUrl => async (dispatch) => {
  try {
    console.log('calls this')
    dispatch({ type: TripsActionTypes.requestingSelectedTrip });
    const response = await baseGet(URLS.trip(shortUrl));
    const tripInfo = response.data;
    dispatch(getSelectedTripSuccess(tripInfo));
  } catch (err) {
    console.log(err);
  }
};
