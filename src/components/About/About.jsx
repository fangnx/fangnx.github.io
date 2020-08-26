import React from 'react';
import ContentCard from '../ContentCard/ContentCard';

const paragraph1 = (
  <>
    I am a fourth-year Computer Science student at{' '}
    <a href="https://mcgill.ca/" target="_blank">
      McGill University
    </a>{' '}
    in Montreal, Canada. As a web technology enthusiast and a passionate
    programmer, I have developed some personal projects in my spare time (see{' '}
    <a href="/projects">projects</a>). I have also gained industrial experience
    from my previous internships in{' '}
    <a href="https://www.ubisoft.com/en-us/" target="_blank">
      Ubisoft
    </a>
    ,{' '}
    <a href="https://theia-ide.org/" target="_blank">
      Ericsson
    </a>
    , and{' '}
    <a href="https://www.meitu.com/en/" target="_blank">
      Meitu
    </a>{' '}
    (see <a href="/experience">experience</a>).
  </>
);
const paragraph2 = (
  <>
    I am always motivated and eager to learn more. Feel free to contact me if
    you are interested in working/doing projects with me!
  </>
);

const About = () => (
  <div className="about">
    <ContentCard content={paragraph1}></ContentCard>
    <ContentCard content={paragraph2}></ContentCard>
  </div>
);

export default About;
