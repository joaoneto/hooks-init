import React, { useState } from 'react';
import Projects from 'components/project';

export default () => {
  const [projects, setProjects] = useState([]);
  
  function handleProjectAdd() {
    setProjects([
      ...projects,
      {
        name: Date.now(),
        description: 'My Project'
      }
    ]);
  }

  return (
    <div>
      <div>Home</div>
      <button onClick={handleProjectAdd}>Add Project</button>
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