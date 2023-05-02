import Keycloak from 'keycloak-js';
import { Meta, Story } from '@storybook/react';
import ReactKeycloakDomainPermissionProvider from '../index';
import { AuthProviderProps } from '@react-keycloak/core';
import React from 'react';
import mockKeycloak from './mockKeycloak';

// const keycloak = new Keycloak({
//   url: 'http://localhost:8080/auth',
//   realm: 'test',
//   clientId: 'react-client',
// });

const meta: Meta = {
  title: 'ReactKeycloakDomainPermissionProvider',
  component: ReactKeycloakDomainPermissionProvider,
};
export default meta;

const Template: Story<AuthProviderProps<any>> = (args) => (
  <ReactKeycloakDomainPermissionProvider {...args}>
    <div>Your content goes here</div>
  </ReactKeycloakDomainPermissionProvider>
);

export const Default = Template.bind({});
Default.args = {
  authClient: mockKeycloak,
};
