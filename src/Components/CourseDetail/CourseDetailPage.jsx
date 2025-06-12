import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import { projects } from "../../data/courseData";
import Journey from "../Home/Journey";
import FAQ2 from "./FAQ2";
import CourseDetInstructor from "./CourseDetInstructor";
import './CourseDetail.css';
import CourseDetHero from "./CourseDetHero";
import CourseDetLast from "./CourseDetLast";
import Testimonial2 from "./Testimonial2";
import DownloadForm from "./DownloadForm"; 

const CourseDetailPage = () => {
  const { id } = useParams();
  const course = projects.find((c) => c.id.toString() === id);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleOpenForm = () => setShowForm(true);
    window.addEventListener("openSyllabusForm", handleOpenForm);
    return () => window.removeEventListener("openSyllabusForm", handleOpenForm);
  }, []);

  const handleFormSuccess = () => {
    setShowForm(false);

    const syllabusURL = course.syllabus;
    const link = document.createElement("a");
    link.href = syllabusURL;
    link.download = course.syllabus;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!course) return <div>Course not found</div>;

  return (
    <div className="courseDetailPage max-wdh">
      <Helmet>
        <title>{course.title} - Feuchar Course Details</title>
        <meta name="description" content={course.description || `Learn more about the ${course.title} course at Feuchar.`} />
      </Helmet>

      <CourseDetHero course={course} />
      <Journey />
      <CourseDetInstructor course={course}/>
      <Testimonial2 course={course}/>
      <FAQ2 course={course}/>
      <CourseDetLast course={course}/>

      {showForm && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={() => setShowForm(false)}>X</button>
            <DownloadForm onSuccess={handleFormSuccess} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetailPage;
