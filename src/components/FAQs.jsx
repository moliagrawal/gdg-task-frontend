import React, { useState } from 'react';

const FAQItem = ({ question, answer, color }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="mb-6 flex flex-col items-center w-full">
      <button
        onClick={toggleOpen}
        className="flex items-center justify-start w-full max-w-lg px-5 py-3 text-left border-4 border-[#e1e1e1] rounded-full bg-white shadow-md transition-colors duration-300 hover:shadow-lg"
        aria-expanded={isOpen}
        style={{
          fontFamily: "'Google Sans', sans-serif",
          color: '#5f5f5f',
        }}
      >
        <div
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          style={{ color }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <h3 className="font-semibold text-lg ml-4" style={{ fontWeight: 700, color: '#5f5f5f' }}>
          {question}
        </h3>
      </button>
      {isOpen && (
        <div className="relative w-full max-w-md mt-2 flex justify-center">
          <div
            className="absolute left-[-6px] top-0 bottom-0 w-2 rounded-tl-lg rounded-bl-lg"
            style={{ backgroundColor: color }}
          ></div>
          <div
            className="p-4 w-full rounded-lg bg-gray-50 border-4 border-[#e1e1e1] shadow-md transition-shadow duration-300 hover:shadow-lg"
            style={{
              fontFamily: "'Google Sans', sans-serif",
              color: '#5f5f5f',
            }}
          >
            <div className="pl-4">{answer}</div>
          </div>
        </div>
      )}
    </div>
  );
};

const FAQs = () => {
  const faqs = [
    {
      question: 'What is GDG?',
      answer:
        'Google Developer Groups (GDG) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDG, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.',
      color: '#EF4444',
    },
    {
      question: 'How can you become a part of GDG?',
      answer: 'We conduct an annual team recruitment process. The details of recruitment are posted online a few weeks prior. It’s a two-step process involving form filling and personal interview. Students acing both rounds are selected to be part of the core team.',
      color: '#10B981',
    },
    {
      question: 'What does a GDG Lead do?',
      answer: 'A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.',
      color: '#3B82F6',
    },
    {
      question: 'How is DSC related to Google?',
      answer: 'A GDG Lead works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.',
      color: '#F59E0B',
    },
    {
      question: 'How to reach us?',
      answer: <p>Mail us at <a href="mailto:dsc.rknec@gmail.com" className="text-[#5f5f5f] underline">dsc.rknec@gmail.com</a></p>,
      color: '#EF4444',
    },
  ];

  return (
    <section className="max-w-3xl mx-auto p-6" id="faq-section">
      <h2
        className="text-center text-4xl font-bold mb-10"
        style={{
          fontFamily: "'Google Sans', sans-serif",
          color: '#5f5f5f',
        }}
      >
        FAQs
      </h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} {...faq} />
      ))}
    </section>
  );
};

export default FAQs;
