/**
 * Footer.jsx
 *
 * @author nxxinf
 * @github https://github.com/fangnx
 * @created 2019-09-17 22:53:59
 * @last-modified 2019-09-24 22:21:39
 */

import React from 'react';
import { Icon } from 'semantic-ui-react';
import './Footer.scss';

const GITHUB_LINK = 'https://github.com/fangnx';

const Footer = () => (
  <div className="footer">
    <div className="content">
      Made by Naxin Fang
      <span onClick={() => window.open(GITHUB_LINK)}>
        <Icon className="whiteIcon" name="github"></Icon>
      </span>
      with
      <Icon className="redIcon" name="heart"></Icon>
    </div>
  </div>
);

export default Footer;
