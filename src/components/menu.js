import styled from 'styled-components';
import PropTypes from 'prop-types';

export const HorizontalMenu = styled.ul`
  list-style: none;
  margin: 1.5rem 0;
  padding: 0;
  text-align: ${props => props.align};

  li {
    display: inline-block;
    margin: 0 1.5rem 0 0;
    position: relative;

    &:not(:first-child) {
      padding: 0 0 0 3rem;
    }

    &:not(:first-child):before {
      content: '';
      position: absolute;
      left: 7px;
      top: 5px;
      background: #FF8A73;
      width: 2px;
      height: 12px;
    }
  }
`;

HorizontalMenu.propTypes = {
  align: PropTypes.oneOf(['center', 'left', 'right']),
}

HorizontalMenu.defaultProps = {
  align: 'left',
}

export const VerticalMenu = styled.ul`
  list-style: none;
  margin: 1.5rem 0;
  padding: 0;
  text-align: ${props => props.align};

  li {
    display: block;
    margin-bottom: 1.5rem;
  }
`;

VerticalMenu.propTypes = {
  align: PropTypes.oneOf(['center', 'left', 'right']),
}

VerticalMenu.defaultProps = {
  align: 'left',
}