import React, { useReducer, useContext } from 'react';

import { initialState, myReducer} from './UserListReducer';

const myContext = React.createContext();

const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <myContext.Provider value={{ state, dispatch }}>
      {props.children}
    </myContext.Provider>
  );
};

const useCount = () => {
  const contextValue = useContext(myContext);
  return contextValue;
};
export { useCount, ContextProvider };
