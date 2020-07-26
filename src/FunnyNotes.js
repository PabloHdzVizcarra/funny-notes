import React from 'react'
import styled from 'styled-components';
import { NavBar } from './components/navbar/NavBar';
import { NotesArea } from './layout/notesArea/NotesArea';
import { NotesProvider } from './context/notesContext';
import { ErrorsProvider } from './context/errorContext';

const MainContain = styled.div`
  background-color: #E8EDDF;
  width: 100vw;
  height: 100vh;
`;

export const FunnyNotes = () => {
  return (
    <NotesProvider>
      <ErrorsProvider>
        
        <MainContain>
          <NavBar />
          <NotesArea />
        </MainContain>

      </ErrorsProvider>

    </NotesProvider>
  )
}
