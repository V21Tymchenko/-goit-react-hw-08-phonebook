const getLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user?.name;
const getFetchingCurrentUser = state => state.auth.isFetchCurenntUser;

export const authSelectors = {
  getLoggedIn,
  getUserName,
  getFetchingCurrentUser,
};
export default authSelectors;
