import React from 'react';
import Section from '../src/components/section';

export default {
  title: 'Section',
};

export const primary = () => (
  <Section theme="primary">Primary Section</Section>
);

export const secondary = () => (
  <Section theme="secondary">Secondary Section</Section>
);

export const transparent = () => (
  <Section>Transparent Section</Section>
);