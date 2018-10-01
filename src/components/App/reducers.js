export const LOADING = 'LOADING';
export const LOADED = 'LOADED';
export const ERROR_ADD = 'ERROR_ADD';
export const ERROR_REMOVE = 'ERROR_REMOVE';

export function loading(state = false, { type }) {
  switch (type) {
    case LOADING:
      return true;
    case LOADED:
      return false;
    default:
      return state;
  }
}

export function errors(state = null, { type, payload }) {
  switch (type) {
    case ERROR_ADD:
      return [state.errors, ...payload];
    case ERROR_REMOVE:
    default:
      return state;
  }
}

