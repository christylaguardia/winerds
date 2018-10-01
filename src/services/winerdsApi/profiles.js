import request from './_request';

export default {
  getProfiles() {
    return request.get('/profiles');
  },
  getProfileById(id) {
    return request.get(`/profiles/${id}`);
  },
};