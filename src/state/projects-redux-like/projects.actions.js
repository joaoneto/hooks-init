const prefix = 'PROJECTS';
const ADD_PROJECT = `${prefix}.ADD_PROJECT`;

const addProject = (payload) => {
  return {
    type: ADD_PROJECT,
    payload
  };
};

export {
  ADD_PROJECT,
  addProject
};
