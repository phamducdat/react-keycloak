import React, { useEffect, useState } from 'react';
import { useKeycloak as originalUseKeycloak } from '@react-keycloak/web';

const useKeycloak = () => {
  const { initialized, keycloak, ...rest } = originalUseKeycloak();
  const [permission, setPermission] = useState(false);

  const checkAccess = (userInfo: any) => {
    console.log('User information:', userInfo);
    // Perform your access check based on the user information
  };

  const handleAuthSuccess = async () => {
    setPermission(true);
    console.log('Authentication successful');
    const userInfo = await keycloak.loadUserInfo();
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    checkAccess(userInfo);
  };

  useEffect(() => {
    keycloak.onAuthSuccess = handleAuthSuccess;

    return () => {
      keycloak.onAuthSuccess = undefined;
    };
  }, [keycloak]);

  return {
    initialized,
    keycloak: {
      ...keycloak,
      permission: permission,
    },
    ...rest,
  };
};

export default useKeycloak;
