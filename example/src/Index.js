/* eslint react/prefer-stateless-function:0 */
/* eslint react/prop-types:0 */
import React, { Component } from 'react';

import styles from './index.css';

class Index extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.index}>
        Index
        {children}
      </div>
    );
  }
}

Index.getInitialCssText = () => styles.toString();

export default Index;
