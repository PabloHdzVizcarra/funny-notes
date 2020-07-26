import { types } from "../types/types";


export const addNote = (note) => ({
  type: types.addNote,
  payload: note
})