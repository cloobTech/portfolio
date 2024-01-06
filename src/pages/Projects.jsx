import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import '../styles/projects-page.css';
import ProjectCard from '../components/ProjectCard';
import { projectCardDetails } from '../assets/data';

const cardArrayVariants = [
  {
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
        delay: 0.5,
      },
    },
  },
  {
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
        delay: 1.25,
      },
    },
  },
  {
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
        delay: 1.75,
      },
    },
  },
];

const Projects = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('projects');
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

  const cardVariants = {
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
    <div className='projects' id='projects'>
      <section className='container'>
        <motion.div
          className='projects-title'
          initial='hidden'
          animate={controls}
          variants={containerVariants}
        >
          <p>- lastest work -</p>
          <h1>Projects</h1>
        </motion.div>
        <motion.div
          className='project-cards'
          initial='hidden'
          animate={controls}
          variants={cardVariants}
        >
          {
            // fix project details
            projectCardDetails.map((props, index) => (
              <ProjectCard
                key={index}
                {...props}
                controls={controls}
                variants={cardArrayVariants[index]}
              />
            ))
          }
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
