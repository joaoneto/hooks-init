import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Projects from 'components/project';

import { ProjectsContext } from 'state';

export default () => {
  const { projects, addProject } = useContext(ProjectsContext);
  
  function handleProjectAdd() {
    addProject({
      name: Date.now(),
      description: 'My Project'
    });
  }

  return (
    <div>
      <div>Home</div>
      <button onClick={handleProjectAdd}>Add Project</button>
      <Link to="/home-redux-like">
        Go to home-redux-like
      </Link>
      {projects.map((project, key) => 
        <Projects
          key={key}
          name={project.name}
          description={project.description}
          status={project.status}
        />
      )}
    </div>
  );
};
