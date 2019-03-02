
import { combineReducers } from 'redux'
import * as ActivitiesReducer from 'duck/activities/reducers';
import * as TripsReducer from 'duck/trips/reducers';

export default combineReducers({
  ...ActivitiesReducer,
  ...TripsReducer,
});
