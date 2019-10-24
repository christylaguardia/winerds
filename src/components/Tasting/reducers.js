// export const FETCHED_PROFILE_NAMES = 'FETCHED_PROFILE_NAMES';
// export const FETCHED_PROFILE = 'FETCHED_PROFILE';
export const SAVED_TASTING = 'SAVED_TASTING';
export const FETCHED_TASTINGS = 'FETCHED_TASTINGS';

// export function profileNames(state = null, { type, payload }) {
//   switch (type) {
//     case FETCHED_PROFILE_NAMES:
//       return payload;
//     default:
//       return state;
//   }
// }

// export function profiles(state = null, { type, payload }) {
//   switch (type) {
//     case FETCHED_PROFILE:
//       return { ...state, [payload._id]: payload };
//     default:
//       return state;
//   }
// }

// export function tastings(state = null, { type, payload }) {
//   switch (type) {
//     case SAVED_TASTING:
//       return { ...state, [payload._id]: payload };
//     case FETCHED_TASTINGS: {
//       // convert array to object
//       const newTastings = {};
//       payload.forEach(tasting => newTastings[tasting._id] = tasting);

//       return { ...state, ...newTastings };
//     }
//     default:
//       return state;
//   }
// }

export function tastings(state = null, { type, payload }) {
  switch (type) {
    case SAVED_TASTING:
    case FETCHED_TASTINGS:
      return { ...state, payload };
    default:
      return state;
  }
}
