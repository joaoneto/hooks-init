import React, { Fragment } from 'react';

export default (...providers) => ({ children }) => (
  <Fragment>
    {
      providers.reduce((prev, [Provider, initialValue]) => {
        return (
          <Provider value={initialValue}>
            <Fragment>
              {prev}
            </Fragment>
          </Provider>
        );
      }, children)
    }
  </Fragment>
);