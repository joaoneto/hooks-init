import { useState, useEffect } from 'react';
import ProjectsService from 'services/projects';

export function useProjects() {
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    setProjects([
      ...projects, {
        id: Date.now().toString(32),
        ...project
      }
    ]);
  };

  useEffect(() => {
    ProjectsService.getAllProjects()
      .then(response => {
        return setProjects([
          ...projects,
          ...response.data
        ]);
      });
  }, []);

  return [
    projects,
    {
      addProject,
      setProjects
    }
  ];
};
