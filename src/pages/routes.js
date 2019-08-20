import Home from './home';
import HomeReduxLike from './home-redux-like';

export default [
  { key: 'home', exact: true, path: '/', component: Home },
  { key: 'home-redux-like', path: '/home-redux-like', component: HomeReduxLike }
];
