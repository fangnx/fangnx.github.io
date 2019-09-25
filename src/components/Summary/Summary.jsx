/**
 * Summary.jsx
 *
 * @author nxxinf
 * @github https://github.com/fangnx
 * @created 2019-09-15 22:30:08
 * @last-modified 2019-09-24 23:31:34
 */

import React from 'react';
import calligraphicName from '../../assets/calligraphic-name.png';
import codeAlt from '../../assets/code-alt.svg';
import programming from '../../assets/programming-pic.svg';
import RotatingEarth from './RotatingEarth';
import './Summary.scss';

const FACEBOOK_LINK = 'https://www.facebook.com/fangnx';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/naxin-fang-3821b4137/';
const GITHUB_LINK = 'https://github.com/fangnx';

const Summary = () => (
  <div className="summary">
    <div className="top-navbar">
      <div className="navbar-content">
        <div className="left">
          <img style={{ width: '100px' }} src={calligraphicName} alt="" />
        </div>
        <div className="right"></div>
      </div>
    </div>

    <div className="right-navbar">
      <div className="top-right-corner">
        <RotatingEarth />
      </div>
      <div className="navbar-content">
        <a href={FACEBOOK_LINK}>Facebook</a>
        <a href={LINKEDIN_LINK}>LinkedIn</a>
        <a href={GITHUB_LINK}>GitHub</a>
      </div>
    </div>

    <div className="mid-panel">
      <div className="content">
        <div className="info-line-0">
          Hello<h4> World</h4>
        </div>
        <div className="info-line-1">I'm Naxin Fang</div>
        <div className="info-line-2">cs student @ McGill University</div>
        <div className="info-line-3">
          <h5>passion</h5>ate software developer
        </div>
        <div className="info-line-4">
          learner
          <img className="icon" src={codeAlt} alt="" />
        </div>
      </div>
      <img className="programming-img" src={programming} alt="" />
    </div>

    <div className="right-panel"></div>
  </div>
);

export default Summary;
