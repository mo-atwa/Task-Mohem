import { useState, useEffect } from 'react';
import './Content.css';
import ToDo from './ToDo';

const Content = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Start the animation after two seconds
    setTimeout(() => {
      setIsAnimated(true);
    }, 100);

    // Show content after the header animation ends
    setTimeout(() => {
      setShowContent(true);
    }, 600);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Animated header */}
      <div className={`header ${isAnimated ? 'header-top' : 'header-centered'}`}>
        <h1 className={`header-title ${isAnimated ? 'header-title-small' : 'header-title-large'}`}>
          Task Mohem
        </h1>
      </div>
      
      {/* Content */}
      {showContent && (
        <div className="content-container fade-in">
          <ToDo />
        </div>
      )}
    </div>
  );
};

export default Content;