import React from 'react';
import { useKeycloak as originalUseKeycloak } from '@react-keycloak/web';

const useKeycloak = () => {
  const { initialized, keycloak, ...rest } = originalUseKeycloak();
  const customLogin = () => {
    console.log('Custom login');
    keycloak.login();
  };
  return {
    initialized,
    keycloak: {
      ...keycloak,
      login: customLogin,
    },
    ...rest,
  };
};

export default useKeycloak;
