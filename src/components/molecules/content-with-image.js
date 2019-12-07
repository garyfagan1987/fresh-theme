import React from 'react';
import PropTypes from "prop-types";
import { Row, Col } from 'react-grid-system';

import Flex from '../atoms/flex';
import Image from '../atoms/image';
import Margin from '../atoms/margin';

const RenderContent = (children) => (
  <Flex alignItems="flex-start" flexDirection="column" justifyContent="center" stretch>
    {children}
  </Flex>
);

const ContentWithImage = ({
  children,
  image,
  imagePosition,
}) => (
  <Margin bottom="lg">
    <Row>
      <Col sm={6}>
        {imagePosition == 'right' && RenderContent(children)}
        {imagePosition == 'left' && <Image src={image} />}
      </Col>
      <Col sm={6}>
        {imagePosition == 'right' && <Image src={image} />}
        {imagePosition == 'left' && RenderContent(children)}
      </Col>
    </Row>
  </Margin>
);

ContentWithImage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  image: PropTypes.string.isRequired,
  imagePosition: PropTypes.oneOf(['left', 'right']),
}

ContentWithImage.defaultProps = {
  imagePosition: 'left'
}

export default ContentWithImage;