import ActivitiesActionTypes from './types';
import moment from 'moment';

const initialSearchActivites = {
  loading: false,
  searchInput: '',
  searchResults: [],
  error: null,
}

export function searchActivities(state = initialSearchActivites, { type, payload }) {
  switch (type) {
    case ActivitiesActionTypes.handleSearchInput:
      return {
        ...state,
        searchInput: payload.searchInput,
      }
    case ActivitiesActionTypes.requestActivities:
      return {
        ...state,
        loading: true,
      }
    case ActivitiesActionTypes.receiveActivitiesSuccess:
      return {
        ...state,
        ...payload,
        searchResults: [...state.searchResults, ...payload.searchResults],
        loading: false,
        error: null,
      }
    case ActivitiesActionTypes.receiveActivitiesFailure:
      return {
        ...state,
        loading: false,
        error: payload.error
      }
    default:
      return state;
  }
};
const FROM_DEFAULT_TIME = moment().hour(10).minute(0);
const TO_DEFAULT_TIME = moment().hour(11).minute(0);

const initialActivityTimes = {
  from: FROM_DEFAULT_TIME,
  to: TO_DEFAULT_TIME,
  date: null,
}

export function activityTimes(state = initialActivityTimes, { type, payload }) {
  switch (type) {
    case ActivitiesActionTypes.setActivityTime:
      return {
        ...state,
        ...payload,
      }
    case ActivitiesActionTypes.setActivityDate:
      return {
        ...state,
        date: payload,
      }
    default:
      return state;
  }
}
