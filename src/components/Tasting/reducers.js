export const FETCHED_PROFILE_NAMES = 'FETCHED_PROFILE_NAMES';
export const FETCHED_PROFILE = 'FETCHED_PROFILE';

export function profileNames(state = null, { type, payload }) {
  switch (type) {
    case FETCHED_PROFILE_NAMES:
      return payload;
    default:
      return state;
  }
}

export function profiles(state = null, { type, payload }) {
  switch (type) {
    case FETCHED_PROFILE:
      return { ...state, [payload._id]: payload };
    default:
      return state;
  }
}
