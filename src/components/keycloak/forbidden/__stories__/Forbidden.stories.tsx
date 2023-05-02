import Forbidden from '../index';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

export default {
  title: 'Forbidden',
  component: Forbidden,
  argTypes: {},
} as ComponentMeta<any>;

const Template: ComponentStory<any> = (args) => <Forbidden />;

export const Default = Template.bind({});
