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
    const response = await baseGet(URLS.user.isLoggedIn);
    const { loggedIn, user } = response.data;
    dispatch(setUser(user, loggedIn));
    dispatch(setLoading(false));
  } catch (err) {
    dispatch(setLoading(false));
    console.log('err', err);
  }
};
