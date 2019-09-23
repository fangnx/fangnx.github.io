/**
 * Summary.jsx
 *
 * @author nxxinf
 * @github https://github.com/fangnx
 * @created 2019-09-15 22:30:08
 * @last-modified 2019-09-23 01:42:00
 */

import React from 'react';
import Typewriter from 'typewriter-effect';
import { Icon } from 'semantic-ui-react';
import './Summary.scss';

const FIRST_NAME = 'Naxin';
const LAST_NAME = 'Fang';
const FACEBOOK_LINK = 'https://www.facebook.com/fangnx';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/naxin-fang-3821b4137/';
const GITHUB_LINK = 'https://github.com/fangnx';

const typed_content = `Hi, I'm <h1>${FIRST_NAME} ${LAST_NAME}</h1> 👏.
<br/> I'm a Computer Science student at <h5>McGill University</h5> in Montreal, Canada.
<br/><br/> I love coding ⌨️, music 🎧, and photography 📷.`;

const Summary = () => (
  <div className="summary">
    <div className="topHeader">
      <div className="content">
        <div className="leftMenu">
          <a>Naxin Fang</a>
        </div>

        <div className="rightMenu">
          <div onClick={() => window.open(GITHUB_LINK, '_blank')}>
            <Icon link name="github"></Icon>
          </div>
          <div onClick={() => window.open(LINKEDIN_LINK, '_blank')}>
            <Icon link name="linkedin"></Icon>
          </div>
          <div onClick={() => window.open(FACEBOOK_LINK, '_blank')}>
            <Icon link name="facebook"></Icon>
          </div>
        </div>
      </div>
    </div>

    <div className="content">
      <Typewriter
        onInit={typewriter => {
          typewriter
            .changeDelay(30)
            .pauseFor(100)
            .typeString(typed_content)
            .callFunction(() => {})
            .start();
        }}
      />
    </div>
  </div>
);

export default Summary;
