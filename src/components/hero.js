import React from 'react';
import styled from 'styled-components';

import styles from '../styles/colours';
import Center from './center';

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
  children
}) => {
  return (
    <HeroBackground>
      <HeroContainer>
        <Center>
          {children}
        </Center>
      </HeroContainer>
    </HeroBackground>
  );
}

export default Hero;