import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  // ✅ Listen for custom event
  useEffect(() => {
    const handleOpenForm = () => setShowForm(true);
    window.addEventListener("openSyllabusForm", handleOpenForm);
    return () => window.removeEventListener("openSyllabusForm", handleOpenForm);
  }, []);

  // ✅ After form submit: close popup and trigger download
  const handleFormSuccess = () => {
    setShowForm(false);

    const syllabusURL = "/files/syllabus.pdf";
    const link = document.createElement("a");
    link.href = syllabusURL;
    link.download = "syllabus.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!course) return <div>Course not found</div>;

  return (
    <div className="courseDetailPage">
      <CourseDetHero course={course} />
      <Journey />
      <CourseDetInstructor />
      <Testimonial2 />
      <FAQ2 />
      <CourseDetLast />

      {/* ✅ Popup for form */}
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
