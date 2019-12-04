import styled from 'styled-components';
import PropTypes from 'prop-types';

import sizes from '../styles/sizes';
import styles from '../styles/colours';
import weights from '../styles/weights';

const Link = styled.a`
  color: ${props => styles[props.color]};
  font-size: ${props => sizes[props.size]};
  font-weight: ${props => weights[props.weight]};
  left: 0;
  line-height: 1.4;
  margin: ${props => props.margin};
  position: relative;
  text-decoration: none;
  transition: ${props => props.animate ? 'all 250ms' : 'none'};

  :hover {
    color: ${props => styles[props.hoverColor]};
    left: ${props => props.animate ? '5px' : 'auto'};
  }
`;

Link.propTypes = {
  color: PropTypes.oneOf(Object.keys(styles)),
  hoverColor: PropTypes.oneOf(Object.keys(styles)),
  margin: PropTypes.string,
  weight: PropTypes.oneOf(Object.keys(weights)),
};

Link.defaultProps = {
  color: 'body',
  hoverColor: 'primary',
  size: 'h4',
  margin: '1.5rem 0',
  weight: 'regular',
};

export default Link;