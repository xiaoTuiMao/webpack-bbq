/* eslint no-underscore-dangle:0 */
/* eslint react/prefer-stateless-function:0 */
/* eslint react/prop-types:0 */
import React, { Component } from 'react';

import styles from './client.css';

class Example extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <span className={styles.red}>Example</span>
        {children}
      </div>
    );
  }
}

Example.getInitialCssText = () => styles.__cssText__;

export default Example;

