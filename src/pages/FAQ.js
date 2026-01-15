import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <h1>Frequently Asked Questions</h1>
        <p>Click on a question to view the answer.</p>

        <div className="faq-item" onClick={() => toggle(0)}>
          <h3>What is the School of Infocomm (SOI)?</h3>
          {openIndex === 0 && (
            <p>
              The School of Infocomm at Republic Polytechnic focuses on
              information technology, digital design, cybersecurity,
              data analytics and software development.
            </p>
          )}
        </div>

        <div className="faq-item" onClick={() => toggle(1)}>
          <h3>How many diplomas does SOI offer?</h3>
          {openIndex === 1 && (
            <p>
              SOI offers six diploma programmes covering a wide range of
              infocomm disciplines.
            </p>
          )}
        </div>

        <div className="faq-item" onClick={() => toggle(2)}>
          <h3>Do I need prior programming experience?</h3>
          {openIndex === 2 && (
            <p>
              No prior programming experience is required. The diploma
              programmes are designed for beginners.
            </p>
          )}
        </div>

        <div className="faq-item" onClick={() => toggle(3)}>
          <h3>How do I register my interest?</h3>
          {openIndex === 3 && (
            <p>
              You can register your interest by visiting the Register page
              and submitting the form.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
