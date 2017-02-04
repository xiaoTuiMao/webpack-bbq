import './client.global.css';

import render from './frameworks/render';

import reducer from './reducer';
import routes from './routes';

render({ routes, reducer });

