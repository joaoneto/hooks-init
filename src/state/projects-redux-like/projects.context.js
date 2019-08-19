import { createContext, useContext } from 'react';
import reducer from './projects.reducer';

const ProjectsContext = createContext();

export const ProjectsProvider = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <ProjectsContext.Provider value={{ state, dispatch }}>{children}</ProjectsContext.Provider>
  );
};

export const useStore = () => useContext(ProjectsContext);