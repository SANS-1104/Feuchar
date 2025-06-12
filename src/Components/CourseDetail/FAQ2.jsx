import { useState } from 'react';
import '../About/about.css';
import ChipGroup2 from './ChipGroup2';
import FAQCardComponent from '../About/FAQCardComponent';
import courseDetFAQ from '../../data/courseDetFAQ';

export default function FAQ2({course}) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFAQs = courseDetFAQ.filter((faq) =>
    selectedCategory === "All" ? true : faq.category === selectedCategory
  );

  return (
    <div className='outerTestimonial'>
      <div className='innerTestimonial'>
        <div className='HeadingLayer'>
          <div className='left'>
            <div className='head'>Frequently Asked Questions</div>
            <div className='subHead'>Ease into the world of Feuchar with clarity. Our FAQs cover queries of everyone.</div>
            <div className='chips'>
              <ChipGroup2 onSelect={setSelectedCategory} />
            </div>
          </div>
          <div className='right FAQright'>
            <img src='/images/FAQLogo.png' alt='FAQ' />
          </div>
        </div>
        <div className='testDesc FAQdesc'>
          {filteredFAQs.map((faq, index) => (
            <FAQCardComponent
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
