import { FETCHED_PROFILE_NAMES, FETCHED_PROFILE, SAVED_TASTING } from './reducers';
import profilesApi from '../../services/winerdsApi/profiles';
import tastingsApi from '../../services/winerdsApi/tastings';

export const fetchProfiles = () => ({
  type: FETCHED_PROFILE_NAMES,
  payload: profilesApi.getProfiles()
});

export const fetchProfile = id => ({
  type: FETCHED_PROFILE,
  payload: profilesApi.getProfileById(id)
});

export const saveTasting = tasting => ({
  type: SAVED_TASTING,
  payload: tastingsApi.saveTasting(tasting)
});
