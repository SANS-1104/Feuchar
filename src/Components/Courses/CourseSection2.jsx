import './course.css';
import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { useNavigate } from "react-router-dom";
import { projects as mockProjects } from "../../data/courseData";

const CourseSection2 = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/course/${id}`);
  };

  useEffect(() => {
    setProjects(mockProjects);
  }, []);

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const currentItems = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="app-container">
      <div className="grid-container">
        {currentItems.map((project) => (
          <div key={project.id} onClick={() => handleCardClick(project.id)} style={{ cursor: "pointer" }}>
          <CourseCard
            key={project.id}
            title={project.title}
            subtitle={project.subtitle}
            image={project.image}
            tutor={project.tutor[0].name}
          />
          </div>
        ))}
      </div>

      {/* Updated Pagination Controls */}
      {totalPages > 1 && (
        <div className="custom-pagination">
        <div className='pagination-controlBtn'>
          <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
            <span className="arrow">←</span> Previous
          </button>
        </div>
       
        <div className="page-numbers">
          {[...Array(totalPages)].map((_, idx) => {
            const page = idx + 1;
            const isNearby =
              page === 1 ||
              page === totalPages ||
              Math.abs(currentPage - page) <= 1;

            const isEllipsis =
              (page === currentPage - 2 && page > 1) ||
              (page === currentPage + 2 && page < totalPages);

            return isNearby ? (
              <button
                key={page}
                className={`page-btn ${currentPage === page ? "active" : ""}`}
                onClick={() => changePage(page)}
              >
                {page}
              </button>
            ) : isEllipsis ? (
              <span key={page} className="dots">...</span>
            ) : null;
          })}
        </div>

        <div className='pagination-controlBtn'>
          <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>
            Next <span className="arrow">→</span>
          </button>
        </div>
        
      </div>
      )}
    </div>
    
  );
};

export default CourseSection2;
