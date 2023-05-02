import React from 'react';
import { useKeycloak as originalUseKeycloak } from '@react-keycloak/web';

const useKeycloak = () => {
  const { initialized, keycloak, ...rest } = originalUseKeycloak();
  const customLogin = () => {
    keycloak.login().then((response) => {
      console.log('dat with response in login = ', response);
    });
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
