import { FETCHED_PROFILE_NAMES, FETCHED_PROFILE } from './reducers';
import profilesApi from '../../services/winerdsApi/profiles';
// import { getProfile } from '../../services/content/tasting';

export const fetchProfiles = () => ({ type: FETCHED_PROFILE_NAMES, payload: profilesApi.getProfiles() });
export const fetchProfile = id => ({ type: FETCHED_PROFILE, payload: profilesApi.getProfileById(id) });
// export const fetchProfile = name => ({ type: FETCHED_PROFILE, payload: getProfile(name) });
