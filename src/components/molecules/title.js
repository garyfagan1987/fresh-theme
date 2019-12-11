import React from 'react';
import PropTypes from 'prop-types';

import Text from '../atoms/text';

import styles from '../../styles/colours';

const Title = ({
  align,
  children,
  color,
}) => <Text align={align} color={color} margin="0 0 1.5rem" size="h2" weight="semiBold">{children}</Text>;

Title.propTypes = {
  align: PropTypes.oneOf(['center', 'left', 'right']),
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(Object.keys(styles)),
}

Title.defaultProps = {
  align: 'left',
  color: 'body',
}

export default Title;
