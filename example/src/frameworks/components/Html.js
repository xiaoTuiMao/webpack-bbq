/* eslint react/prop-types:0 */
/* eslint react/no-danger:0 */
import React from 'react';

import revisions from '../../../app-revisions.json';

const Html = ({ store, cssText, appHtml }) => {
  const state = store.getState();
  const { appName } = state;
  const initialState = JSON.stringify(state);
  return (
    <html lang="zh">
      <head>
        <style dangerouslySetInnerHTML={{ __html: cssText }} />
      </head>
      <body>
        <div id={appName} dangerouslySetInnerHTML={{ __html: appHtml }} />
        <script dangerouslySetInnerHTML={{ __html: `window.initialState = ${initialState};` }} />
        <script src={revisions[`${appName}.js`]} />
      </body>
    </html>
  );
};

export default Html;
