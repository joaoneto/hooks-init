const getAllProjects = () => {
  return Promise.resolve({ data: [
    { name: 'project-1', description: 'Project One', status: 'on-line' },
    { name: 'project-2', description: 'Project Two', status: 'off-line' },
    { name: 'project-3', description: 'Project Three', status: 'on-line' }
  ]});
};

export default {
  getAllProjects
};