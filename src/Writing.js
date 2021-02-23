import './Writing.scss';
import React from 'react';
import stories from './writing/markdown';
import Card from './Card';
import Soon from './soon.svg';

const shortenedString = (text) => {
  return text.slice(0, 210) + '...';
};

const Writing = () => {
  return stories.map((story) => (
    <div className='writing-container'>
      <div className='writing-container'>
        <Card title={story.title} blurb={shortenedString(story.text)}></Card>
      </div>
      <div className='footer-container'>
        <img className='footer-image' src={Soon} alt='' />
        <h4 className='footer'>More stories coming soon!</h4>
      </div>
    </div>
  ));
};

export default Writing;
