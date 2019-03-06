import UserActionTypes from './types';
import { baseGet } from 'libs/api';
import { URLS } from 'libs/constants';

const setUser = (user, isLoggedIn) => ({
  type: UserActionTypes.setUser,
  payload: {
    user,
    isLoggedIn,
  },
});

const setLoading = loading => ({
  type: UserActionTypes.setLoading,
  payload: loading,
});

export const startupUser = async (dispatch) => {
  try {
    console.log('url', URLS.user.isLoggedIn)
    const response = await baseGet(URLS.user.isLoggedIn);
    const { loggedIn, user } = response.data;
    console.log('logged', loggedIn, user)
    dispatch(setUser(user, loggedIn));
    dispatch(setLoading(false));
  } catch (err) {
    dispatch(setLoading(false));
  }
};
