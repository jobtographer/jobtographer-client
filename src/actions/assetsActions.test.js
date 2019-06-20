import { newAsset, fetchAssets } from './assetsActions';

jest.mock('./assetsActions.js', () => ({
  getAssets() {
    return Promise.resolve([]);
  },
  createAsset() {
    return Promise.resolve([]);
  }
})); 

describe('ASSET ACTIONS', () => {
  it('creates an action to fetch the assets', () => {
    const action = fetchAssets();

    expect(action).toEqual({
      type: 'FETCH_ASSETS',
      pendingType: 'FETCH_ASSETS_PENDING',
      fulfilledType: 'FETCH_ASSETS_FULFILLED',
      rejectedType: 'FETCH_ASSETS_REJECTED',
      payload: expect.any(Promise)
    });
  });
  
  it('create asset action', () => {
    const action = newAsset('1');

    expect(action).toEqual({
      type: 'NEW_ASSET',
      pendingType: 'NEW_ASSET_PENDING',
      fulfilledType: 'NEW_ASSET_FULFILLED',
      rejectedType: 'NEW_ASSET_REJECTED',
      payload: expect.any(Promise)
    });
  });
});
