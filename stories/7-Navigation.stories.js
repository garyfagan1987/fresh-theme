import React from 'react';

import Navigation from '../src/components/molecules/navigation';

export default {
  title: 'Navigation',
};

const navigationItems = [
  { label: 'About', path: './' },
  { label: 'Contact', path: './' },
  { label: 'FAQ', path: './' },
  { label: 'Press', path: './' }
];

export const navigation = () => (
  <div style={{padding: '20px', position: 'relative'}}>
    <Navigation logo="Fresh Theme" items={navigationItems} />
  </div>
);