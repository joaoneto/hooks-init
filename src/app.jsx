import React from 'react';

import { StoreProvider } from 'state/redux-like/store';
import combineProviders from 'state/context-like/combine-providers';
import Pages from 'pages';

import CountProvider from 'state/context-like/count.provider';
import ProjectsProvider from 'state/context-like/projects.provider';

const AllProviders = combineProviders(
  [CountProvider, 0],
  [ProjectsProvider, []]
);

console.log(AllProviders);

export default () => {
  return (
    <div>
      <AllProviders>
      {/* <CountProvider> */}
        {/* <ProjectsProvider> */}
          <StoreProvider>
            <Pages />
          </StoreProvider>
        {/* </ProjectsProvider> */}
      {/* </CountProvider> */}
      </AllProviders>
    </div>
  );
};