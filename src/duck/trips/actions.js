import { basePost } from 'libs/api';
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
