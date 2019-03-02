import TripsActionTypes from './types';

export const selectTripDates = data => ({
  type: TripsActionTypes.selectDates,
  payload: data,
});
