import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

import Text from '../atoms/text';

import styles from '../../styles/colours';

const LabelStyle = styled.label`
  display: inline-block;
  margin-bottom: 1rem;
`;

const Label = ({
  children,
  color,
  htmlFor,
}) => (
  <LabelStyle for={htmlFor}>
    <Text color={color} margin="0">{children}</Text>
  </LabelStyle>
);

Label.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(Object.keys(styles)),
  htmlFor: PropTypes.string.isRequired,
}

Label.defaultProps = {
  color: 'body',
}

export default Label;