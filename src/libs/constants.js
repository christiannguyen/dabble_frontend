const BASE_URL = 'http://localhost:3000';

export const URLS = {
  activities: `${BASE_URL}/api/activities`,
  user: {
    login: 'api/login',
    register: 'api/register',
    isLoggedIn: `${BASE_URL}/api/logged_in`,
  },
  trips: `${BASE_URL}/api/trips`,
  trip: shortUrl => `${BASE_URL}/api/trips/${shortUrl}`,
};
