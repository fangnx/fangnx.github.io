/**
 * App.js
 *
 * @author nxxinf
 * @github https://github.com/fangnx
 * @created 2019-08-24 17:03:39
 * @last-modified 2019-09-27 01:58:00
 */

import React from 'react';
import Summary from './components/Summary/Summary.jsx';
import Projects from './components/Projects/Projects.jsx';
import Footer from './components/Footer/Footer.jsx';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <div style={{ flex: '1' }}>
        <Summary></Summary>
        {/* <Projects></Projects> */}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default App;
