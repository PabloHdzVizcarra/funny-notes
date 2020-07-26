import React, { useContext, useReducer } from 'react'
import styled from 'styled-components';
import TitleIcon from '@material-ui/icons/Title';
import { useForm } from '../../hooks/useForm';
import { NotesContext } from '../../context/notesContext';
import { ErrorsContext } from '../../context/errorContext';
import { notesReducer } from '../../reducers/notesReducer';
import { types } from '../../types/types';

const Forms = styled.form`

  display: flex;
  flex-direction: column;
  background-color: rgba(36, 36, 35, .6);
  padding: 20px;
  border-radius: 6px;
  height: 380px;
  
  div {
    
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    height: 50px;
    background-color: rgba(36, 36, 35, .7);
    padding: 5px;
    border-radius: 6px;
    
    

    input {
      width: 100%;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid white;
      color: white;
      font-size: 2rem;
    }

    input:focus{
        outline: none;
    }

    svg {
      color: white;
    }

  }
  
  textarea {
    color: white;
    border: none;
    background-color: transparent;
    font-size: 1.2rem;
    padding: 25px;
    resize: none;
  }

  textarea:focus {
    outline: none;
  }

  button {
    width: 100%;
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, .7);

    transition: 300ms ease background-color;

    &:hover {
      background-color: rgba(255, 255, 255, .9);
    }
  }

`;

export const Form = () => {
  
  const [values, handleInputChange] = useForm({
    name: '',
    body: ''
  });
  const { name, body } = values;

  const { setErrorForm } = useContext(ErrorsContext);
  const { dispatch } = useContext(NotesContext);

  
  const handleSubmitNote = (event) => {
    event.preventDefault();

    if (name.length < 5) {
      setErrorForm({
        msg: 'El titulo debe ser minimo de 5 caracteres',
        error: true
      });

      return
    }

    if (body.length < 1) {
      setErrorForm({
        msg: 'El mensaje debe ser minimo 1 caracter',
        error: true
      })

      return
    }

    setErrorForm({
      msg: '',
      error: false
    });

    values.id = new Date().getDate();
    
    dispatch({
      type: types.addNote,
      payload: values
    })
    
  }


  return (
    <Forms
      onSubmit={handleSubmitNote}
    >
      <div>
        <TitleIcon />
        <input
          type="text" 
          onChange={handleInputChange}
          name='name'
          value={name}
        />
      </div>
      <textarea
        cols="30"
        rows="10"
        name='body'
        onChange={handleInputChange}
        value={body}
      ></textarea>
      <div>
        <button
          type="submit"
        >
          Guardar
        </button>
      </div>
    </Forms>
  )
}
