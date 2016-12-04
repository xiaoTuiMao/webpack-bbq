import Index from './Index';
import Example from './Example';

import { rootdir } from '../config';

const index = {
  path: rootdir,
  components: Index,
  childRoutes: [
    {
      path: 'index.html',
      components: Example,
    },
  ],
};

export default [
  index,
];
