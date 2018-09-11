export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';
export const RESET_STORE = 'RESET_STORE';

export function user(state=null, { type, payload }) {
  switch (type) {
    case LOGIN:
      return payload;
    case LOGOUT:
    case RESET_STORE:
      return null;
    default:
      return state;
  }
}
