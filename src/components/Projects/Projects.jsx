/**
 * Projects.jsx
 *
 * @author nxxinf
 * @github https://github.com/fangnx
 * @created 2019-09-17 12:26:17
 * @last-modified 2019-09-17 23:17:21
 */

import React from 'react';
import { Icon } from 'semantic-ui-react';
import './Projects.scss';

const PROJECT_INFO = [
  {
    name: 'Smoretify',
    link: 'https://github.com/fangnx/smoretify',
    imageLink: 'https://github.com/fangnx/smoretify/raw/master/demo-image.jpg',
    description:
      'Web application that customizes and enhances the Spotify experience.'
  },
  {
    name: 'Reaction Forum',
    link: 'https://github.com/fangnx/reaction-forum',
    imageLink:
      'https://github.com/fangnx/reaction-forum/raw/master/demo-image.jpg',
    description:
      'Discussion forum with automated posts from subscribed RSS sources.'
  },
  {
    name: 'Co-operator',
    link: 'https://github.com/fangnx/co-operator',
    imageLink:
      'https://github.com/fangnx/co-operator/blob/master/demo-image.jpg?raw=true',
    description: 'Student co-op management system.'
  }
];

const Projects = () => (
  <div className="projects">
    <div className="content">
      {PROJECT_INFO.map(p => (
        <div className="projectCard">
          <img src={p.imageLink} alt="" />
          <div className="name">{p.name}</div>
          <span onClick={() => window.open(p.link)}>
            <Icon name="linkify"></Icon>
          </span>
          <div className="description">{p.description}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
