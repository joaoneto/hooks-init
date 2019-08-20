import React, { createContext, useState, useEffect } from 'react';

import ProjectsService from 'services/projects';

export const ProjectContext = createContext();

const ProjectProvider = ({ value, children }) => {
  const [projects, setProjects] = useState(value || []);
  
  const getAllProjects = async () => {
    const response = await ProjectsService.getAllProjects();

    setProjects([
      ...projects,
      ...response.data
    ]);
  }

  const addProject = (project) => {
    setProjects([
      ...projects,
      project
    ]);
  };
  
  const removeProject = (projectId) => {
    setProjects(projects.filter(project => project.id !== projectId));
  };
  
  useEffect(() => {    
    getAllProjects();
  }, []);
  
  return (
    <ProjectContext.Provider 
      value={{
        projects,
        addProject,
        removeProject,
        getAllProjects
      }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;