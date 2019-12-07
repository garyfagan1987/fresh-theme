import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Link from './link';

const Horizontal = styled.ul`
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

Horizontal.propTypes = {
  align: PropTypes.oneOf(['center', 'left', 'right']),
}

Horizontal.defaultProps = {
  align: 'left',
}

const Vertical = styled.ul`
  list-style: none;
  margin: 1.5rem 0;
  padding: 0;
  text-align: ${props => props.align};

  li {
    display: block;
    margin-bottom: 1.5rem;
  }
`;

Vertical.propTypes = {
  align: PropTypes.oneOf(['center', 'left', 'right']),
}

Vertical.defaultProps = {
  align: 'left',
}
  
const Menu = ({
  align,
  animate,
  items,
  type
}) => {
  if(type == 'horizontal') {
    return (
      <Horizontal align={align}>
        {items.map(item => (
          <li key={item.label}>
            <Link animate={animate} href={item.path} weight="semiBold">{item.label}</Link>
          </li>
        ))}
      </Horizontal>
    )
  }
  if(type == 'navigation') {
    return (
      <Horizontal align={align}>
        {items.map(item => (
          <li key={item.label}>
            <Link animate color="white" hoverColor="white" href={item.path} weight="semiBold">{item.label}</Link>
          </li>
        ))}
      </Horizontal>
    )
  }
  if(type == 'vertical') {
    return (
      <Vertical align={align}>
        {items.map(item => (
          <li key={item.label}>
            <Link animate={animate} href={item.path} weight="semiBold">{item.label}</Link>
          </li>
        ))}
      </Vertical>
    )
  }
};

Menu.propTypes = {
  align: PropTypes.oneOf(['center', 'left', 'right']),
  animate: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
  type: PropTypes.oneOf(['horizontal', 'navigation', 'vertical']),
}

Menu.defaultProps = {
  align: 'left',
  animate: false,
  type: 'vertical',
}

export default Menu;