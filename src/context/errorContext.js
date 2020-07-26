import React, { createContext, useState } from 'react';

export const ErrorsContext = createContext();

export const ErrorsProvider = (props) => {

  const [errorForm, setErrorForm] = useState({
    msg: '',
    error: false
  });

  return (
    <ErrorsContext.Provider
      value={{
        errorForm,
        setErrorForm
      }}
    >
      {props.children}
    </ErrorsContext.Provider>
  )
}