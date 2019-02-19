import ActivitiesActionTypes from './types';

const initialSearchActivites = {
  loading: false,
  searchInput: '',
  searchResults: [],
  error:  null,
}

export function searchActivities(state = initialSearchActivites, { type, payload }) {
  switch(type) {
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

