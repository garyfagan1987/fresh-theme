import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faDownload, faGrinStars, faPaintRoller, faPuzzlePiece, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFontAwesomeFlag, faReact } from '@fortawesome/free-brands-svg-icons';

import theme from '../src/styles/colours';

import {PrimaryButton, SecondaryButton} from '../src/components/button';
import Buttons from '../src/components/buttons';
import Card from '../src/components/card';
import Center from '../src/components/center';
import Image from '../src/components/image';
import Hero from '../src/components/hero';
import Icon from '../src/components/icon';
import Link from '../src/components/link';
import List from '../src/components/list';
import { HorizontalMenu, VerticalMenu } from '../src/components/menu';
import Margin from '../src/components/margin';
import Section from '../src/components/section';
import Text from '../src/components/text';

import imageFile1 from '../static/image-1.png';
import imageFile2 from '../static/image-2.png';
import imageFile3 from '../static/image-3.png';
import imageFile4 from '../static/image-4.png';
import imageFile5 from '../static/image-5.png';

import personImage1 from '../static/person-1.jpg';
import personImage2 from '../static/person-2.jpg';
import personImage3 from '../static/person-3.jpg';
import personImage4 from '../static/person-4.jpg';

export default {
  title: 'Page',
};

export const page = () => (
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
    <Section theme="transparent">
      <Container>
        <Text align="center" color="dark" margin="0 0 1.5rem" size="h2" weight="semiBold">Whats included?</Text>
        <Margin bottom="lg">
          <Row>
            <Col sm={4}>
              <Icon className="fa-layers fa-fw" as="span">
                <FontAwesomeIcon icon={faCircle} color={theme.secondary} />
                <FontAwesomeIcon icon={faReact} inverse transform="shrink-10" />
              </Icon>
              <Text align="center" color="dark" size="h3" weight="semiBold">ReactJS & GatsbyJS</Text>
              <Text align="center">Packaged with React 16.8+ and the latest version of GatsbyJS with page examples</Text>
            </Col>
            <Col sm={4}>
              <Icon className="fa-layers fa-fw" as="span">
                <FontAwesomeIcon icon={faCircle} color={theme.secondary} />
                <FontAwesomeIcon icon={faPaintRoller} inverse transform="shrink-10" />
              </Icon>
              <Text align="center" color="dark" size="h3" weight="semiBold">Styled Components</Text>
              <Text align="center">Use the best bits of ES6 and CSS to extend this theme without stress</Text>
            </Col>
            <Col sm={4}>
              <Icon className="fa-layers fa-fw" as="span">
                <FontAwesomeIcon icon={faCircle} color={theme.secondary} />
                <FontAwesomeIcon icon={faPuzzlePiece} inverse transform="shrink-10" />
              </Icon>
              <Text align="center" color="dark" size="h3" weight="semiBold">Customisation</Text>
              <Text align="center">A suite of components that are fully customisable and work together</Text>
            </Col>
          </Row>
        </Margin>
        <Row>
          <Col sm={4}>
            <Icon className="fa-layers fa-fw" as="span">
              <FontAwesomeIcon icon={faCircle} color={theme.secondary} />
              <FontAwesomeIcon icon={faSearch} inverse transform="shrink-10" />
            </Icon>
            <Text align="center" color="dark" size="h3" weight="semiBold">SEO Friendly</Text>
            <Text align="center">All components are SEO friendly so Google can find your content easily</Text>
          </Col>
          <Col sm={4}>
            <Icon className="fa-layers fa-fw" as="span">
              <FontAwesomeIcon icon={faCircle} color={theme.secondary} />
              <FontAwesomeIcon icon={faGrinStars} inverse transform="shrink-10" />
            </Icon>
            <Text align="center" color="dark" size="h3" weight="semiBold">10 Pages</Text>
            <Text align="center">A variety of different pages have already been pre-build to extend upon</Text>
          </Col>
          <Col sm={4}>
            <Icon className="fa-layers fa-fw" as="span">
              <FontAwesomeIcon icon={faCircle} color={theme.secondary} />
              <FontAwesomeIcon icon={faFontAwesomeFlag} inverse transform="shrink-10" />
            </Icon>
            <Text align="center" color="dark" size="h3" weight="semiBold">Font Awesome</Text>
            <Text align="center">Packaged with Font Awesome for all of your iconography requirements</Text>
          </Col>
        </Row>
      </Container>
    </Section>
    <Section theme="secondary">
      <Container>
        <Row>
          <Col sm={8}>
            <Text color="white" margin="0" size="h2">Download and try out the Fresh Theme today!</Text>
          </Col>
          <Col sm={4}>
            <PrimaryButton float="right">
              <FontAwesomeIcon icon={faDownload} />
              &nbsp;&nbsp;Download
            </PrimaryButton>
          </Col>
        </Row>
      </Container>
    </Section>
    <Section theme="transparent">
      <Container>
        <Margin bottom="lg">
          <Row>
            <Col sm={6}>
              <Center>
                <Text color="dark" margin="0 0 1.5rem" size="h2" weight="semiBold">Get Started With Our Software</Text>
                <Text>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</Text>
                <List>
                  <li>Unlimited Video Call</li>
                  <li>Add Favourite contact</li>
                  <li>Camera Filter</li>
                </List>
                <PrimaryButton>Read More</PrimaryButton>
              </Center>
            </Col>
            <Col sm={6}>
              <Image src={imageFile1} />
            </Col>
          </Row>
        </Margin>
        <Margin bottom="lg">
          <Row>
            <Col sm={6}>
              <Image src={imageFile2} />
            </Col>
            <Col sm={6}>
              <Center>
                <Text color="dark" margin="0 0 1.5rem" size="h2" weight="semiBold">Engineered And Optimization</Text>
                <Text>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</Text>
                <List>
                  <li>Unlimited Video Call</li>
                  <li>Add Favourite contact</li>
                  <li>Camera Filter</li>
                </List>
                <PrimaryButton>Read More</PrimaryButton>
              </Center>
            </Col>
          </Row>
        </Margin>
        <Row>
          <Col sm={6}>
            <Center>
              <Text color="dark" margin="0 0 1.5rem" size="h2" weight="semiBold">Quick & Easy Process</Text>
              <Text>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</Text>
              <List>
                <li>Unlimited Video Call</li>
                <li>Add Favourite contact</li>
                <li>Camera Filter</li>
              </List>
              <PrimaryButton>Read More</PrimaryButton>
            </Center>
          </Col>
          <Col sm={6}>
            <Image src={imageFile3} />
          </Col>
        </Row>
      </Container>
    </Section>
    <Section theme="primary">
      <Container>
        <Text align="center" margin="0 0 1.5rem" color="dark" size="h2" weight="semiBold">Our Team</Text>
        <Text align="center" size="h4">Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</Text>
        <Row>
          <Col sm={3}>
            <Card>
              <Image src={personImage1} />
              <Text align="center" color="dark" size="h3" weight="semiBold">Park Tim</Text>
              <Text align="center">CEO</Text>
            </Card>
          </Col>
          <Col sm={3}>
            <Card>
              <Image src={personImage2} />
              <Text align="center" size="h3" color="dark" weight="semiBold">Douglas Costa</Text>
              <Text align="center">Manager</Text>
            </Card>
          </Col>
          <Col sm={3}>
            <Card>
              <Image src={personImage3} />
              <Text align="center" size="h3" color="dark" weight="semiBold">John Doe</Text>
              <Text align="center">SEO Expert</Text>
            </Card>
          </Col>
          <Col sm={3}>
            <Card>
              <Image src={personImage4} />
              <Text align="center" size="h3" color="dark" weight="semiBold">Steven Smith</Text>
              <Text align="center">Frontend Developer</Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </Section>
    <Section theme="transparent">
      <Container>
        <Text align="center" color="dark" margin="0 0 1.5rem" size="h2" weight="semiBold">Easy Pricing Plans</Text>
        <Text align="center" size="h4">Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</Text>
        <Row>
          <Col sm={4}>
            <Card>
              <Text align="center" margin="0 0 1.5rem" color="dark" size="h3" weight="semiBold">£15 / Month</Text>
              <Text align="center" color="primary" size="h3" weight="semiBold">Personal</Text>
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
              <Text align="center" margin="0 0 1.5rem" color="dark" size="h3" weight="semiBold">£39 / Month</Text>
              <Text align="center" color="primary" size="h3" weight="semiBold">Business</Text>
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
              <Text align="center" margin="0 0 1.5rem" color="dark" size="h3" weight="semiBold">£99 / Month</Text>
              <Text align="center" color="primary" size="h3" weight="semiBold">Enterprise</Text>
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
    <Section theme="white">
      <Container>
        <Row>
          <Col sm={6}>
            <Center>
              <Image src={imageFile5} />
            </Center>
          </Col>
          <Col sm={6}>
            <Text color="dark" margin="0 0 1.5rem" size="h2" weight="semiBold">Build Beautiful Interface Into Your Application</Text>
            <Text size="h4">Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</Text>
            <List>
              <li>Unlimited Video Call</li>
              <li>Add Favourite contact</li>
              <li>Camera Filter</li>
            </List>
          </Col>
        </Row>
      </Container>
    </Section>
    <Section theme="transparent">
      <Container>
        <Row>
          <Col sm={3}>
            <Text color="primary" size="h3" weight="semiBold">Fresh Theme</Text>
            <Text>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</Text>
          </Col>
          <Col sm={3}>
            <Text color="dark" size="h3" weight="semiBold">Company</Text>
            <VerticalMenu>
              <li>
                <Link animate href="./" weight="semiBold">About</Link>
              </li>
              <li>
                <Link animate href="./" weight="semiBold">Careers</Link>
              </li>
              <li>
                <Link animate href="./" weight="semiBold">Awards</Link>
              </li>
              <li>
                <Link animate href="./" weight="semiBold">User Program</Link>
              </li>
            </VerticalMenu>
          </Col>
          <Col sm={3}>
            <Text color="dark" size="h3" weight="semiBold">Products</Text>
            <VerticalMenu>
              <li>
                <Link animate href="./" weight="semiBold">Integrations</Link>
              </li>
              <li>
                <Link animate href="./" weight="semiBold">API</Link>
              </li>
              <li>
                <Link animate href="./" weight="semiBold">Pricing</Link>
              </li>
              <li>
                <Link animate href="./" weight="semiBold">Documentation</Link>
              </li>
            </VerticalMenu>
          </Col>
          <Col sm={3}>
            <Text color="dark" size="h3" weight="semiBold">Support</Text>
            <VerticalMenu>
              <li>
                <Link animate href="./" weight="semiBold">About</Link>
              </li>
              <li>
                <Link animate href="./" weight="semiBold">Contact</Link>
              </li>
              <li>
                <Link animate href="./" weight="semiBold">FAQ</Link>
              </li>
              <li>
                <Link animate href="./" weight="semiBold">Press</Link>
              </li>
            </VerticalMenu>
          </Col>
        </Row>
      </Container>
      <Container>
        <HorizontalMenu plane="horizontal" align="center">
          <li>
            <Link href="./" weight="semiBold">About</Link>
          </li>
          <li>
            <Link href="./" weight="semiBold">Contact</Link>
          </li>
          <li>
            <Link href="./" weight="semiBold">FAQ</Link>
          </li>
          <li>
            <Link href="./" weight="semiBold">Press</Link>
          </li>
        </HorizontalMenu>
        <Text align="center" as="span">Copyright @ 2019 Fresh Theme. All rights reserved</Text>
      </Container>
    </Section>
  </main>
);