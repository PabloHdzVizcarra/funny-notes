import { db } from "../libs/firebase-config"


export const getDataFirebase = async(uid) => {
  
  let allNotes = [];

  await db.collection(`${uid}/notes/data`)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        
        allNotes.push({
          id: doc.id,
          ...doc.data()
        })
        
      })
    })
    .catch((error) => {
      console.log(error);
    })
  
  return allNotes;
}