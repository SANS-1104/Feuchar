import faqData from '../../data/faqData';
import './about.css'
import ChipGroup from './ChipGroup';
import { useState } from 'react';


import FAQCardComponent from './FAQCardComponent';

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredFAQs =
    selectedCategory === "All"
      ? faqData
      : faqData.filter(faq => faq.category === selectedCategory);
  return (
    <div className='outerTestimonial'>
      <div className='innerTestimonial'>
        <div className='HeadingLayer'>
          <div className='left'>
            <div className='head'>Frequently Asked Questions</div>
            <div className='subHead'>Ease into the world of Feuchar with clarity. Our FAQs cover queries of everyone.</div>
            <div className='chips'><ChipGroup onSelect={setSelectedCategory} /></div>
          </div>
          <div className='right FAQright hideSmall'>
            <img src='/images/FAQLogo.png' alt='' />
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
