import { useState, useEffect } from 'react';
import ProjectsService from 'services/projects';

export function useFetchAllProjects() {
  const [data, setData] = useState([]);
  useEffect(() => {
    ProjectsService.getAll()
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  return data;
};
