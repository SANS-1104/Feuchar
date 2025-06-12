import '../About/about.css';
import StudentCardComponent2 from './StudentCardComponent2';

export default function Testimonial2({ course }) {
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
          {course.StudentTestimonial?.map((student, index) => (
            <StudentCardComponent2
              key={index}
              img={student.img}
              name={student.name}
              minCTC={student.minCTC}
              maxCTC={student.maxCTC}
              testimonial={student.testimonial}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
