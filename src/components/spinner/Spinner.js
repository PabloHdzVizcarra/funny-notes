import React from 'react';
import styles from './Spinner.module.css';
import styled from 'styled-components';

const ContainSpinner = styled.div`
  padding: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Spinner = () => {
  return (
    <ContainSpinner>
      
      <div className={styles.loader}>Loading...</div>

    </ContainSpinner>
  )
}


