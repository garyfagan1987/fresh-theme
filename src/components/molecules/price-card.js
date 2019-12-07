import React from 'react';
import PropTypes from "prop-types";

import Button from '../atoms/button';
import Card from '../atoms/card';
import Text from '../atoms/text';

const PriceCard = ({
  buttonLabel,
  items,
  price,
  title,
  type,
}) => (
  <Card>
    <Text align="center" margin="0 0 1.5rem" color="dark" size="h3" weight="semiBold">{price}</Text>
    <Text align="center" color="primary" size="h3" weight="semiBold">{title}</Text>
    {items.map(item => {
      return item.type.includes(type) ? (
        <Text key={item.label} align="center">{item.label}</Text>
      ) : (
        <Text key={item.label} align="center" color="light" decoration="line-through">{item.label}</Text>
      );
    })}
    <Button fullWidth>{buttonLabel}</Button>
  </Card>
);

PriceCard.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    type: PropTypes.array.isRequired,
  })).isRequired,
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['personal', 'business', 'enterprise']).isRequired,
}

PriceCard.defaultProps = {
  description: '',
}

export default PriceCard;