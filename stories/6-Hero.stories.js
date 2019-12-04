import React from 'react';

import Buttons from '../src/components/buttons';
import Hero from '../src/components/molecules/hero';
import Image from '../src/components/image';
import Text from '../src/components/text';

import { PrimaryButton, SecondaryButton } from '../src/components/button';

import imageFile4 from '../static/image-4.png';

export default {
  title: 'Hero',
};

const RightContent = () => (
  <>
    <Text as="h1" color="white" margin="0" size="h1" weight="semiBold">A beautiful suite of React components</Text>
    <Text color="white" size="h4">Our React components are beautifully crafted to create a variety of landing pages to suit you need.</Text>
    <Buttons>
      <PrimaryButton>Get Started</PrimaryButton>
      <SecondaryButton theme="transparent">Learn More</SecondaryButton>
    </Buttons>
  </>
)

export const hero = () => (
  <main>
    <Hero leftContent={<Image src={imageFile4} />} rightContent={<RightContent />} />
  </main>
);