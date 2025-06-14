import './webinar.css';
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { webinarData as mockProjects } from "../../data/webinarData.js";
import WebinarCard from './WebinarCard';

const WebinarSection2 = () => {
  
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const navigate = useNavigate();
  const handleCardClick = (urlTitle) => {
    navigate(`/webinar/${urlTitle}`);
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
    <div className="webinar-app-container">
      <div className="webinar-grid-container">
        {currentItems.map((project) => (
          <div key={project.id} onClick={() => handleCardClick(project.urlTitle)} style={{ cursor: "pointer" }}>
          <WebinarCard
            key={project.id}
            title={project.title}
            dateOfWebinar = {project.dateOfWebinar}
            cardIntroimage = {project.cardIntroimage}
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

export default WebinarSection2;
