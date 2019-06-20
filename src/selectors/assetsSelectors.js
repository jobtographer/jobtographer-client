export const getAssetsState = state => state.assets;
export const getResumes = state => getAssetsState(state).resumes;
export const getAssetsLoading = state => getAssetsState(state).loading;
export const getCoverLetters = state => getAssetsState(state).getCoverLetters;

