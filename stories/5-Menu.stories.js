import React from 'react';

import Menu from '../src/components/menu';

export default {
  title: 'Menu',
};

export const horizontal = () => (
  <div style={{padding: '20px'}}>
    <Menu type="horizontal" items={[
      { label: 'About', path: './' },
      { label: 'Contact', path: './' },
      { label: 'FAQ', path: './' },
      { label: 'Press', path: './' }
    ]} />
  </div>
);

export const vertical = () => (
  <div style={{padding: '20px'}}>
    <Menu items={[
      { label: 'About', path: './' },
      { label: 'Contact', path: './' },
      { label: 'FAQ', path: './' },
      { label: 'Press', path: './' }
    ]} />
  </div>
);