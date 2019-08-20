const prefix = 'COUNT';
const INCREMENT = `${prefix}.INCREMENT`;
const DECREMENT = `${prefix}.DECREMENT`;

const increment = () => {
  return {
    type: INCREMENT
  };
};

const decrement = () => {
  return {
    type: DECREMENT
  };
};

export {
  INCREMENT,
  DECREMENT,
  increment,
  decrement
};
