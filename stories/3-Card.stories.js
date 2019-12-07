import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Button from '../src/components/button';
import Card from '../src/components/card';
import Image from '../src/components/image';
import Section from '../src/components/section';
import Text from '../src/components/text';
import PriceCard from '../src/components/molecules/price-card';

export default {
  title: 'Card',
};

const pricingItems = [
  {
    label: 'Send 5 invoices and quotes',
    type: ['personal', 'business', 'enterprise']
  },
  {
    label: '2 Clients and Products',
    type: ['personal', 'business', 'enterprise']
  },
  {
    label: 'Invoicing and Payments',
    type: ['personal', 'business', 'enterprise']
  },
  {
    label: 'Enter 5 bills',
    type: ['personal', 'business', 'enterprise']
  },
  {
    label: 'Data Security and Backups',
    type: ['personal', 'business', 'enterprise']
  },
  {
    label: 'Unlimited Staff Accounts',
    type: ['business', 'enterprise']
  },
  {
    label: 'Web Booking Widget',
    type: ['enterprise']
  },
  {
    label: 'Monthly Reports and Analytics',
    type: ['enterprise']
  },
];

export const profiles = () => (
  <Section theme="primary">
    <Container>
      <Text align="center" color="dark" size="h2" weight="bold">Our Team</Text>
      <Text align="center" size="h4">Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</Text>
      <Row>
        <Col sm={3}>
          <Card>
            <Image src="http://placekitten.com/500/500" />
            <Text align="center" color="dark" size="h4" weight="bold">Park Tim</Text>
            <Text align="center">CEO</Text>
          </Card>
        </Col>
        <Col sm={3}>
          <Card>
            <Image src="http://placekitten.com/500/500" />
            <Text align="center" size="h4" color="dark" weight="bold">Douglas Costa</Text>
            <Text align="center">Manager</Text>
          </Card>
        </Col>
        <Col sm={3}>
          <Card>
            <Image src="http://placekitten.com/500/500" />
            <Text align="center" size="h4" color="dark" weight="bold">John Doe</Text>
            <Text align="center">SEO Expert</Text>
          </Card>
        </Col>
        <Col sm={3}>
          <Card>
            <Image src="http://placekitten.com/500/500" />
            <Text align="center" size="h4" color="dark" weight="bold">Steven Smith</Text>
            <Text align="center">Frontend Developer</Text>
          </Card>
        </Col>
      </Row>
    </Container>
  </Section>
);

export const pricing = () => (
  <Section theme="transparent">
    <Container>
      <Text align="center" color="dark" size="h2" weight="bold">Easy Pricing Plans</Text>
      <Text align="center" size="h4">Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</Text>
      <Row>
        <Col sm={4}>
          <PriceCard buttonLabel="Get Started" items={pricingItems} price="£15 / Month" title="Personal" type="personal" />
        </Col>
        <Col sm={4}>
          <PriceCard buttonLabel="Get Started" items={pricingItems} price="£39 / Month" title="Business" type="business" />
        </Col>
        <Col sm={4}>
          <PriceCard buttonLabel="Get Started" items={pricingItems} price="£99 / Month" title="Enterprise" type="enterprise" />
        </Col>
      </Row>
    </Container>
  </Section>
);