import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../src/components/button';

export default {
  title: 'Button',
};

export const primary = () => (
  <div style={{padding: '20px'}}>
    <Button onClick={action('clicked')}>Primary Button</Button>
  </div>
);

export const secondary = () => (
  <div style={{backgroundColor: '#70C1B3', padding: '20px'}}>
    <Button type="secondary" onClick={action('clicked')}>Secondary Button</Button>
  </div>
);