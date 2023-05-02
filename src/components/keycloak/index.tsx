import React from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import type { KeycloakInstance } from 'keycloak-js';
import { AuthProviderProps } from '@react-keycloak/core';

const ReactKeycloakDomainPermissionProvider: React.FC<
  AuthProviderProps<KeycloakInstance>
> = (props) => {
  const { authClient, children, ...rest } = props;

  return (
    <ReactKeycloakProvider authClient={authClient} {...rest}>
      {children}
    </ReactKeycloakProvider>
  );
};
export default ReactKeycloakDomainPermissionProvider;
