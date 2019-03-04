import moment from 'moment';
import TripActionTypes from './types';

const initialNewTripState = {
  startDate: moment(),
  endDate: moment(),
  location: null,
};

export function newTripDetails(state = initialNewTripState, { type, payload }) {
  console.log('payload', payload);
  switch (type) {
    case TripActionTypes.selectDates:
      return {
        ...state,
        ...payload,
      };
    case TripActionTypes.selectLocation:
      return {
        ...state,
        location: payload,
      };
    case TripActionTypes.resetNewCard:
      return initialNewTripState;
    default:
      return state;
  }
}
