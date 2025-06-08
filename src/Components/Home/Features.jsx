import './HomeCSS.css';
import CardComponent from './CardComponent';

export default function Features() {
  const cardData = [
    {
      imageSrc: '/images/card1.png',
      title: 'Daily Live Classes + Recorded classes',
      description1: 'With Doubt Solving via Live Chat. Classes Accessible for Year long',
      description2 : ''
    },
    {
      imageSrc: '/images/card2.png',
      title: 'Certificates for All Courses',
      description1: 'Earn certificates upon completion to validate your skills',
      description2 : 'and Get job on Our and other Astro platforms'
    },
    {
      imageSrc: '/images/card3.png',
      title: '100% Placement Opportunity',
      description1: 'Internship and Job - Premium access',
      description2 : 'of Our Astrology Marketplace for FREE'
    },
    {
      imageSrc: '/images/card4.png',
      title: 'Personalized Mentorship',
      description1: 'Get a personal mentor and Ask all your Doubts ',
      description2 : 'via Chat or Get on call with them anytime'
    },
    {
      imageSrc: '/images/card5.png',
      title: 'Short Course Duration',
      description1: 'Make yourself market-ready in just 2-3 months',
      description2 : 'with master-grade experience and knowledge'
    },
  ];

  return (
    <div className='Features-Wrapper-outer'>
      <div className='Features-Wrapper'>
        <div className='upperContainer'>
          <div className='Animations'>
            <img src='/images/featureImg.png' alt=''/>
          </div>
          <div className='content'>
            <div className='heading'>
              <div>Special Features</div>
              <div>&nbsp;of Our Courses</div>
            </div>
            <div className='detail'>
              <div>Comprehensive online courses</div>
              <div>&nbsp;designed to enhance skills</div>
              <div>&nbsp;and knowledge for all learners.</div>
            </div>
          </div>
        </div>

        <div className='lowerContainer'>
          {/* Row 1 – Two cards */}
          <div className='upperCardsRow'>
            {cardData.slice(0, 2).map((card, index) => (
              <CardComponent
                key={index}
                imageSrc={card.imageSrc}
                title={card.title}
                description1={card.description1}
                description2={card.description2}
              />
            ))}
          </div>

          {/* Row 2 – Three cards */}
          <div className='lowerCardsRow'>
            {cardData.slice(2).map((card, index) => (
              <CardComponent
                key={index + 2}
                imageSrc={card.imageSrc}
                title={card.title}
                description1={card.description1}
                description2={card.description2}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
