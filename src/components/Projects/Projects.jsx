import React from 'react';
import ContentCard from '../ContentCard/ContentCard';

const CodeDailyProject = {
  title: 'Code Daily',
  description: 'Custom Stack Overflow dashboard',
  logo:
    'https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png',
  tags: ['Typescript', 'Angular', 'NestJS', 'MongoDB', 'TravisCI'],
};

const DailyArticlesProject = {
  title: 'Daily Articles',
  description: 'Alexa skill to fetch and read articles from Wikipedia',
  logo:
    'https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png',
  tags: ['Typescript', 'Node.js', 'Python', 'AWS Lambda'],
};

const SmoretifyProject = {
  title: 'Smoretify',
  description:
    'Spotify web interface with real-time lyrics, artist wiki, and and integrated YouTube widget',
  logo: 'https://github.com/fangnx/smoretify/raw/master/demo-image.jpg',
  tags: ['Javascript', 'React', 'Express', 'PassportJS'],
};

const CooperatorProject = {
  title: 'Co-operator',
  description:
    'McGill ECSE 321 course project: a student co-op management system',
  logo:
    'https://github.com/fangnx/co-operator/blob/master/demo-image.jpg?raw=true',
  tags: ['Java', 'Spring Boot', 'Gradle', 'Travis CI'],
};

const ReactionForumProject = {
  title: 'Reaction Forum',
  description:
    'Web discussion forum with support for Markdown & RSS subscriptions',
  logo: 'https://github.com/fangnx/reaction-forum/raw/master/demo-image.jpg',
  tags: ['Javascript', 'React', 'Express', 'MongoDB'],
};

const Projects = () => (
  <div className="projects">
    <ContentCard
      title={CodeDailyProject.title}
      content={CodeDailyProject.description}
      imageSrc={CodeDailyProject.logo}
      tags={CodeDailyProject.tags}
    ></ContentCard>

    <ContentCard
      title={DailyArticlesProject.title}
      content={DailyArticlesProject.description}
      imageSrc={DailyArticlesProject.logo}
      tags={DailyArticlesProject.tags}
    ></ContentCard>

    <ContentCard
      title={SmoretifyProject.title}
      content={SmoretifyProject.description}
      imageSrc={SmoretifyProject.logo}
      tags={SmoretifyProject.tags}
    ></ContentCard>

    <ContentCard
      title={CooperatorProject.title}
      content={CooperatorProject.description}
      imageSrc={CooperatorProject.logo}
      tags={CooperatorProject.tags}
    ></ContentCard>

    <ContentCard
      title={ReactionForumProject.title}
      content={ReactionForumProject.description}
      imageSrc={ReactionForumProject.logo}
      tags={ReactionForumProject.tags}
    ></ContentCard>
  </div>
);

export default Projects;
