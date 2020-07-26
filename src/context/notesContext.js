import React, { createContext, useState, useReducer } from 'react';
import { notesReducer } from '../reducers/notesReducer';
import { fakeState } from '../utils/fake-notes';

export const NotesContext = createContext();

export const NotesProvider = (props) => {

  const [state, dispatch] = useReducer(notesReducer, fakeState);
  const { notes } = state;

  return (
    <NotesContext.Provider
      value={{
        notes,
        dispatch
      }}
    >
      {props.children}
    </NotesContext.Provider>
  )
}
