import { types } from "../types/types";

export const notesReducer = (state = [], action) => {

  switch (action.type) {

    case types.addNote:
      return {
        ...state,
        notes: [action.payload, ...state.notes, ]
      }

    
    
    default:
      break;
  }
}