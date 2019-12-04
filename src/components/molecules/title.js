import React from 'react';
import PropTypes from 'prop-types';

import Text from '../text';

const Title = ({
  align,
  children
}) => <Text align={align} color="dark" margin="0 0 1.5rem" size="h2" weight="semiBold">{children}</Text>;

Title.propTypes = {
  align: PropTypes.oneOf(['center', 'left', 'right']),
  children: PropTypes.string.isRequired,
}

Text.defaultProps = {
  align: 'left',
}

export default Title;
