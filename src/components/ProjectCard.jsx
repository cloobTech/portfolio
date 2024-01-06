import React from 'react';
import '../styles/projects-page.css';
import { motion } from 'framer-motion';

function ProjectCard({
  title,
  description,
  stackImg,
  liveSite,
  github,
  controls,
  variants,
}) {
  return (
    <motion.div
      initial='hidden'
      className='project-card'
      animate={controls}
      variants={variants}
    >
      <h2 className='title'>{title}</h2>
      <p className='desc'>{description}</p>

      <div className='stack'>
        <h4>Stack</h4>
        <ul>
          {stackImg.map((url, index) => {
            return (
              <li key={index}>
                <p
                  style={{
                    backgroundImage: `url(${url})`,
                  }}
                >
                  &nbsp;
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className='project-card-btns'>
        <a href={liveSite} target='blank'>
          <i className='fa-solid fa-globe'></i>
          <span>Demo</span>
          <span className='is-hover'></span>
        </a>
        <a href={github} target='blank'>
          <i className='fa-brands fa-github'></i>
          <span>Github</span>
          <span className='is-hover'></span>
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
