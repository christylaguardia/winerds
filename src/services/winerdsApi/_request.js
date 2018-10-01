import store from '../../store';
import superagent from 'superagent';

const API_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:3001';
let token = '';

// Get the user's token from the redux store
store.subscribe(() => {
  const { user } = store.getState();
  if (user && user.idToken !== token) token = user && user.idToken;
});

// Add the Authorization header to every request
const wrap = cmd => cmd
  .set('Authorization', token)
  .then(
    r => r.body,
    ({ response: { body, text } }) => {
      const error = body ? body.message || body.error || body : text;
      throw error;
    }
  );

// Superagent wrappers to use in api calls
export default {
  get(url) {
    return wrap(superagent.get(`${API_URL}${url}`));
  },
  post(url, data) {
    return wrap(superagent.post(`${API_URL}${url}`).send(data));
  },
  put(url, data) {
    return wrap(superagent.put(`${API_URL}${url}`).send(data));
  },
  patch(url, data) {
    return wrap(superagent.patch(`${API_URL}${url}`).send(data));
  },
  delete(url, data) {
    let request = superagent.delete(`${API_URL}${url}`);
    if (data) request = request.send(data);
    return wrap(request);
  },
};