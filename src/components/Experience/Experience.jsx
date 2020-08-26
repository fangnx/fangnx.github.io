import React from 'react';
import ContentCard from '../ContentCard/ContentCard';
import ubisoftLogo from '../../assets/ubisoft-logo.svg';
import ericssonLogo from '../../assets/ericsson-logo.svg';
import meituLogo from '../../assets/meitu-logo.png';

const UbisoftExp = {
  company: 'Ubisoft',
  position: 'Full Stack Developer Intern',
  content: 'Game Telemetry Platform',
  logo: ubisoftLogo,
  tags: ['Typescript', 'Angular', 'Node.js', 'NestJS', 'MongoDB', 'Redis'],
};

const EricssonExp = {
  company: 'Ericsson',
  position: 'Software Developer Intern',
  content: (
    <>
      <a href="https://theia-ide.org/">Eclipse Theia</a> - an open source web
      IDE framework (
      <a href="https://github.com/eclipse-theia/theia">GitHub link</a>)
    </>
  ),
  logo: ericssonLogo,
  tags: ['Typescript', 'React', 'InversifyJS'],
};

const MeituExp = {
  company: 'Meitu',
  position: 'Data Mining Engineer Intern',
  content: (
    <>
      Recommendation System for{' '}
      <a href="https://apps.apple.com/us/app/meipai-watch-short-plays/id847334708">
        Meipai
      </a>
    </>
  ),
  logo: meituLogo,
  tags: ['Python', 'MySQL'],
};

const Experience = () => (
  <div className="experience">
    <ContentCard
      title={UbisoftExp.company}
      content={UbisoftExp.content}
      imageSrc={UbisoftExp.logo}
      tags={UbisoftExp.tags}
    ></ContentCard>

    <ContentCard
      title={EricssonExp.company}
      content={EricssonExp.content}
      imageSrc={EricssonExp.logo}
      tags={EricssonExp.tags}
    ></ContentCard>

    <ContentCard
      title={MeituExp.company}
      content={MeituExp.content}
      imageSrc={MeituExp.logo}
      tags={MeituExp.tags}
    ></ContentCard>
  </div>
);

export default Experience;
