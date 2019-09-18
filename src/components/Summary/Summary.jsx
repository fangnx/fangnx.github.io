/**
 * Summary.jsx
 *
 * @author nxxinf
 * @github https://github.com/fangnx
 * @created 2019-09-15 22:30:08
 * @last-modified 2019-09-18 01:09:26
 */

import React from 'react';
import { Icon } from 'semantic-ui-react';
import './Summary.scss';

const FACEBOOK_LINK = 'https://www.facebook.com/fangnx';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/naxin-fang-3821b4137/';
const GITHUB_LINK = 'https://github.com/fangnx';

const Summary = () => (
  <div className="summary">
    <div className="content">
      <div className="audioAnimation">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="fullName">
        <div className="first">Naxin</div>
        <div className="last">Fang</div>
      </div>

      <div className="roles">
        {['student', 'developer', 'web enthusiast'].map((role, index) => (
          <>
            {index !== 0 ? <span className="bullet">•</span> : ''}
            <span className="role">{role}</span>
          </>
        ))}
      </div>

      <div className="links">
        <div onClick={() => window.open(FACEBOOK_LINK, '_blank')}>
          <Icon link name="facebook"></Icon>
        </div>
        <div onClick={() => window.open(LINKEDIN_LINK, '_blank')}>
          <Icon link name="linkedin"></Icon>
        </div>
        <div onClick={() => window.open(GITHUB_LINK, '_blank')}>
          <Icon link name="github"></Icon>
        </div>
      </div>
    </div>
  </div>
);

export default Summary;
