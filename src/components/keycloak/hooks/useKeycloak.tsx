import React from 'react';
import { useKeycloak as originalUseKeycloak } from '@react-keycloak/web';

const useKeycloak = () => {
  const { keycloak } = originalUseKeycloak();

  console.log('keycloak: ', keycloak);

  const customLogin = async (options: any) => {
    console.log('Custom behavior before login');

    const response = await keycloak.login(options);

    console.log('dat with response in keycloak login = ', response);

    console.log('Custom behavior after login');
  };

  return {
    ...keycloak,
  };
};

export default useKeycloak;
