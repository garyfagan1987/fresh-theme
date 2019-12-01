import styled from 'styled-components';
import PropTypes from 'prop-types';

import styles from '../styles/colours';
import sizes from '../styles/sizes';
import weights from '../styles/weights';

const Text = styled.p`
  color: ${props => styles[props.color]};
  display: block;
  font-size: ${props => sizes[props.size]};
  font-weight: ${props => weights[props.weight]};
  line-height: 1.4;
  margin: ${props => props.margin};
  text-align: ${props => props.align};
  text-decoration: ${props => props.decoration};
`;

Text.propTypes = {
  align: PropTypes.oneOf(['center', 'left', 'right']),
  color: PropTypes.oneOf(Object.keys(styles)),
  decoration: PropTypes.oneOf(['line-through', 'underline', 'none']),
  margin: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizes)),
  weight: PropTypes.oneOf(Object.keys(weights)),
}

Text.defaultProps = {
  align: 'left',
  decoration: 'none',
  color: 'body',
  margin: '1.5rem 0',
  size: 'h4',
  weight: 'regular',
}

export default Text;