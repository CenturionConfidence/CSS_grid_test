import Stars from './assets/images/illustration-five-stars.webp'
import Button from './assets/images/illustration-create-post.webp'
import AIcontent from './assets/images/illustration-ai-content.webp'
import AudienceGrowth from './assets/images/illustration-audience-growth.webp'
import GrowFollowers from './assets/images/illustration-grow-followers.webp'
import SchedulePost from './assets/images/illustration-schedule-posts.webp'
import MultiplePlatform from './assets/images/illustration-multiple-platforms.webp'
import ConsistentSchedule from './assets/images/illustration-consistent-schedule.webp'
import './App.css';

function App() {
const content = [
  {
    className: 'poster1',
    text: 'Create and schedule content quicker',
    image: Button,
    alt: 'pictureimage'
  },
  {
    className: 'poster4',
    text: 'Write your content with AI',
    image: AIcontent,
    alt: 'pictureimage'
  },
  {
    className: 'poster2',
    text: 'Social Media 10x faster with AI',
    image: Stars,
    alt: 'pictureimage'
  },
  {
    className: 'poster6',
    text: 'Maintain a consistent posting schedule',
    image: ConsistentSchedule,
    alt: 'pictureimage'
  },
  {
    className: 'poster8',
    text: 'Grow followers with non-stop content',
    image: GrowFollowers,
    alt: 'pictureimage'
  },
  {
    className: 'poster3',
    text: 'Schedule to social media',
    image: SchedulePost,
    alt: 'pictureimage'
  },
  {
    className: 'poster5',
    text: 'Manage multiple accounts and platform',
    image: MultiplePlatform,
    alt: 'pictureimage'
  },
  {
    className: 'poster7',
    text: '>56% faster Audience Growth',
    image: AudienceGrowth,
    alt: 'pictureimage'
  }
]

const contentElemeent = content.map((content) => {
  return <div 
      className={content.className} 
      key={content}>
        <h1>{content.text}</h1>
        <img src={content.image} alt={content.alt} />
      </div>
})

  return (
    <div className="App">
      {contentElemeent}
    </div>
  );
}

export default App;
