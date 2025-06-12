import React, { useRef } from 'react';
import './TestimonialCarousel.css';

const TestimonialCarousel = ({ webinar }) => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    const card = container.querySelector('.carousel-card');
    if (!card) return;

    const gap = 20; 
    const cardWidth = card.offsetWidth;
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="testimonial-carousel">
      {/* Header */}
      <div className="carousel-header">
        <div className='title'>What Past Attendees Say</div>
        <div className="carousel-arrows">
          <button onClick={() => scroll('left')}>←</button>
          <button onClick={() => scroll('right')}>→</button>
        </div>
      </div>

      {/* Carousel Cards */}
      <div className="carousel-track-wrapper" ref={carouselRef}>
        {webinar?.webinarTestimonials?.map((testimonial, index) => (
          <div
            key={index}
            className="carousel-card"
            style={{
              backgroundColor: testimonial.bgColor,
              color: testimonial.color,
            }}
          >
            <div className='Testi-title'>{testimonial.title}</div>
            <div className="quote">"{testimonial.text}"</div>
            <div className="author">
              <img src={testimonial.img} alt={testimonial.name} />
              <div className='card-TestDesc'>
                <div>{testimonial.name}</div>
                <small>{testimonial.role}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
