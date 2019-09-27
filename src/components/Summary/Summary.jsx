/**
 * Summary.jsx
 *
 * @author nxxinf
 * @github https://github.com/fangnx
 * @created 2019-09-15 22:30:08
 * @last-modified 2019-09-27 01:45:35
 */

import React from 'react';
import calligraphicName from '../../assets/calligraphic-name.png';
import codeAlt from '../../assets/code-alt.svg';
import pan from '../../assets/pan.svg';
import programmerImage from '../../assets/hacker-pic.svg';
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
          <img
            style={{ filter: 'invert(100%)', width: '100px' }}
            src={calligraphicName}
            alt=""
          />
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
        <div className="content-left">
          <div className="info-line-0">HELLO WORLD</div>
          <div className="info-line-1">
            I'M <span className="wavy-underlined">NAXIN FANG</span>
          </div>
          <div className="info-line-2">CS student @ McGill University</div>
          <div className="info-line-3">
            Passionate software developer
            <img className="icon" src={codeAlt} alt="" />
          </div>
          <div className="info-line-4">Web technology enthusiast</div>
          <div className="info-line-5">
            <img className="icon" src={pan} alt="" />
          </div>
        </div>

        <div className="content-right">
          <img className="programming-img" src={programmerImage} alt="" />
        </div>
      </div>
    </div>

    <div className="right-panel"></div>
  </div>
);

export default Summary;
