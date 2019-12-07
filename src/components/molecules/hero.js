import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';

import Flex from '../atoms/flex';
import styles from '../../styles/colours';

const HeroBackground = styled.div`
  background-color: ${styles.primary};
  box-sizing: border-box;
  display: flex;
  min-height: 100vh;
  padding: 5rem;
`;

const HeroContainer = styled.div`
  margin: 0 auto;
  width: 114rem;
`;

const Hero = ({
  leftContent,
  rightContent,
}) => {
  return (
    <HeroBackground>
      <HeroContainer>
        <Flex flexDirection="column" justifyContent="center" stretch>
          <Row>
            <Col sm={6}>
              {leftContent}
            </Col>
            <Col sm={6}>
              <Flex alignItems="flex-start" flexDirection="column" justifyContent="center" style={{height: '100%'}}>
                {rightContent}
              </Flex>
            </Col>
          </Row>
        </Flex>
      </HeroContainer>
    </HeroBackground>
  );
};

Hero.propTypes = {
  leftContent: PropTypes.element.isRequired,
  rightContent:  PropTypes.element.isRequired,
}

export default Hero;