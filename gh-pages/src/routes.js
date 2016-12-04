import Index from './Index';
import Example from './Example';

const index = {
  path: '/',
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
