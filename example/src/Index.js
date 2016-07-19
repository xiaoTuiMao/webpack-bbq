/* eslint react/prefer-stateless-function:0 */
/* eslint react/prop-types:0 */
import React, { Component } from 'react';

class Index extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        Index
        {children}
      </div>
    );
  }
}

export default Index;
