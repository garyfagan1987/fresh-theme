import React from 'react';
import PropTypes from "prop-types";

import Card from '../atoms/card';
import Image from '../atoms/image';
import Text from '../atoms/text';

const ProfileCard = ({
  description,
  image,
  title,
}) => (
  <Card>
    <Image src={image} />
    <Text align="center" color="dark" size="h3" weight="semiBold">{title}</Text>
    {description && <Text align="center">{description}</Text>}
  </Card>
);

ProfileCard.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

ProfileCard.defaultProps = {
  description: '',
}

export default ProfileCard;