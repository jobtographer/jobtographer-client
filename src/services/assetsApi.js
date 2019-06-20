import {
  get,
  post
} from './request';

export const getResumes = () => get('/api/v1/assets?assetType=resume');
export const createAsset = asset => post('/ap1/v1/assets', asset);
export const getCoverLetters = () => get('/api/assets?assetType=coverLetter');

