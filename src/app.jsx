import React from 'react';
import Pages from 'pages';
import { RootProvider } from 'state';

export default () => {
  return (
    <div>
      <RootProvider>
        <Pages />
      </RootProvider>
    </div>
  );
};