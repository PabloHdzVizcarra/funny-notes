import React, { useState, useEffect, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { NotesArea } from '../layout/notesArea/NotesArea';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

import { firebase } from '../libs/firebase-config';
import { AuthContext } from '../context/authContext';
import { getDataFirebase } from '../helpers/get-data-firebase';
import { NotesContext } from '../context/notesContext';
import { types } from '../types/types';
import {Spinner} from '../components/spinner/Spinner';


export default function App() {

  const [isCheck, setIsCheck] = useState(true);
  const { setUserRegister, isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { dispatch } = useContext(NotesContext);
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged( async(user) => {
  
      if (user?.uid) {
        setIsLoggedIn(true);
        const { uid, displayName } = user;
        setUserRegister({ uid, displayName });
        const getNotes = await getDataFirebase(uid);

        dispatch({
          type: types.loadingNotes,
          payload: getNotes
        })
      }
  
      setIsCheck(false);
    })
  }, [setUserRegister, dispatch, setIsLoggedIn]);
  

  

  if (isCheck) {
    return (
      <Spinner />
    )
  }

  return (
    <Router>
      <div>
        <Switch>

          <PublicRoute
            path="/auth" 
            component={AuthRouter}
            isLoggedIn={isLoggedIn}
          />

          <PrivateRoute
            exact  
            path="/"
            isLoggedIn={isLoggedIn}
            component={NotesArea}
          />

          <Redirect to="/auth/login"/>
        </Switch>
      </div>
    </Router>
  )
}


