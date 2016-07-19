/* eslint react/prop-types:0 */
import React from 'react';

import revisions from '../../../app-revisions.json';

const Html = ({ store, cssText, appHtml }) => {
  const state = store.getState();
  const { appName } = state;
  const initialState = JSON.stringify(state);
  return (
    <html>
      <head>
        <style dangerouslySetInnerHTML={{ __html: cssText }} />
      </head>
      <body>
        <div id={appName} dangerouslySetInnerHTML={{ __html: appHtml }}></div>
        <script dangerouslySetInnerHTML={{ __html: `window.initialState = ${initialState};` }} />
        <script src={revisions[`${appName}.js`]}></script>
      </body>
    </html>
  );
};

export default Html;
