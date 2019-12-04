import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container } from 'react-grid-system';

import Flex from '../flex';
import Link from '../link';
import { HorizontalMenu } from '../menu';
import Text from '../text';

import styles from '../../styles/colours';

const NavigationOuter = styled.div`
  background-color: ${styles.primary};
  box-sizing: border-box;
  padding: 2rem;
  position: absolute;
  width: 100%;
`;

const Navigation = ({
  items,
  logo
}) => (
  <NavigationOuter>
    <Container>
    <Flex>
        <Text color="white" size="h2" weight="bold">{logo}</Text>
        <HorizontalMenu align="right">
          {items.map(item => (
            <li>
              <Link key={item.label} animate color="white" hoverColor="white" href={item.path} weight="semiBold">{item.label}</Link>
            </li>
          ))}
        </HorizontalMenu>
      </Flex>
    </Container>
  </NavigationOuter>
);

Navigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
  logo: PropTypes.string.isRequired,
}

export default Navigation;