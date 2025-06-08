import '../About/about.css'
import ChipUse2 from './ChipUse2';
// import ChipGroup from './ChipGroup';

import FAQCardComponent from '../About/FAQCardComponent';


export default function FAQ2() {
    const faqData = [
  {
    question: "How can I place an order on StyleLoom?",
    answer: "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase."
  },
  {
    question: "Can I modify or cancel my order after placing it?",
    answer: "Unfortunately, once an order is confirmed, modifications or cancellations may not be possible. Please review your order carefully before completing the purchase."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept a variety of payment methods, including credit/debit cards, net banking, and select digital wallets. Choose the option that suits you best during checkout."
  },
  {
    question: "How do I initiate a return?",
    answer: "Visit our Returns page and follow the provided instructions. Ensure your item meets our return criteria, and our team will guide you through the process."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is dispatched, you’ll receive a tracking number via email. Use this number to track your package in real-time on our website."
  },
  {
    question: "Do you offer exchanges for products?",
    answer: "At this time, we don't offer direct product exchanges. If you'd like a different item, please initiate a return and place a new order."
  }
];

  return (
    <div className='outerTestimonial'>
      <div className='innerTestimonial'>
        <div className='HeadingLayer'>
          <div className='left'>
            <div className='head'>Frequently Asked Questions</div>
            <div className='subHead'>Ease into the world of Feuchar with clarity. Our FAQs cover queries of everyone.</div>
            <div className='chips'><ChipUse2 /></div>
          </div>
          <div className='right FAQright'>
            <img src='/images/FAQLogo.png' alt='' />
          </div>
        </div>
        <div className='testDesc FAQdesc'>
          {faqData.map((course, index) => (
            <FAQCardComponent
              key={index}
              question={course.question}
              answer={course.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
