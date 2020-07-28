import React, { useContext } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';
import { AuthContext } from '../../context/authContext';
import { useHistory } from 'react-router-dom';

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
    margin-right: 20px;
    cursor: pointer;
  }

`;

const Paragraph = styled.p`
  color:#F5CB5C;
  margin-left: 2rem;
  font-size: 1.3rem;

  span {
    font-weight: bold;
    text-transform: uppercase;
  }
`;


export const NavBar = () => {
  
  const history = useHistory();
  const {userRegister} = useContext(AuthContext);

  const { logoutFirebase } = useContext(AuthContext);

  const handleClickLogout = () => {
    logoutFirebase();
    history.push("/asd")
  }

  return (
    <Nav>
      <Paragraph>Hola <span>{userRegister.displayName}</span></Paragraph>
      <div>
        <CloseIcon 
          color="secondary"
          fontSize="large"
          onClick={handleClickLogout}
        />
      </div>
    </Nav>
  )
}
