import React, { createContext, useState } from 'react';

export const CountContext = createContext();

const CountProvider = ({ value, children }) => {
  const [count, setCount] = useState(value || 0);
  
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  
  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};

export default CountProvider;