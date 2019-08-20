import combineProviders from 'lib/combine-providers';

import { ProjectsProvider, CountProvider } from 'state';

const RootProvider = combineProviders(
  [CountProvider, 0],
  [ProjectsProvider, []]
);

export default RootProvider;