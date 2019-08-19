import React from 'react';

const Projects = ({ name, description, status }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{description}</div>
      <div>{status}</div>
    </div>
  );
};

export default Projects;