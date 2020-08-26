/**
 * App.js
 *
 * @author nxxinf
 * @github https://github.com/fangnx
 * @created 2019-08-24 17:03:39
 * @last-modified 2020-08-26 14:46:32
 */

import React from 'react';
import Intro from './components/Intro/Intro.jsx';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <div style={{ flex: '1' }}>
        <Intro></Intro>
      </div>
    </div>
  );
};

export default App;
