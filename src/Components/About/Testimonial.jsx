import './about.css'
import StudentCardComponent from './StudentCardComponent'

export default function Testimonial() {
  const StudentTestimonial = [
    {
      img: '/images/testimonial1.png',
      name: 'Meenal Joshi',
      minCTC: '4',
      maxCTC: '15',
      tagline: '"Theory + Practice = Perfect Learning!"',
      testimonial: "The best part about this course? It's not just theory! We had real-life chart analysis, regular assignments, and weekly tests that helped me apply what I was learning. I now feel confident reading birth charts professionally.",
      about: '— Meenal Joshi, Aspiring Astrologer, Jaipur'
    },
    {
      img: '/images/testimonial2.png',
      name: 'Ritika Sharma',
      minCTC: '4',
      maxCTC: '15',
      tagline: '"Most authentic and affordable astrology course out there!"',
      testimonial: "I was always curious about astrology, but didn’t know where to start. Feuchar’s live classes made everything so easy to understand. The mentors are very helpful and professional. Now, I’m confidently reading charts and helping friends too!",
      about: ' — Ritika Sharma, Student, Delhi'
    },
    {
      img: '/images/testimonial3.png',
      name: 'Karan Mehta',
      minCTC: '4',
      maxCTC: '15',
      tagline: '"Exactly what I needed to start my side hustle."',
      testimonial: "As a full-time engineer, I never thought I’d find time to learn occult sciences. But Feuchar’s recorded videos and flexible schedule made it possible. I now offer astrology consultations on weekends and it’s been a great source of extra income.",
      about:'— Karan Mehta, IT Professional, Pune'
    },
    {
      img: '/images/testimonial4.png',
      name: 'Sakshi Verma',
      minCTC: '4',
      maxCTC: '15',
      tagline: '"Great value for money and career support."',
      testimonial: "Most courses charge a bomb and don’t even teach half the things. Feuchar gave me more than I expected—structured learning, mentorship, and even placement support. I’m now listed on their astrologer platform and already earning through consultations!",
      about: '— Sakshi Verma, Certified Astrologer, Jaipur'
    },
    {
      img: '/images/testimonial5.png',
      name: 'Ramesh Iyer',
      minCTC: '4',
      maxCTC: '15',
      tagline: '"Best place to turn your passion into profession."',
      testimonial: "I had basic knowledge of numerology but lacked proper guidance. Thanks to Feuchar’s expert tutors, I not only got certified but also built the confidence to offer paid sessions. The group chats and network here are very supportive too!",
      about: '— Ramesh Iyer, Freelancer, Bengaluru'
    },
    {
      img: '/images/testimonial6.png',
      name: 'Aditya Rawal',
      minCTC: '4',
      maxCTC: '15',
      tagline: '"Clear, concise, and no unnecessary fluff!"',
      testimonial: "What I loved most about Feuchar’s course was how to-the-point and practical everything was. No long boring theory—just pure, applicable knowledge. Every concept was explained clearly, with examples. Perfect for serious learners!",
      about: '— Aditya Rawal, Marketing Professional, Mumbai'
    }
  ];

  return (
    <div className='outerTestimonial'>
      <div className='innerTestimonial'>
        <div className='HeadingLayer'>
          <div className='left'>
            <div className='head'>What Our Students Say About Our Courses</div>
            <div className='subHead'>Read the success stories of our students. Discover why they chose Feuchar for being a Numerologist.</div>
          </div>
          <div className='right'>
            <img src='/images/studentDesign.png' alt='' />
          </div>
        </div>
        <div className='testDesc'>
          {StudentTestimonial.map((course, index) => (
            <StudentCardComponent
              key={index}
              img={course.img}
              name={course.name}
              minCTC={course.minCTC}
              maxCTC={course.maxCTC}
              tagline={course.tagline}
              testimonial={course.testimonial}
              about={course.about}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
