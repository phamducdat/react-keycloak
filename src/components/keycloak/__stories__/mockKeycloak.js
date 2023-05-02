export const mockKeycloak = {
  init: () => Promise.resolve(true),
  onAuthSuccess: () => {},
  onAuthError: () => {},
  onAuthRefreshSuccess: () => {},
  onAuthRefreshError: () => {},
  onAuthLogout: () => {},
  onTokenExpired: () => {},
  updateToken: () => Promise.resolve(true),
};
