import React from 'react';
import { useKeycloak as originalUseKeycloak } from '@react-keycloak/web';

const useKeycloak = () => {
  const { keycloak } = originalUseKeycloak();

  const customLogin = async (options: any) => {
    console.log('Custom behavior before login');

    await keycloak.login(options).then((response) => {
      console.log('dat with response in keycloak login = ', response);
    });

    console.log('Custom behavior after login');
  };

  return {
    ...keycloak,
    login: customLogin,
  };
};

export default useKeycloak;
