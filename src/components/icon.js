import styled from 'styled-components';
import PropTypes from 'prop-types';

import styles from '../styles/colours';
import sizes from '../styles/sizes';

const Icon = styled.p`
  color: ${props => styles[props.color]};
  display: block;
  font-size: ${sizes.icon};
  line-height: 1.4;
  margin: ${props => props.margin};
  width: 100%;
`;

Icon.propTypes = {
  color: PropTypes.oneOf(Object.keys(styles)),
  margin: PropTypes.string,
}

Icon.defaultProps = {
  color: 'body',
  margin: '1.5rem 0',
}

export default Icon;