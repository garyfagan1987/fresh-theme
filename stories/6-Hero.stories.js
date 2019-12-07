import React from 'react';

import Button from '../src/components/atoms/button';
import Buttons from '../src/components/atoms/buttons';
import Hero from '../src/components/molecules/hero';
import Image from '../src/components/atoms/image';
import Text from '../src/components/atoms/text';

import imageFile4 from '../static/image-4.png';

export default {
  title: 'Hero',
};

const RightContent = () => (
  <>
    <Text as="h1" color="white" margin="0" size="h1" weight="semiBold">A beautiful suite of React components</Text>
    <Text color="white" size="h4">Our React components are beautifully crafted to create a variety of landing pages to suit you need.</Text>
    <Buttons>
      <Button>Get Started</Button>
      <Button type="secondary">Learn More</Button>
    </Buttons>
  </>
)

export const hero = () => (
  <main>
    <Hero leftContent={<Image src={imageFile4} />} rightContent={<RightContent />} />
  </main>
);