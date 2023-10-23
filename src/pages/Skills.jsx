import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import '../styles/skills-page.css';

const Skills = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('skills');
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

  const gridVariant = {
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
  const gridVariantTwo = {
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
        delay: 1.5,
      },
    },
  };
  const gridVariantThree = {
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
        delay: 2.0,
      },
    },
  };

  const gridVariantFour = {
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
        delay: 2.5,
      },
    },
  };

  const gridVariantFive = {
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
        delay: 3.0,
      },
    },
  };

  return (
    <div className='skills' id='skills'>
      <section className='container'>
        <motion.div
          className='skills-title'
          initial='hidden'
          animate={controls}
          variants={containerVariants}
        >
          <p>- Some of the beautiful tools I've worked with -</p>
          <h1>Skill - Stack</h1>
        </motion.div>
        <motion.div
          className='skills-grid'
          initial='hidden'
          animate={controls}
          //   variants={gridVariant}
        >
          <motion.div
            className='grid-item grid-one'
            initial='hidden'
            animate={controls}
            variants={gridVariant}
          >
            Languages & Frameworks
            <ul>
              <li>C</li>
              <li>Python - FastApi</li>
              <li>Node JS - Express</li>
              <li>Javascript - React</li>
            </ul>
          </motion.div>
          <motion.div
            className='grid-item grid-two'
            initial='hidden'
            animate={controls}
            variants={gridVariantTwo}
          >
            Cloud Platforms
            <ul>
              <li>AWS</li>
              <li>Google Firebase</li>
              <li>Digital Ocean</li>
              <li>Git Hub</li>
            </ul>
          </motion.div>
          <motion.div
            className='grid-item grid-three'
            initial='hidden'
            animate={controls}
            variants={gridVariantThree}
          >
            Storages
            <ul>
              <li>Mysql - sqlachemy</li>
              <li>Redis</li>
              <li>NoSql - Google Firestore</li>
            </ul>
          </motion.div>
          <motion.div
            className='grid-item grid-four'
            initial='hidden'
            animate={controls}
            variants={gridVariantFour}
          >
            Soft Skills
            <ul>
              <li>Great communicator</li>
              <li>Good Collaborator</li>
            </ul>
          </motion.div>
          <motion.div
            className='grid-item grid-five'
            initial='hidden'
            animate={controls}
            variants={gridVariantFive}
          >
            Server/ Linux Administration
            <ul>
              <li>Containerization - Docker</li>
              <li>Automation - Jenkins</li>
              <li>Orchestration - Kubernetes</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;
