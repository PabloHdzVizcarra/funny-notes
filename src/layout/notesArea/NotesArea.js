import React, { useContext } from 'react'
import styled from 'styled-components';
import { Form } from '../../components/form/Form';
import { Notes } from '../../components/notes/Notes';
import { ErrorsContext } from '../../context/errorContext';
import { ErrorForm } from '../../components/form/ErrorForm';
import { respondTo } from '../../styles/_respondTo';
import { NavBar } from '../../components/navbar/NavBar';

const Contain = styled.div`
  display: grid;
  grid-template-columns: 100%;
  margin-top: 10px;
  padding: 5px;
  gap: 20px;
  
  ${respondTo.md`
    grid-template-columns: 40% 60%;
  `}

  ${respondTo.sm`
    padding: 5rem;
  `}

  ${respondTo.md`
    padding: 2rem;
  `}

  ${respondTo.lg`
    padding: 4rem 8rem 4rem 8rem;
  `}

`;

export const NotesArea = () => {

  const { errorForm } = useContext(ErrorsContext);
  const { msg, error } = errorForm;

  return (
    <>
      <NavBar />
      {error && <ErrorForm msg={msg} />}
      <Contain>
        <Form />
        <Notes />
      </Contain>
    </>
  )
}
