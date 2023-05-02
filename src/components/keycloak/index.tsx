import React, { useEffect, useState } from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import type { KeycloakInstance } from 'keycloak-js';
import { AuthProviderProps } from '@react-keycloak/core';
import { fetchData } from './api';

const ReactKeycloakDomainPermissionProvider: React.FC<
  AuthProviderProps<KeycloakInstance>
> = (props) => {
  const { authClient, children, ...rest } = props;
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchAndSetData() {
      const url = `https://datpd.free.beeceptor.com/`;
      const fetchedData = await fetchData(url);
      setData(fetchedData);
    }

    fetchAndSetData();
  }, []);

  console.log('dat with fetched data = ', data);

  return (
    <ReactKeycloakProvider authClient={authClient} {...rest}>
      {children}
    </ReactKeycloakProvider>
  );
};

export default ReactKeycloakDomainPermissionProvider;
