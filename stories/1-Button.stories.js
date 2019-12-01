import React from 'react';
import { action } from '@storybook/addon-actions';
import {PrimaryButton, SecondaryButton} from '../src/components/button';

export default {
  title: 'Button',
};

export const primary = () => (
  <div style={{padding: '20px'}}>
    <PrimaryButton onClick={action('clicked')}>Primary Button</PrimaryButton>
  </div>
);

export const secondary = () => (
  <div style={{backgroundColor: '#70C1B3', padding: '20px'}}>
    <SecondaryButton onClick={action('clicked')}>Secondary Button</SecondaryButton>
  </div>
);