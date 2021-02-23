import ReactMarkdown from 'react-markdown';
import './Card.scss';

const Card = ({ title, blurb }) => (
  <div className='post-card'>
    <a href={`/writing/${title}`}>
      <ReactMarkdown className='post-card-markdown' source={blurb} />
    </a>
  </div>
);

export default Card;
