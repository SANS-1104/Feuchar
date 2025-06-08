import '../About/about.css';
import StudentCardComponent2 from './StudentCardComponent2';
import StudentTestimonial from '../../data/Testimonial2data';  // Adjust the path as needed

export default function Testimonial2() {
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
            <StudentCardComponent2
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
