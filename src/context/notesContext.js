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

    try {
      
      const { uid } = firebase.auth().currentUser;
      const { id } = await db.collection(`${uid}/notes/data`).add(note);
  
      noteAdd = {
        ...note,
        id
      }
  
      dispatch({
        type: types.addNote,
        payload: noteAdd
      })

    } catch (error) {
      console.log(error);
    }
    

  }

  const updateNote = async (note) => {

    try {
      
      const { uid } = firebase.auth().currentUser;
      const { id, name, body } = note;
      await db.collection(`${uid}/notes/data`).doc(id).set({ name, body });
      dispatch({
        type: types.updateNote,
        payload: note
      })
      setActiveNote({ name: '', body: '' });
      setEditingNote(false);

    } catch (error) {
      console.log(error);
    }

  }

  const deleteNote = async (noteID) => {
    
    try {
      
      const { uid } = firebase.auth().currentUser;
      await db.collection(`${uid}/notes/data`).doc(noteID).delete();
      dispatch({
        type: types.deleteNote,
        payload: noteID
      });

    } catch (error) {
      console.log(error);
    }

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
