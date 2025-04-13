import React, { useState } from "react";
import { content } from "../configs/content";

const FAQ = ({ language = "en" }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const faqs = content[language]?.faqs || content["en"].faqs || [];
    const contact = content[language]?.contact || content["en"].contact;

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col items-center gap-8 mt-8 px-2 lg:px-6 w-full">
            {/* FAQs Section - Full Width with Small Padding */}
            <div className="bg-[#6f6f6f] text-white py-14 lg:py-16 px-6 lg:px-12 rounded-md shadow-md w-full max-w-[80vw]">
                <h2 className="text-4xl lg:text-5xl font-semibold text-center mb-6">
                    {content[language]?.faqTitle || "FAQs"}
                </h2>
                <div className="space-y-6"> {/* Tăng khoảng cách giữa các câu hỏi */}
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-white">
                            <button
                                onClick={() => handleToggle(index)}
                                className="w-full text-left flex justify-between items-center px-6 py-5 bg-gray-100 hover:bg-gray-200 transition duration-300 text-lg lg:text-xl font-semibold text-black"
                            >
                                <span>{faq.question}</span>
                                <span
                                    className={`transform transition-transform text-xl ${
                                        openIndex === index ? "rotate-180" : ""
                                    }`}
                                >
                                    ▼
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="px-4 py-5 bg-white border-t text-lg lg:text-xl text-gray-700">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Us Section */}
            <div id="contact" className="w-full max-w-xl text-black font-[Reddit Sans] text-center p-5 bg-white">
                <p className="lg:text-3xl text-2xl font-thin mb-4">{contact.text}</p>
               <div className="mt-6 flex justify-center gap-10 lg:gap-18 text-4xl lg:text-5xl">
                    <img src="/Mail.png" className="w-14 h-14 lg:w-16 lg:h-16 cursor-pointer hover:text-gray-500" />
                    <a href="https://www.facebook.com/rmitshinsei" target="_blank" rel="noopener noreferrer">
                        <img src="/Facebook.png" className="w-14 h-14 lg:w-16 lg:h-16 cursor-pointer hover:text-gray-500" />
                    </a>
                    <a href="https://www.instagram.com/rmitshinsei/" target="_blank" rel="noopener noreferrer">
                        <img src="Instagram.png" className="w-14 h-14 lg:w-16 lg:h-16 cursor-pointer hover:text-gray-500" />
                    </a>
                    <img src="Linkedin.png" className="w-14 h-14 lg:w-16 lg:h-16 cursor-pointer hover:text-gray-500" />
                </div>  
            </div>
        </div>
    );
};

export default FAQ;
