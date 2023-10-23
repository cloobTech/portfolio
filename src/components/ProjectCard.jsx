import React from 'react';
import '../styles/projects-page.css';

function ProjectCard({ title, description, stackImg, liveSite, github }) {
  return (
    <div className='project-card'>
      <h2 className='title'>{title}</h2>
      <p className='desc'>{description}</p>

      <div className='stack'>
        <h4>Stack</h4>
        <ul>
          {stackImg.map((url) => {
            return (
              <li>
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
          <i class='fa-solid fa-globe'></i>
          <span>Demo</span>
          <span className='is-hover'></span>
        </a>
        <a href={github} target='blank'>
          <i class='fa-brands fa-github'></i>
          <span>Github</span>
          <span className='is-hover'></span>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
