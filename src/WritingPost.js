import ReactMarkdown from 'react-markdown';
import stories from './writing/markdown';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import './WritingPost.scss';

const WritingPost = ({source}) => {
  const { title } = useParams();
  const [story, setStory] = useState('')

  useEffect(() => {
    for(let i = 0; i < stories.length; ++i) {
      if (stories[i].title === title) {
        setStory(stories[i].text)
        break;
      }
    }
  }, [title])

  return (
    <div className="story-container">
      <ReactMarkdown source={story}/>
    </div>
  )
}

export default WritingPost;