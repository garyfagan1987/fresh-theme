import styled from 'styled-components';
import { darken } from 'polished';

import styles from '../styles/colours';

export const PrimaryButton = styled.button`
  border: 0;
  box-shadow: rgba(0, 0, 0, 0.5) 2px 2px 0.4rem;
  color: ${styles.white};
  cursor: pointer;
  float: ${props => props.float ? props.float : 'none'};
  font-family: inherit;
  font-size: inherit;
  font-weight: bold;
  outline: 0;
  padding: 1.5rem;
  position: relative;
  text-align: center;
  min-width: 20rem;
  width: ${props => props.fullWidth ? '100%' : 'min-content'};
  z-index: 1;

	&:after {
    background-color: ${styles.accent};
		bottom: 0;
		content: '';
		height: 100%;
		left: 0;
		position: absolute;
		width: 100%;
		z-index: -2;
	}

  &:before {
    background-color: ${darken(0.1, styles.accent)};
		bottom: 0;
		content: '';
		height: 100%;
		left: 0;
		position: absolute;
		transition: all 300ms;
		width: 0%;
		z-index: -1;
	}

  &:active {
    box-shadow: none;
    left: 0.2rem;
    top: 0.2rem;
  }

	&:hover:before {
    width: 100%;
	}
`;

export const SecondaryButton = styled.button`
  background-color: transparent;
  border: 1px solid #FFF;
  color: ${styles.white};
  cursor: pointer;
  float: ${props => props.float ? props.float : 'none'};
  font-family: inherit;
  font-size: inherit;
  font-weight: bold;
  min-width: 20rem;
  outline: 0;
  padding: 1.5rem;
  position: relative;
  text-align: center;
  width: ${props => props.fullWidth ? '100%' : 'min-content'};

  &:after {
    background: #FFF;
    bottom: 0;
    content: '';
    height: 0.2rem;
    left: 0;
    position: absolute;
    transition: width 300ms;
    width: 0;
  }

  &:hover:after {
    width: 100%;
  }

  &:active {
    top: 0.2rem;
  }
`;