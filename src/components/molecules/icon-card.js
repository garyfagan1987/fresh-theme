import React from 'react';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import theme from '../../styles/colours';

import Icon from '../atoms/icon';
import Text from '../atoms/text';

const IconCard = ({
  description,
  icon,
  title,
}) => (
  <>
    <Icon className="fa-layers fa-fw" as="span">
      <FontAwesomeIcon icon={faCircle} color={theme.secondary} />
      <FontAwesomeIcon icon={icon} inverse transform="shrink-10" />
    </Icon>
    <Text align="center" color="dark" size="h3" weight="semiBold">{title}</Text>
    <Text align="center">{description}</Text>
  </>
);

IconCard.propTypes = {
  description: PropTypes.string.isRequired,
  icon:  PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
}

export default IconCard;