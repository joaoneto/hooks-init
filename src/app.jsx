import React from 'react';

import { StoreProvider } from 'state/store';
import Pages from 'pages';

export default () => {
  return (
    <div>
      <StoreProvider>
        <Pages />
      </StoreProvider>
    </div>
  );
};