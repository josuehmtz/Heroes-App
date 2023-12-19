import React, { useReducer } from 'react'
import { types } from '../types/types';
import { AuthContext } from './Authcontext'
import { authReducer } from './AuthReducer'

export const AuthProvider = ({children}) => {

    const initialState = {
        logged: false
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    const onLogin = (name = '')=> {

      const action = {
        type: types.login,
        payload: {
          id: '123',
          name: name
        }
      }

      dispatch()

    }

  return (
    <AuthContext.Provider value={{}}>
        {children}
    </AuthContext.Provider>
  )
}
