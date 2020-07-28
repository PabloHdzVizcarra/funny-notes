import React, { useContext } from 'react'

import styled from 'styled-components'
import { useForm } from '../hooks/useForm';
import { ErrorsContext } from '../context/errorContext';
import validator from 'validator';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

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
`;

const Forms = styled.form`

  margin-top: 5rem;
  display: flex;
  flex-direction: column;
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

export const RegisterScreen = () => {
  const [values, handleInputChange] = useForm({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { errorForm, setErrorForm } = useContext(ErrorsContext);
  const {startRegisterWithEmailAndPassword} = useContext(AuthContext);

  const { userName, email, password, confirmPassword } = values;

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (userName.length < 2) {
      return setErrorForm({
        msg: 'El nombre debe ser minimo 2 caracteres',
        error: true
      })
    }

    if (!validator.isEmail(email)) {
      return setErrorForm({
        msg: 'El Email no es valido',
        error: true
      })
    }

    if (password.length < 5) {
      return setErrorForm({
        msg: 'La contraseña debe ser minimo 5 caracteres',
        error: true
      })
    }

    if (!validator.equals(password, confirmPassword)) {
      return setErrorForm({
        msg: 'Las contraseñas no coinciden',
        error: true
      })
    }

    setErrorForm({
      msg: '',
      error: false
    });

    startRegisterWithEmailAndPassword(email, password, userName);
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
            name='userName'
            placeholder="nombre de usuario"
            onChange={handleInputChange}
            value={userName}
            autoComplete='off'
          />
        </div>
        <div>
          <InputForm
            type="email" 
            name='email'
            placeholder='Ingresa tu email'
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
        <div>
          <InputForm
            type="password" 
            name='confirmPassword'
            placeholder='Repite tu contraseña'
            onChange={handleInputChange}
            value={confirmPassword}
            autoComplete='off'
          />
        </div>
        <ButtonForm
        >
        Registrar
        </ButtonForm>
      
        <Info>
          Ya tienes una cuenta? <Link to={'/auth/login'}>Iniciar Sesion</Link> 
        </Info>

      </Forms>
    </ContainForm>
  )
}
