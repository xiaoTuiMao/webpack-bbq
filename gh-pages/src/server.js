import staticRendering from './frameworks/staticRendering';

import reducer from './reducer';
import routes from './routes';

const appName = 'client';

export default staticRendering({ appName, routes, reducer });
