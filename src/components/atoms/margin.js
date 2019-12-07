import styled from 'styled-components';
import PropTypes from 'prop-types';

import margins from '../../styles/margins';

const Margin = styled.div`
  margin-bottom: ${props => margins[props.bottom]};
  margin-left: ${props => margins[props.left]};
  margin-right: ${props => margins[props.right]};
  margin-top: ${props => margins[props.top]};
`;

Margin.propTypes = {
  bottom: PropTypes.oneOf(PropTypes.oneOf(Object.keys(margins))),
  left: PropTypes.oneOf(PropTypes.oneOf(Object.keys(margins))),
  right: PropTypes.oneOf(PropTypes.oneOf(Object.keys(margins))),
  top: PropTypes.oneOf(PropTypes.oneOf(Object.keys(margins))),
}

Margin.defaultProps = {
  bottom: 'none',
  left: 'none',
  right: 'none',
  top: 'none',
}

export default Margin;