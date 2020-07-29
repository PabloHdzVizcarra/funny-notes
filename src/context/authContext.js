import React, { createContext, useState, useContext } from 'react';
import { firebase } from '../libs/firebase-config';
import { ErrorsContext } from './errorContext';


export const AuthContext = createContext();

export const AuthProvider = (props) => { 

  const { setErrorForm } = useContext(ErrorsContext);
  const [userRegister, setUserRegister] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const startRegisterWithEmailAndPassword = (email, password, userName,) => {
    
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async({user}) => {
        
        await user.updateProfile({ displayName: userName });
        const { uid, displayName } = user;

        setUserRegister({
          uid,
          displayName,
        });

        setErrorForm({
          error: false,
          msg: ''
        });

      })
      .catch(error => {
        const { message } = error;
        setErrorForm({
          error: true,
          msg: message
        })

      }) 

  }

  const logoutFirebase = async() => {

    try {
      await firebase.auth().signOut();
      setUserRegister({});

    } catch (error) {
      console.log(error);
    }
  }

  const startLoginEmailPassword = async(email, password) => {
    
    try {
      
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((data) => {
          const { user } = data;
          const { uid, displayName } = user;
          setUserRegister({
            uid,
            displayName
          })
        })
    } catch (error) {
      console.log(error.message);
    }
  }


  return (
    <AuthContext.Provider
      value={{
        userRegister,
        isLoggedIn,
        setIsLoggedIn,
        startRegisterWithEmailAndPassword,
        logoutFirebase,
        startLoginEmailPassword,
        setUserRegister
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
