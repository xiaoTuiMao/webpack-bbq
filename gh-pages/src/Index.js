/* eslint react/prefer-stateless-function:0 */
/* eslint react/prop-types:0 */
/* eslint global-require:0 */
import React, { Component } from 'react';

import styles from './index.css';

class Index extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.index}>
        {children}
      </div>
    );
  }
}

Index.getInitialCssText = () => [
  require('./index.global.css'),
  require('./index.css'),
].toString();

export default Index;
