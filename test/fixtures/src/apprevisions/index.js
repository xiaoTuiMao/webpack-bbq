/* eslint global-require:0 */
/* eslint react/jsx-filename-extension:0 */
import React from 'react';

class App extends React.Component {
  componentDidMount() {
    // require('bootstrap/dist/css/bootstrap.css');
    require.ensure([], () => {
      require('./foo');
    }, 'foo');
  }

  render() {
    return (
      <div>Hello World</div>
    );
  }
}

export default App;
