import { types } from "../types/types";

export const notesReducer = (state = [], action) => {

  switch (action.type) {

    case types.addNote:
      return [ action.payload, ...state ] 
    
    case types.loadingNotes:
      return [ ...action.payload ]

    case types.deleteNote:
      return state.filter((note) => note.id !== action.payload)
    
    case types.updateNote:
      return state.map(
        note => note.id === action.payload.id
          ? action.payload
          : note
      )
    default:
      return state
  }
}