import React from 'react';
import '../styles/InstructorProfile.css';
import {content } from '../configs/content';

const InstructorProfile = ({ language }) => { 
  const instructor= content[language]?.instructor || content["en"].instructor;

  return (
    <div className="instructor-profile-container">
      {/* Layer 1: Gallery Grid with Infinite Slider */}
      <div className="gallery-grid">
        <div className="gallery-track">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="gallery-item"><img src="/gallery1.JPG" alt="Gallery 1" className="h-[80px] md:h-[150px]" /></div>
              <div className="gallery-item"><img src="/gallery2.png" alt="Gallery 2" className="h-[80px] md:h-[150px]" /></div>
              <div className="gallery-item"><img src="/gallery1.JPG" alt="Gallery 3" className="h-[80px] md:h-[150px]" /></div>
              <div className="gallery-item"><img src="/gallery2.png" alt="Gallery 4" className="h-[80px] md:h-[150px]" /></div>
              <div className="gallery-item"><img src="/gallery1.JPG" alt="Gallery 5" className="h-[80px] md:h-[150px]" /></div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Layer 2: Centered Mockup */}
      <div className="center-mockup">
        <img 
          src="../profile.png" 
          alt="Instructor Profile" 
           className="mockup-image w-[150px] md:w-[300px]"
        />
      </div>

       {/* Layer 3: Text Overlay */}
       <div className="text-overlay scale-75 md:scale-100">
        <div className="left-orange-text">
          <h1 className="text-3xl md:text-6xl font-['Anton'] tracking-[0.15]">OH</h1>
          <h1 className="text-3xl md:text-6xl font-['Anton'] tracking-[0.15] ">JAE</h1>
          <h1 className="text-3xl md:text-6xl font-['Anton'] tracking-[0.15]">HUN</h1>
        </div>
        <div className="right-black-text absolute bottom-0 md:bottom-4" style={{ transform: 'translateY(20px)' }}>
          <p className="text-3x1 sm md:text-4x1">{instructor.rank}</p>
          <p className="text-3x1 sm md:text-4x1">{instructor.years}</p>
          <p className="text-3x1 sm md:text-4x1">{instructor.president}</p>
          <p className="text-3x1 sm md:text-4x1">{instructor.viceCoach}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;
