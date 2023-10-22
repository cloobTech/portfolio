import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import '../styles/about-page.css';

const About = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const rect = aboutSection.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight * 0.25; // Adjust the percentage as needed

      if (isInView && !animationTriggered) {
        setAnimationTriggered(true);
        controls.start('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationTriggered, controls]);

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 300,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const tests = {
    hidden: {
      opacity: 0,
      y: 300,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: 0.75,
      },
    },
  };

  return (
    <div className='about' id='about'>
      <section className='container'>
        <motion.div
          className='about-title'
          initial='hidden'
          animate={controls}
          variants={containerVariants}
        >
          <p>- Who Am I? -</p>
          <h1>Olamide Caleb Bello</h1>
        </motion.div>
        <motion.div
          className='about-body'
          initial='hidden'
          animate={controls}
          variants={tests}
        >
          Hey there! I'm Olamide C. Bello as you might have guessed, a
          passionate and dedicated full-stack software engineer with a knack for
          turning ideas into elegant, functional digital experiences. With a
          strong command of Python, JavaScript - react, and MySQL amongst a range of
          technologies, I thrive in the world of web development, crafting both
          front-end experiences and back-end systems that come together
          seamlessly.
        </motion.div>

        {/* design bar */}
        <span className='design-bar'></span>
      </section>
    </div>
  );
};

export default About;
