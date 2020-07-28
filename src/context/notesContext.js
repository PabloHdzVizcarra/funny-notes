import React, { createContext, useReducer,  useEffect, useState } from 'react';
import { notesReducer } from '../reducers/notesReducer';
import { firebase, db } from '../libs/firebase-config';
import { types } from '../types/types';


export const NotesContext = createContext();

export const NotesProvider = (props) => {
  
  const [notes, dispatch] = useReducer(notesReducer, []);
  const [activeNote, setActiveNote] = useState({ name: '', body: '' });
  const [editingNote, setEditingNote] = useState(false);
  
  
  useEffect(() => {
    
  }, []);
  
  const createNote = async (note) => {
    
    let noteAdd;
    const { uid } = firebase.auth().currentUser;
    const { id } = await db.collection(`${uid}/notes/data`).add(note);
    console.log('nota agregada con exito');

    noteAdd = {
      ...note,
      id
    }

    dispatch({
      type: types.addNote,
      payload: noteAdd
    })

  }

  const updateNote = async (note) => {
    const { uid } = firebase.auth().currentUser;
    const { id, name, body } = note;
    await db.collection(`${uid}/notes/data`).doc(id).set({ name, body });
    console.log('NOTA ACTUALIZADA');
    dispatch({
      type: types.updateNote,
      payload: note
    })
    setActiveNote({ name: '', body: '' });
    setEditingNote(false);
  }

  const deleteNote = async(noteID) => {
    const { uid } = firebase.auth().currentUser;
    await db.collection(`${uid}/notes/data`).doc(noteID).delete();
    console.log('nota borrada exitosamente');
    dispatch({
      type: types.deleteNote,
      payload: noteID
    })
  }


  return (
    <NotesContext.Provider
      value={{
        activeNote,
        notes,
        editingNote,
        dispatch,
        createNote,
        deleteNote,
        setActiveNote,
        setEditingNote,
        updateNote
      }}
    >
      {props.children}
    </NotesContext.Provider>
  )
}
