import React from 'react';
import { Row, Col } from 'react-grid-system';

import {PrimaryButton, SecondaryButton} from '../src/components/button';
import Buttons from '../src/components/buttons';
import Center from '../src/components/center';
import Image from '../src/components/image';
import Hero from '../src/components/hero';
import Text from '../src/components/text';

import imageFile4 from '../static/image-4.png';

export default {
  title: 'Hero',
};

export const hero = () => (
  <main>
    <Hero>
      <Row>
        <Col sm={6}>
          <Center>
            <Image src={imageFile4} />
          </Center>
        </Col>
        <Col sm={6}>
          <Text as="h1" color="white" margin="0" size="h1" weight="semiBold">A beautiful suite of React components</Text>
          <Text color="white" size="h4">Our React components are beautifully crafted to create a variety of landing pages to suit you need.</Text>
          <Buttons>
            <PrimaryButton>Get Started</PrimaryButton>
            <SecondaryButton theme="transparent">Learn More</SecondaryButton>
          </Buttons>
        </Col>
      </Row>
    </Hero>
  </main>
);