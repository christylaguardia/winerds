export const CREATE_TASTING_REQUEST = 'CREATE_TASTING_REQUEST';
export const CREATE_TASTING_SUCCESS = 'CREATE_TASTING_SUCCESS';
export const CREATE_TASTING_FAILURE = 'CREATE_TASTING_FAILURE';
export const GET_TASTINGS_REQUEST = 'GET_TASTINGS_REQUEST';
export const GET_TASTINGS_SUCCESS = 'GET_TASTINGS_SUCCESS';
export const GET_TASTINGS_FAILURE = 'GET_TASTINGS_FAILURE';

export function tastings(state = null, { type, payload }) {
  switch (type) {
    case CREATE_TASTING_SUCCESS:
    case GET_TASTINGS_SUCCESS:
      return { ...state, payload };
    default:
      return state;
  }
}
