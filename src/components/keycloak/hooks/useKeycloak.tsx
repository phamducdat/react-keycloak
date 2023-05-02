import React from 'react';
import { useKeycloak as originalUseKeycloak } from '@react-keycloak/web';

const useKeycloak = () => {
  const { initialized, keycloak, ...rest } = originalUseKeycloak();
  const customLogin = () => {
    console.log('dat with before login');
    keycloak.login().then((response) => {
      console.log('dat with keycloak = ', keycloak);
      console.log('dat with response in login = ', response);
    });
    console.log('dat with after login');
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
