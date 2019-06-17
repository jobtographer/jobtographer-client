export const getJobDetailState = state => state.jobDetail;
export const getJobDetail = state => getJobDetailState(state).detail;
export const getJobDetailLoading = state => getJobDetailState(state).loading;
