export default (state, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return {
        projects: [
          ...state.projects,
          action.payload
        ]
      };
    default:
      throw new Error(`Action type ${action.type} not found`);
  }
};