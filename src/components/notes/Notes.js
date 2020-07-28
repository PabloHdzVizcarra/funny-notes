import React, { useContext } from 'react';
import styled from 'styled-components';
import { Note } from './Note';
import { NotesContext } from '../../context/notesContext';
import { NoNotes } from './NoNotes';

const ContainNotes = styled.div`
  background-color: rgba(245, 203, 92, .8);
  border-radius: 6px;
  
`;

export const Notes = () => {

  const { notes } = useContext(NotesContext);
  
  if (notes.length === 0) {
    return <NoNotes />
  }

  return (

    <ContainNotes>
      {
        notes.map(({id, name, body}) => (
            <Note
              key={id}
              id={id}
              name={name}
              body={body}
            />
        ))
      }
    </ContainNotes>
  )
}
