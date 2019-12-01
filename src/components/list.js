import styled from 'styled-components';

import styles from '../styles/colours';

const List = styled.ul`
  color: ${styles.body};
  list-style: none;
  margin: 1.5rem 0;
  padding: 0;

  li {
    margin-bottom: 1.5rem;
  }
  
  li::before {
    content: '•';
    color: ${styles.primary};
    display: inline-block;
    font-size: 4rem;
    line-height: 0;
    position: relative;
    top: 0.5rem;
    width: 2rem;
  }
`;

export default List;