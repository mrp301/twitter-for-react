import React, { useReducer, createContext } from 'react';
import { reducer, initialState } from '../reducer';
import { State } from '../types';

export const Store = createContext< State | any >(initialState);

const AuthContainer: React.FC = ({children}): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{state, dispatch}}>
      {children}
    </Store.Provider>
  )
}

export default AuthContainer;
