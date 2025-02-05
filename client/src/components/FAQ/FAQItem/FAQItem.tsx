import React, { useState } from "react";
import "./FAQItem.scss";
import arrowUp from "../../../assets/icons/arrow-up.svg";
import arrowDown from "../../../assets/icons/arrow-down.svg";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-item__question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <img
          src={isOpen ? arrowUp : arrowDown}
          alt="toggle icon"
          className="faq-item__icon"
        />
      </div>
      {isOpen && <p className="faq-item__answer">{answer}</p>}
    </div>
  );
};

export default FAQItem;
