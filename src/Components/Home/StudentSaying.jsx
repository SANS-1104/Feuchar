import './HomeCSS.css'
import HomeTestimonialCard from './HomeTestimonialCard';
// import StudentCardComponent from '../About/StudentCardComponent'




export default function StudentSaying() {
  const StudentTestimonial = [
    {
      img: '/images/randomG1.jpg',
      name: 'Neetu Singh',
      CTC: '8.5',
    },
    {
      img: '/images/randomB1.avif',
      name: 'Rajesh Patel',
      CTC: '6.75',
    },
    {
      img: '/images/randomG2.jpg',
      name: 'Priya Gupta',
      CTC: '4',
    },
    {
      img: '/images/randomB2.avif',
      name: 'Rishi Sharma',
      CTC: '6.5',
    },
    {
      img: '/images/randomG3.jpg',
      name: 'Somya Sinha',
      CTC: '14',
    },
    {
      img: '/images/randomG4.jpg',
      name: 'Vartika',
      CTC: '12.7',
    }
  ];

  return (
    <div className='outerStudentSay'>
      <div className='innerStudentSay'>
        <div className='HeadingLayer'>
          <div className='left'>
            <div className='head'>What Our Students are Earning</div>
            <div className='subHead'>
                Discover the real success stories of students who transformed their careers <br></br>after learning numerology with us. From side income to packages up to <br></br>₹2 Cr—your journey could be next.            </div>
          </div>
          <div className='right'>
            <img src='/images/studentDesign.png' alt='' />
          </div>
        </div>
        <div className='testDesc'>
          {StudentTestimonial.map((course, index) => (
            <HomeTestimonialCard
              key={index}
              img={course.img}
              name={course.name}
              CTC={course.CTC}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
