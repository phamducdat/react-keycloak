import React, { useEffect, useState } from 'react';
import { useKeycloak as originalUseKeycloak } from '@react-keycloak/web';

interface UserInfo {
  sub: string;
  email_verified: boolean;
  preferred_username: string;
}

const useKeycloak = () => {
  const { initialized, keycloak, ...rest } = originalUseKeycloak();
  const [permission, setPermission] = useState(false);

  const handleAuthSuccess = async () => {
    try {
      const userInfo = (await keycloak.loadUserInfo()) as UserInfo;
      const userId = userInfo.sub;
      const realm = keycloak.realm;
      const clientId = keycloak.clientId;
      const url = `${process.env.API_URL}/external/v1/admin/realms/${realm}/users/${userId}/clients/${clientId}/permission`;
      const response = await fetch(url);
      if (!response.ok) {
        setPermission(false);
      }
      const data = await response.json();
      setPermission(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
