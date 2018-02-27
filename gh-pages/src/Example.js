/* eslint no-underscore-dangle:0 */
/* eslint react/prefer-stateless-function:0 */
/* eslint react/prop-types:0 */
import React, { Component } from 'react';
import * as R from 'ramda';

import styles from './client.css';
// https://commons.wikimedia.org/wiki/File:Bbq.jpg
import bbq from './bbq.jpg';

class Example extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <div className={styles.img}>
          <img src={bbq} alt="bbq" />
        </div>
        {children}
      </div>
    );
  }
}

Example.getInitialCssText = () => R.toString(styles);

export default Example;

