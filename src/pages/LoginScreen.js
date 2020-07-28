import React, { useContext } from 'react';
import styled from 'styled-components'
import { useForm } from '../hooks/useForm';
import { ErrorsContext } from '../context/errorContext';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { respondTo } from '../styles/_respondTo';

const MessageError = styled.div`
  color: #D8000C;
  background-color: #FFBABA;
  padding: 1rem 0 1rem 0;
  text-align: center;
  border-radius: 6px;
  position: fixed;
  width: 84%;
  justify-self: center;
`;

const ContainForm = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: 100%;
  justify-items: center;
  

  ${respondTo.sm`
    padding: 5rem;
  `}

  ${respondTo.md`
    padding: 2rem;
  `}

  ${respondTo.lg`
    padding: 4rem;
    width: 500px;
  `}
`;

const Forms = styled.form`
  background-color: rgba(36, 36, 35, .6);
  padding: 20px;
  border-radius: 6px;
  height: max-content;
  
  div {
    
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    height: 50px;
    background-color: rgba(36, 36, 35, .7);
    padding: 5px;
    border-radius: 6px;
  }

`;

const InputForm = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
  color: #F5CB5C;
  font-size: 1.1rem;
  margin: 0 10px 0 10px;

  &:focus{
    outline: none;
  }

`;

const ButtonForm = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  background-color: rgba(245, 203, 92, .8);

  transition: 300ms ease background-color;

  &:hover {
    background-color: rgba(245, 203, 92, 1);
  }
`;

const Info = styled.p`
  a {
    color: rgba(245, 203, 92, .8);
    margin-left: 5px;
    font-weight: bold;
    text-decoration: none;

    transition: 300ms ease background-color;

    &:hover {
      color: rgba(245, 203, 92, 1);
    }
  }
`;

export const LoginScreen = () => {

  const [values, handleInputChange] = useForm({
    email: 'correo@correo.com',
    password: '123456',
  });

  const { errorForm } = useContext(ErrorsContext);
  const { startLoginEmailPassword } = useContext(AuthContext);

  const { email, password } = values;

  const handleSubmitForm = (event) => {
    event.preventDefault();
    
    startLoginEmailPassword(email, password);

  }



  return (

    <ContainForm>

      {errorForm.error && <MessageError>{errorForm.msg}</MessageError>}
      
      <Forms
        onSubmit={handleSubmitForm}
      >
        <div>
          <InputForm
            type="text" 
            name='email'
            placeholder="Ingresa tu email"
            onChange={handleInputChange}
            value={email}
            autoComplete='off'
          />
        </div>
        <div>
          <InputForm
            type="password" 
            name='password'
            placeholder='Ingresa tu contraseña'
            onChange={handleInputChange}
            value={password}
            autoComplete='off'
          />
        </div>
       
          <ButtonForm
          >
          Iniciar Sesion
          </ButtonForm>
        <Info>
          No tienes cuenta? <Link to={'/auth/register'}>Regitrarse</Link> 
        </Info>
      </Forms>
    </ContainForm>
  )
}
