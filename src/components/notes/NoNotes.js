import React from 'react'
import styled from 'styled-components'

const Contain = styled.div`
  background-color: rgba(245, 203, 92, .8);
  border-radius: 6px;
  height: 4rem;
  padding: 1rem;
  text-align: center;
`;

export const NoNotes = () => {

  return (
    <Contain>
      <p>No tienes ninguna nota</p>
    </Contain>
  )
}
