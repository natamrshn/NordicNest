import React from "react";
import FAQItem from "./../FAQItem/FAQItem";

const faqs = [
  {
    question: "What materials do you use for your furniture?",
    answer:
      "We use only high-quality, premium materials, including solid wood, natural stone, and durable upholstery fabrics, ensuring long-lasting beauty and comfort.",
  },
  {
    question: "Do you offer custom furniture designs?",
    answer:
      "Yes! We provide custom-made furniture tailored to your needs, including size, materials, and finishes. Contact us for a consultation.",
  },
  {
    question: "What is your delivery time?",
    answer:
      "Delivery times vary depending on the item. In-stock furniture ships within a few days, while custom pieces may take 4-8 weeks.",
  },
  {
    question: "Do you offer installation services?",
    answer:
      "Yes, we provide professional assembly and installation for our furniture to ensure a perfect fit in your space.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We stand by our quality! If you're not satisfied, you can return eligible items within 14 days of delivery. Custom-made furniture is non-refundable.",
  },
];

const FAQList: React.FC = () => {
  return (
    <div className="">
      <h2 className="faq__title">FAQ</h2>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </div>
  );
};

export default FAQList;
