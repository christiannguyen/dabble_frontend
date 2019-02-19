
import { combineReducers } from 'redux'
import * as ActivitiesReducer from 'duck/activities/reducers';

export default combineReducers({
  ...ActivitiesReducer,
})
