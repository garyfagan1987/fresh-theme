import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container } from 'react-grid-system';

import Flex from '../flex';
import Menu from '../menu';
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
        <Menu align="right" animate type="navigation" items={items} />
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