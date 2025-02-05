import React from "react";
import FAQList from "./FAQList/FAQList";
import "./FAQ.scss";

import imgage from "../../assets/images/faq_image.png";

const FAQ: React.FC = () => {
  return (
    <div className="faq">
      <div className="faq__content">
        <FAQList />
        <img src= {imgage} className="faq__image" />
      </div>
    </div>
  );
};

export default FAQ;
