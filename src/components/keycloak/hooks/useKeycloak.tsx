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
    setPermission(false);
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
  const customLogin = async () => {
    console.log('dat with before login');

    try {
      await keycloak.login();
      console.log('dat with keycloak = ', keycloak);

      const userInfo = await keycloak.loadUserInfo();
      checkAccess(userInfo); // Perform the check after the login process is complete
    } catch (error) {
      console.error('Error during login:', error);
    } finally {
      console.log('dat with after login');
    }
  };

  return {
    initialized,
    keycloak: {
      ...keycloak,
      login: customLogin,
      permission: permission,
    },
    ...rest,
  };
};

export default useKeycloak;
