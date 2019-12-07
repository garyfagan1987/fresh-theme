import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { faDownload, faGrinStars, faPaintRoller, faPuzzlePiece, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFontAwesomeFlag, faReact } from '@fortawesome/free-brands-svg-icons';

import Button from '../src/components/atoms/button';
import Buttons from '../src/components/atoms/buttons';
import ContentWithImage from '../src/components/molecules/content-with-image';
import Image from '../src/components/atoms/image';
import Hero from '../src/components/molecules/hero';
import IconCard from '../src/components/molecules/icon-card';
import List from '../src/components/atoms/list';
import Navigation from '../src/components/molecules/navigation';
import Margin from '../src/components/atoms/margin';
import PriceCard from '../src/components/molecules/price-card';
import ProfileCard from '../src/components/molecules/profile-card';
import Promotion from '../src/components/molecules/promotion';
import Section from '../src/components/atoms/section';
import Text from '../src/components/atoms/text';
import Title from '../src/components/molecules/title';

import Menu from '../src/components/atoms/menu';

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

const navigationItems = [
  { label: 'About', path: './' },
  { label: 'Contact', path: './' },
  { label: 'FAQ', path: './' },
  { label: 'Press', path: './' }
];

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

const HeroContent = () => (
  <>
    <Text as="h1" color="white" margin="0" size="h1" weight="semiBold">A beautiful suite of React components</Text>
    <Text color="white" size="h4">Our React components are beautifully crafted to create a variety of landing pages to suit you need.</Text>
    <Buttons>
      <Button>Get Started</Button>
      <Button type="secondary">Learn More</Button>
    </Buttons>
  </>
);

export const page = () => (
  <main>
    <Navigation logo="Fresh Theme" items={navigationItems} />
    <Hero leftContent={<Image src={imageFile4} />} rightContent={<HeroContent />} />
    <Section theme="transparent">
      <Container>
        <Title align="center">Whats included?</Title>
        <Margin bottom="lg">
          <Row>
            <Col sm={4}>
              <IconCard
                description="Packaged with React 16.8+ and the latest version of GatsbyJS with page examples"
                icon={faReact}
                title="ReactJS & GatsbyJS"
              />
            </Col>
            <Col sm={4}>
              <IconCard
                description="Use the best bits of ES6 and CSS to extend this theme without stress"
                icon={faPaintRoller}
                title="Styled Components"
              />
            </Col>
            <Col sm={4}>
              <IconCard
                description="A suite of components that are fully customisable and work together"
                icon={faPuzzlePiece}
                title="Customisation"
              />
            </Col>
          </Row>
        </Margin>
        <Row>
          <Col sm={4}>
            <IconCard
              description="All components are SEO friendly so Google can find your content easily"
              icon={faSearch}
              title="SEO Friendly"
            />
          </Col>
          <Col sm={4}>
            <IconCard
              description="A variety of different pages have already been pre-build to extend upon"
              icon={faGrinStars}
              title="10 Pages"
            />
          </Col>
          <Col sm={4}>
            <IconCard
              description="Packaged with Font Awesome for all of your iconography requirements"
              icon={faFontAwesomeFlag}
              title="Font Awesome"
            />
          </Col>
        </Row>
      </Container>
    </Section>
    <Promotion label="Download and try out the Fresh Theme today!" button={<Button icon={faDownload}>Download</Button>} />
    <Section theme="transparent">
      <Container>
        <ContentWithImage image={imageFile1} imagePosition="right">
          <Title>Get Started With Our Software</Title>
          <Text>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</Text>
          <List>
            <li>Unlimited Video Call</li>
            <li>Add Favourite contact</li>
            <li>Camera Filter</li>
          </List>
          <Button>Read More</Button>
        </ContentWithImage>
        <ContentWithImage image={imageFile2}>
          <Title>Engineered And Optimization</Title>
          <Text>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</Text>
          <List>
            <li>Unlimited Video Call</li>
            <li>Add Favourite contact</li>
            <li>Camera Filter</li>
          </List>
          <Button>Read More</Button>
        </ContentWithImage>
        <ContentWithImage image={imageFile3} imagePosition="right">
          <Title>Quick & Easy Process</Title>
          <Text>Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</Text>
          <List>
            <li>Unlimited Video Call</li>
            <li>Add Favourite contact</li>
            <li>Camera Filter</li>
          </List>
          <Button>Read More</Button>
        </ContentWithImage>
      </Container>
    </Section>
    <Section theme="primary">
      <Container>
        <Title align="center">Our Team</Title>
        <Text align="center" size="h4">Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</Text>
        <Row>
          <Col sm={3}>
            <ProfileCard description="CEO" image={personImage1} title="Park Tim" />
          </Col>
          <Col sm={3}>
            <ProfileCard description="Manager" image={personImage2} title="Douglas Costa" />
          </Col>
          <Col sm={3}>
            <ProfileCard description="SEO Expert" image={personImage3} title="John Doe" />
          </Col>
          <Col sm={3}>
            <ProfileCard description="Frontend Developer" image={personImage4} title="Steven Smith" />
          </Col>
        </Row>
      </Container>
    </Section>
    <Section theme="transparent">
      <Container>
        <Title align="center">Easy Pricing Plans</Title>
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
    <Section theme="white">
      <Container>
        <ContentWithImage image={imageFile5}>
          <Title>Build Beautiful Interface Into Your Application</Title>
          <Text size="h4">Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.</Text>
          <List>
            <li>Unlimited Video Call</li>
            <li>Add Favourite contact</li>
            <li>Camera Filter</li>
          </List>
        </ContentWithImage>
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
            <Menu animate items={[
              { label: 'About', path: './' },
              { label: 'Careers', path: './' },
              { label: 'Awards', path: './' },
              { label: 'User Program', path: './' }
            ]} />
          </Col>
          <Col sm={3}>
            <Text color="dark" size="h3" weight="semiBold">Products</Text>
            <Menu animate items={[
              { label: 'Integrations', path: './' },
              { label: 'API', path: './' },
              { label: 'Pricing', path: './' },
              { label: 'Documentation', path: './' }
            ]} />
          </Col>
          <Col sm={3}>
            <Text color="dark" size="h3" weight="semiBold">Support</Text>
            <Menu animate items={[
              { label: 'About', path: './' },
              { label: 'Contact', path: './' },
              { label: 'FAQ', path: './' },
              { label: 'Press', path: './' }
            ]} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Menu align="center" type="horizontal" items={[
          { label: 'About', path: './' },
          { label: 'Contact', path: './' },
          { label: 'FAQ', path: './' },
          { label: 'Press', path: './' }
        ]} />
        <Text align="center" as="span">Copyright @ 2019 Fresh Theme. All rights reserved</Text>
      </Container>
    </Section>
  </main>
);