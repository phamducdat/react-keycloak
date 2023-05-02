import React from 'react';
import { useKeycloak as originalUseKeycloak } from '@react-keycloak/web';

const useKeycloak = () => {
  const { keycloak } = originalUseKeycloak();

  return {
    ...keycloak,
  };
};

export default useKeycloak;
