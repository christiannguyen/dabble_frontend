import moment from 'moment';
import TripActionTypes from './types';

const initialNewTripState = {
  startDate: moment(),
  endDate: moment(),
  location: null,
};

export function newTripDetails(state = initialNewTripState, { type, payload }) {
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

const initialMyTripsState = {
  trips: [],
  isLoading: false,
};

export function usersTrips(state = initialMyTripsState, { type, payload }) {
  switch (type) {
    case TripActionTypes.requestingUsersTrips:
      return {
        ...state,
        isLoading: true,
      };
    case TripActionTypes.requestingUsersTripsSuccess:
      return {
        ...state,
        trips: payload,
        isLoading: false,
      };
    default:
      return state;
  }
}

const initialSelectedTripState = {
  isLoading: false,
  tripInfo: {},
};

export const selectedTrip = (state = initialSelectedTripState, { type, payload }) => {
  switch (type) {
    case TripActionTypes.requestingSelectedTrip:
      return {
        ...state,
        isLoading: true,
      };
    case TripActionTypes.requestingSelectedTripSuccess:
      return {
        ...state,
        tripsInfo: { ...payload },
        isLoading: false,
      };
    default:
      return null;
  }
}
