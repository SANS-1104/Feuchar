import { useParams } from "react-router-dom";
import { projects } from "../../data/courseData";
import Journey from "../Home/Journey";
import Testimonial from "../About/Testimonial";
import FAQ2 from "./FAQ2";
import CourseDetInstructor from "./CourseDetInstructor";
import './CourseDetail.css';
import CourseDetHero from "./CourseDetHero";
import CourseDetLast from "./CourseDetLast";


const CourseDetailPage = () => {
  const { id } = useParams();
  const course = projects.find((c) => c.id.toString() === id);

  if (!course) return <div>Course not found</div>;

  return (
    <div className="courseDetailPage">
      <CourseDetHero course={course} />
      <Journey />
      <CourseDetInstructor />
      <Testimonial />
      <FAQ2 />
      < CourseDetLast />
    </div>
  );
};

export default CourseDetailPage;
