import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';

const Nav = styled.div`
  background-color: #333533;
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: white;
    margin: 10px;
    margin-left: 20px;
    font-size: 24px;
  }

  div {
    display: flex;
    align-items: center;
  }

  svg {
    margin-right: 10px;
    cursor: pointer;
  }

`;

export const NavBar = () => {
  return (
    <Nav>
      <a href="https://google.com">Inicio</a>
      <div>
        <CloseIcon 
          color="secondary"
          fontSize="large"
        />
      </div>
    </Nav>
  )
}
