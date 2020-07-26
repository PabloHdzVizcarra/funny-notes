import React, { useContext } from 'react';
import styled from 'styled-components';
import { Note } from './Note';
import { NotesContext } from '../../context/notesContext';

const ContainNotes = styled.div`
  background-color: rgba(245, 203, 92, .8);
  border-radius: 6px;

`;

export const Notes = () => {

  const { notes } = useContext(NotesContext);


  return (
    <ContainNotes>
      {
        notes.map(({id, name, body}) => (
          <Note
            key={id}
            name={name}
            body={body}
          />
        ))
      }
    </ContainNotes>
  )
}
