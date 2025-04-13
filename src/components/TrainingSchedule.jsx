import React, { useEffect, useRef, useState } from "react";
import { content } from "../configs/content";

export default function TrainingSchedule({ language = "en" }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const trainingschedule = content[language]?.trainingschedule || content["en"]?.trainingschedule;

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // ✅ Ensure trainingschedule exists before rendering
  if (!trainingschedule) {
    console.error(`Training schedule data is missing for language: ${language}`);
    return <div className="text-white">Error: Training schedule not found.</div>;
  }

  return (
    <section ref={sectionRef} className="relative w-full h-auto min-h-[300px] sm:min-h-[500px] md:min-h-[700px] lg:min-h-[808px] flex items-center bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/training-schedule-bg.png"
          alt="Kendo Training"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay Text with Transition */}
      <div className={`absolute inset-0 flex flex-col items-center lg:items-end justify-center text-center lg:text-right font-['Reddit Sans'] right-0 lg:right-8 
        transition-all duration-1000 ease-out 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
      >
        <p className="text-white text-[24px] sm:text-[40px] md:text-[70px] lg:text-[113px] font-bold md:mt-4">
          {trainingschedule?.time || "Time Missing"}
        </p>
        <p className="text-white text-[24px] sm:text-[40px] md:text-[70px] lg:text-[120px] font-bold md:mb-4">
          {trainingschedule?.days || "Days Missing"}
        </p>
        <p className="text-yellow-200 text-[36px] sm:text-[70px] md:text-[120px] lg:text-[180px] font-extrabold leading-none font-['Anton'] tracking-[0.23em]">
          {trainingschedule?.description || "Description Missing"}
        </p>
      </div>
    </section>
  );
}
