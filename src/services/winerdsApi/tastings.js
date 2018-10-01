import request from './_request';

export default {
  saveTasting(tasting) {
    return request.post('/tasting', tasting);
  },
  getTastings() {
    return request.get('/tasting');
  }
};
