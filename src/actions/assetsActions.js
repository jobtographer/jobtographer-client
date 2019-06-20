import { createAction } from 'promise-middleware-redux';
import { 
  get,
  post
} from '../services/request';

const getAssets = (query, value) => get(`/api/v1/assets?${query}=${value}`);
const createAsset = asset => post('/ap1/v1/assets', asset);

export const [
  fetchAssets,
  FETCH_ASSETS,
  FETCH_ASSETS_PENDING
] = createAction('FETCH_ASSETS', getAssets);

export const [ 
  newAsset, 
  NEW_ASSET,
  NEW_ASSET_PENDING
] = createAction('NEW_ASSET', createAsset);
