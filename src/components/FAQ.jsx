import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import React, { useState } from "react";

const FAQ = ({
  items = [],
  title = "Frequently Asked Questions",
  className = "",
}) => {
  // State to track which FAQ item is open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function to open/close FAQ items
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`pl-0 lg:pl-20 ${className}`}>
      <div className="min-h-max bg-[#F3F8F8] py-14 md:py-20 pl-10 md:pl-20 pr-10 md:pr-16 lg:pr-60 rounded-l-0 lg:rounded-l-[15px] mb-20">
        <h2 className="text-[35px] font-[700] mb-10">{title}</h2>

        <div className="space-y-0 border border-[#374646] w-full lg:w-[90%] rounded-md">
          {items.map((item, index) => (
            <div
              key={index}
              className={`py-5 px-[20px] lg:px-12 ${
                index < items.length - 1 ? "border-b border-[#374646]" : ""
              }`}
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left font-[600] cursor-pointer text-sm lg:text-base"
              >
                {item.question}
                <FaChevronUp
                  className={`h-5 w-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {openIndex === index && (
                <div className="mt-2 text-gray-600 text-sm lg:text-base font-[400] transition-all duration-300 ease-in-out leading-[24px] w-full lg:w-[70%]">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
