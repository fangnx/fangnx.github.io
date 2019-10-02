/**
 * Summary.jsx
 *
 * @author nxxinf
 * @github https://github.com/fangnx
 * @created 2019-09-15 22:30:08
 * @last-modified 2019-10-02 12:12:32
 */

import React from 'react';
import codeAlt from '../../assets/code-alt.svg';
import pan from '../../assets/pan.svg';
import programmerImage from '../../assets/coder-pic.svg';
import fbIcon from '../../assets/facebook-square-brands.svg';
import linkedinIcon from '../../assets/linkedin-brands.svg';
import ghIcon from '../../assets/github-square-brands.svg';
import RotatingEarth from './RotatingEarth';
import './Summary.scss';

const FACEBOOK_LINK = 'https://www.facebook.com/fangnx';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/naxin-fang-3821b4137/';
const GITHUB_LINK = 'https://github.com/fangnx';

const Summary = () => (
  <div className="summary">
    <div className="earth-wrapper">
      <RotatingEarth />
    </div>
    <div className="top-navbar">
      <div className="navbar-content">
        <div className="left">
          {/* <img
            style={{ filter: 'invert(100%)', width: '100px' }}
            src={calligraphicName}
            alt=""
          /> */}
        </div>
        <div className="right"></div>
      </div>
    </div>
    <div className="right-navbar">
      <div className="navbar-content">
        <a href={FACEBOOK_LINK}>Facebook</a>
        <a href={LINKEDIN_LINK}>LinkedIn</a>
        <a href={GITHUB_LINK}>GitHub</a>
      </div>
    </div>
    <div className="mid-panel">
      <div className="content">
        <div className="content-left">
          <span className="info-line-large">
            WELCOME TO THE PAGE OF
            <span className="shine-on-hover"> NAXIN FANG</span>
          </span>
          <span className="info-line-init"> I'm a</span>
          <div className="info-roles">
            <span className="info-line-normal">
              CS student @ McGill University
            </span>
            <span className="info-line-normal">
              Passionate software developer
              <img className="icon" src={codeAlt} alt="" />
            </span>
            <span className="info-line-normal">Web technology enthusiast</span>
          </div>
          <span className="info-line-ending">
            Hello World
            <img className="icon" src={pan} alt="" />
          </span>

          <span className="social-media">
            <a href={FACEBOOK_LINK}>
              <img className="media-icon" src={fbIcon} alt="" />
            </a>
            <a href={LINKEDIN_LINK}>
              <img className="media-icon" src={linkedinIcon} alt="" />
            </a>
            <a href={GITHUB_LINK}>
              <img className="media-icon" src={ghIcon} alt="" />
            </a>
          </span>
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
