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
  const { urlTitle } = useParams();
  const course = projects.find((c) => c.urlTitle === urlTitle);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleOpenForm = () => setShowForm(true);
    window.addEventListener("openSyllabusForm", handleOpenForm);
    return () => window.removeEventListener("openSyllabusForm", handleOpenForm);
  }, []);

  const handleFormSuccess = () => {
    setShowForm(false);
    // Download handled in DownloadForm now, no need to do it here
  };

  if (!course) return <div>Course not found</div>;

  return (
    <div className="courseDetailPage max-wdh">
      <Helmet>
        <title>{course.title} - Feuchar Course Details</title>
        <meta
          name="description"
          content={
            course.description ||
            `Learn more about the ${course.title} course at Feuchar.`
          }
        />
      </Helmet>

      <CourseDetHero course={course} />
      <Journey />
      <CourseDetInstructor course={course} />
      <Testimonial2 course={course} />
      <FAQ2 course={course} />
      <CourseDetLast course={course} />

      {showForm && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={() => setShowForm(false)}>
              X
            </button>
            <DownloadForm
              onSuccess={handleFormSuccess}
              syllabusURL={course.syllabus}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetailPage;
