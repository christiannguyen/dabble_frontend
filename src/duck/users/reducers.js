import UserActionTypes from './types';

const initialUserState = {
  user: {},
  isLoggedIn: false,
  isLoading: true,
};

export function users(state = initialUserState, { type, payload }) {
  switch (type) {
    case UserActionTypes.setUser:
      return {
        ...state,
        user: payload.user,
        isLoggedIn: payload.isLoggedIn,
      };
    case UserActionTypes.setLoading:
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
}
