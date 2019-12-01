import styled from 'styled-components';
import PropTypes from 'prop-types';

import themes from '../styles/themes';

const Section = styled.section`
  background-color: ${props => themes.section[props.theme].background};
  padding: 5rem;
  
  > div {
    > h1, > h2, > h3, > h4, > h5, > h6 {
      margin-top: 0;
    }
  }
`;

Section.propTypes = {
  theme: PropTypes.oneOf(Object.keys(themes.section)),
}

Section.defaultProps = {
  theme: 'transparent',
}

export default Section;