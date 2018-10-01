import request from './_request';

export default {
  getUser() {
    return request.get('/user');
  },
  saveUser(user) {
    return request.put('/user', user);
  },
};
