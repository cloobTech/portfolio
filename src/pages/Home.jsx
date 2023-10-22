import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import resume from '../assets/resume.pdf';

import '../styles/home-page.css';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  // handle open and close side-bar
  const toggleSideBar = () => setSideBar(!sideBar);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideUpAnimation = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const staggerAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='home-page' id='home'>
      {/* Nav Section */}
      <nav className={`${(scrolled || sideBar) && 'onscroll-style'}`}>
        <div className='navbar container'>
          <div className='logo'>
            <span>Cloob</span>
            <span>Tech</span>
          </div>
          {/* Nav Links */}
          <ul className={`${sideBar ? 'show-sidebar' : 'nav-links'}`}>
            <li className='nav-link'>
              <a href='#about' onClick={() => setSideBar(false)}>
                About <span></span>
              </a>
            </li>
            <li className='nav-link'>
              <a href='#projects' onClick={() => setSideBar(false)}>
                Projects <span></span>
              </a>
            </li>
            <li className='nav-link'>
              <a href='#skills' onClick={() => setSideBar(false)}>
                Skills <span></span>
              </a>
            </li>
            <li className='nav-link'>
              <a href='#contacts' onClick={() => setSideBar(false)}>
                Contacts <span></span>
              </a>
            </li>
            <li className='nav-link resume'>
              <a
                href={resume}
                download={'Resume'}
                onClick={() => setSideBar(false)}
              >
                {' '}
                Resume{' '}
              </a>
            </li>
          </ul>

          {/* Hamburger Menu for Small Screen */}
          <div className='mobile-menu-bars' onClick={toggleSideBar}>
            {sideBar ? (
              <i className='fa-solid fa-times'></i>
            ) : (
              <i className='fa-solid fa-bars'></i>
            )}
          </div>
        </div>
      </nav>
      {/* end Nav Section */}

      {/* Hero Section */}
      <section className='hero-section container'>
        <motion.div
          className='hero_text_and_btn'
          initial='hidden'
          animate='visible'
          variants={slideUpAnimation}
          transition={{ duration: 1 }}
        >
          <div className='hero-text'>
            <motion.h1 variants={staggerAnimation}>
              <motion.span variants={letterAnimation}>F</motion.span>
              <motion.span variants={letterAnimation}>u</motion.span>
              <motion.span variants={letterAnimation}>l</motion.span>
              <motion.span variants={letterAnimation}>l</motion.span>
              <motion.span variants={letterAnimation}>S</motion.span>
              <motion.span variants={letterAnimation}>t</motion.span>
              <motion.span variants={letterAnimation}>a</motion.span>
              <motion.span variants={letterAnimation}>c</motion.span>
              <motion.span variants={letterAnimation}>k</motion.span>
            </motion.h1>
            <motion.h1 variants={staggerAnimation}>
              <motion.span variants={letterAnimation}>S</motion.span>
              <motion.span variants={letterAnimation}>o</motion.span>
              <motion.span variants={letterAnimation}>f</motion.span>
              <motion.span variants={letterAnimation}>t</motion.span>
              <motion.span variants={letterAnimation}>w</motion.span>
              <motion.span variants={letterAnimation}>a</motion.span>
              <motion.span variants={letterAnimation}>r</motion.span>
              <motion.span variants={letterAnimation}>e</motion.span>
              <span className='space'></span>
              <motion.span variants={letterAnimation}>E</motion.span>
              <motion.span variants={letterAnimation}>n</motion.span>
              <motion.span variants={letterAnimation}>g</motion.span>
              <motion.span variants={letterAnimation}>i</motion.span>
              <motion.span variants={letterAnimation}>n</motion.span>
              <motion.span variants={letterAnimation}>e</motion.span>
              <motion.span variants={letterAnimation}>e</motion.span>
              <motion.span variants={letterAnimation}>r</motion.span>
            </motion.h1>
            <motion.p variants={fadeAnimation}>
              Transforming Ideas into seamless <br /> Digital Experience...
            </motion.p>
          </div>
          <div className='hero-section-btn'>
            <motion.span variants={fadeAnimation}></motion.span>
            <motion.a href='#contacts' variants={fadeAnimation}>
              Message Me
            </motion.a>
          </div>
        </motion.div>

        {/* Social medial links */}

        {/* Social medial links */}
        <ul className='social-medial-links'>
          <li className='social-medial-link' title='github'>
            <a href=''>
              <i class='fa-brands fa-github'></i>
            </a>
          </li>
          <li className='social-medial-link' title='linkedin'>
            <a href=''>
              <i class='fa-brands fa-linkedin-in'></i>
            </a>
          </li>
          <li className='social-medial-link' title='twitter'>
            <a href=''>
              <i class='fa-brands fa-twitter'></i>
            </a>
          </li>
          <li className='social-medial-link' title='facebook'>
            <a href=''>
              <i class='fa-brands fa-facebook'></i>
            </a>
          </li>
        </ul>

        {/* Scroll Down Design*/}
        <motion.div
          className='scroll-down'
          initial='hidden'
          animate='visible'
          variants={fadeAnimation}
          transition={{ duration: 1 }}
        >
          <p>
            <li className='social-medial-link' title='scroll down'>
              <a href='#about'>
                <i class='fa-solid fa-down-long'></i>
              </a>
            </li>
            <a href='#about' className='scroll-down-text'>
              <small>SCROLL DOWN</small>
            </a>
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
