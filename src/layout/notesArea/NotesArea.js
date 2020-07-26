import React, { useContext } from 'react'
import styled from 'styled-components';
import { Form } from '../../components/form/Form';
import { Notes } from '../../components/notes/Notes';
import { ErrorsContext } from '../../context/errorContext';
import { ErrorForm } from '../../components/form/ErrorForm';
import { respondTo } from '../../styles/_respondTo';

const Contain = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem;
  gap: 20px;
  justify-items: stretch;
  
  ${respondTo.md`
    grid-template-columns: 40% 60%;
  `}

`;

export const NotesArea = () => {

  const { errorForm } = useContext(ErrorsContext);
  const { msg, error } = errorForm;

  return (
    <>
      {error && <ErrorForm msg={msg} />}
      <Contain>
        <Form />
        <Notes />
      </Contain>
    </>
  )
}
