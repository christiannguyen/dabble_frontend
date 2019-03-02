import moment from 'moment';
import TripActionTypes from './types';

const initialNewTripState = {
  startDate: moment(),
  endDate: moment(),
};

export function newTripDetails(state = initialNewTripState, { type, payload }) {
  switch (type) {
    case TripActionTypes.selectDates:
      return {
        ...state,
        ...payload,
      };
    case TripActionTypes.initialNewTripState:
      return initialNewTripState;
    default:
      return state;
  }
}
