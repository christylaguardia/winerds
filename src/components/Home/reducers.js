export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';
export const RESET_STORE = 'RESET_STORE';
export const SAVED_USER = 'SAVED_USER';
export const FETCHED_USER = 'FETCHED_USER';

export function user(state = null, { type, payload }) {
  switch (type) {
    case LOGIN:
      return payload;
    case SAVED_USER:
    case FETCHED_USER:
      return { ...state, data: payload };
    case LOGOUT:
    case RESET_STORE:
      return null;
    default:
      return state;
  }
}
