import React from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.div`
  color: #D8000C;
  background-color: #FFBABA;
  width: 75%;
  margin: 10px auto 0 auto;
  padding: 10px;
  border-radius: 6px;

`;

export const ErrorForm = ({msg}) => {
  return (
    <ErrorMessage>
      {msg}
    </ErrorMessage>
  )
}
