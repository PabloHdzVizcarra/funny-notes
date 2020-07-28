import React from 'react'
import styled from 'styled-components';
import { NotesProvider } from './context/notesContext';
import { ErrorsProvider } from './context/errorContext';
import App from './router/AppRouter';
import { AuthProvider } from './context/authContext';

const MainContain = styled.div`
  background-color: #E8EDDF;
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-items: stretch;
`;

export const FunnyNotes = () => {
  return (
    <NotesProvider>
      <ErrorsProvider>
        <AuthProvider>
          
          <MainContain>
            <App />
          </MainContain>
          
        </AuthProvider>
      </ErrorsProvider>
    </NotesProvider>
  )
}
