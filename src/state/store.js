import React from 'react';
import { createContext, useContext, useReducer } from 'react';

import countReducer from 'state/count/count.reducer';
import projectsReducer from 'state/projects/projects.reducer';
const rootReducer = (state, action) => ({
  count: countReducer(state.count, action),
  projects: projectsReducer(state.projects, action)
});

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, {});
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);

// https://blog.bitsrc.io/build-our-own-react-redux-using-usereducer-and-usecontext-hooks-a5574b526475
export const connect = (mapStateToProps, mapDispatchToProps) => {
  return (Component) => (props) => {
    const { state, dispatch } = useStore();
    const stateToProps = mapStateToProps(state);
    const dispatchToProps = mapDispatchToProps(dispatch);
    const allProps = { ...props, ...stateToProps, ...dispatchToProps };
    return <Component {...allProps} />;
  };
};