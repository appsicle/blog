import ProjectCard from './ProjectCard';
import Heighten from './heighten.png';
import Minesweeper from './minesweeper.png';
import Spectrum from './spectrum.svg';
import Screech from './screech.svg';
import Github from './github.svg';

import './Projects.scss';

const Projects = () => (
  <div className='main-projects-container'>
    <ProjectCard src={Heighten} title='Heighten' link='https://heighten.me'>
      <p>Got ghosted on Tinder? Find out why by submitting your conversation to real women.</p>
    </ProjectCard>
    <ProjectCard src={Spectrum} title='Spectrum' link='https://devpost.com/software/test-so1ukw'>
      <p>
        Online meetings suck. We built Spectrum to make them more fun! Heavily inspired by Jubilee
      </p>
    </ProjectCard>
    <ProjectCard src={Screech} title='Screech' link='https://devpost.com/software/screech'>
      <p>Just another io game except you yell into your mic to make yourself move.</p>
    </ProjectCard>
    <ProjectCard src={Minesweeper} title='Minesweeper' link='http://the-minesweeper.herokuapp.com/'>
      <p>The classic game built in pure javascript (feat. breadth first search)</p>
    </ProjectCard>
    <ProjectCard
      src={Github}
      title='See more on my github'
      link='https://github.com/appsicle'></ProjectCard>
  </div>
);

export default Projects;
