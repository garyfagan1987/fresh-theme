import React from 'react';
import PropTypes from "prop-types";
import { Container } from 'react-grid-system';

import Flex from '../atoms/flex';
import Section from '../atoms/section';
import Text from '../atoms/text';

const Promotion = ({
  button,
  label,
}) => (
  <Section theme="secondary">
    <Container>
      <Flex>
        <Text color="white" margin="0" size="h2">{label}</Text>
        {button}
      </Flex>
    </Container>
  </Section>
);

Promotion.propTypes = {
  label: PropTypes.string.isRequired,
  button:  PropTypes.element.isRequired,
}

export default Promotion;