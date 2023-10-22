import React, { useEffect } from 'react';
import '../styles/footer.css';

const Footer = () => {
  const getCurrentDate = () => {
    const dateEle = document.querySelector('.date');

    const date = new Date();
    dateEle.innerHTML = date.getFullYear();
  };

  useEffect(() => {
    getCurrentDate();
  }, []);

  return (
    <div className='footer'>
      <section className='container'>
        <div className='logo'>
          <span>Cloob</span>
          <span>Tech</span>
        </div>
        <p>
         Olamide Caleb Bello | Python - FastApi - Flask | Javascript - Node js - React | SQL - NoSQL - Redis | C | CSS - Bootstrap, Tailwind, Sass | HTML5 | Canva etc...
        </p>
        <div className='copy-right'>
          &copy; Copyright <span>CloobTech, </span>{' '}
          <span className='date'></span>
        </div>
      </section>
    </div>
  );
};

export default Footer;
