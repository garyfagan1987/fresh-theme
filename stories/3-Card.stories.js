import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import {PrimaryButton, SecondaryButton} from '../src/components/button';
import Card from '../src/components/card';
import Image from '../src/components/image';
import Section from '../src/components/section';
import Text from '../src/components/text';

export default {
  title: 'Card',
};

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
          <Card>
            <Text align="center" color="dark" size="h3" weight="bold">£15 / Month</Text>
            <Text align="center" color="green" size="h3" weight="bold">Personal</Text>
            <Text align="center">Send 5 invoices and quotes</Text>
            <Text align="center">2 Clients and Products</Text>
            <Text align="center">Invoicing and Payments</Text>
            <Text align="center">Enter 5 bills</Text>
            <Text align="center">Data Security and Backups</Text>
            <Text align="center" color="light" decoration="line-through">Unlimited Staff Accounts</Text>
            <Text align="center" color="light" decoration="line-through">Web Booking Widget</Text>
            <Text align="center" color="light" decoration="line-through">Monthly Reports and Analytics</Text>
            <PrimaryButton fullWidth>Get Started</PrimaryButton>
          </Card>
        </Col>
        <Col sm={4}>
          <Card>
            <Text align="center" color="dark" size="h3" weight="bold">£39 / Month</Text>
            <Text align="center" color="green" size="h3" weight="bold">Business</Text>
            <Text align="center">Send 5 invoices and quotes</Text>
            <Text align="center">2 Clients and Products</Text>
            <Text align="center">Invoicing and Payments</Text>
            <Text align="center">Enter 5 bills</Text>
            <Text align="center">Data Security and Backups</Text>
            <Text align="center">Unlimited Staff Accounts</Text>
            <Text align="center" color="light" decoration="line-through">Web Booking Widget</Text>
            <Text align="center" color="light" decoration="line-through">Monthly Reports and Analytics</Text>
            <PrimaryButton fullWidth>Get Started</PrimaryButton>
          </Card>
        </Col>
        <Col sm={4}>
          <Card>
            <Text align="center" color="dark" size="h3" weight="bold">£99 / Month</Text>
            <Text align="center" color="green" size="h3" weight="bold">Enterprise</Text>
            <Text align="center">Send 5 invoices and quotes</Text>
            <Text align="center">2 Clients and Products</Text>
            <Text align="center">Invoicing and Payments</Text>
            <Text align="center">Enter 5 bills</Text>
            <Text align="center">Data Security and Backups</Text>
            <Text align="center">Unlimited Staff Accounts</Text>
            <Text align="center">Web Booking Widget</Text>
            <Text align="center">Monthly Reports and Analytics</Text>
            <PrimaryButton fullWidth>Get Started</PrimaryButton>
          </Card>
        </Col>
      </Row>
    </Container>
  </Section>
);