// import React from 'react';
// import '../styles/scroll-to-home.css';

// const ScrollToHome = () => {
//   return (
//     <div className='scroll-to-home'>
//       <a href='#home'>
//         <i class='fa-solid fa-up-long'></i>
//       </a>
//     </div>
//   );
// };

// export default ScrollToHome;


import React, { useState, useEffect } from 'react';
import '../styles/scroll-to-home.css';

const ScrollToHome = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    // Function to check if the user has scrolled past the first page
    const handleScroll = () => {
      const firstPageHeight = 100; // Set this to the height of your first page (100vh in your case)
      const scrollPosition = window.scrollY;

      // Show the scroll button when the user scrolls past the first page
      setShowScrollButton(scrollPosition > firstPageHeight);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-to-home ${showScrollButton ? 'show' : 'hide'}`}>
      <a href='#home'>
        <i className='fa-solid fa-up-long'></i>
      </a>
    </div>
  );
};

export default ScrollToHome;
