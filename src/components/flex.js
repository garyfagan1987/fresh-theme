import styled from 'styled-components';
import PropTypes from 'prop-types';

const Flex = styled.div`
  align-items: ${props => props.alignItems};
  display: flex;
  flex-direction: ${props => props.flexDirection};
  height: ${props => props.stretch ? '100%' : 'auto'};
  justify-content: ${props => props.justifyContent};
`;

Flex.propTypes = {
  alignItems: PropTypes.oneOf(['center', 'flex-start', 'flex-end']),
  flexDirection: PropTypes.oneOf(['column', 'row']),
  justifyContent: PropTypes.oneOf(['center', 'space-between']),
}

Flex.defaultProps = {
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
}

export default Flex;