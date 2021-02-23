import './Home.scss';
import Profile from './profile.jpeg';

const Home = () => (
  <div className='home-container'>
    <div className='left'>
      <div className='cropper'>
        <img className='home-container-image' src={Profile} alt='' />
      </div>
    </div>
    <div className='right'>
      <h2>Hi, I'm Albert.</h2>
      <h4>
        I'm a new grad who has worked at Microsoft, Capital One, and a couple other startups. I
        enjoy building products for other people, with other people.
      </h4>
      <div className='currently'>
        <h4>Currently: </h4>
        <ul>
          <li>Reading "Designing Data Intensive Applications"</li>
          <li>Getting better at desiging interfaces</li>
          <li>Playing League of Legends</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Home;
