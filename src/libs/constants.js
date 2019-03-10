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

export const FOURSQUARE_CATEGORIES = {
  cafe: '4bf58dd8d48988d16d941735',
  dessert: '4bf58dd8d48988d1d0941735',
  breakfast: '4bf58dd8d48988d143941735',
  nightlife: '4d4b7105d754a06376d81259',
}
