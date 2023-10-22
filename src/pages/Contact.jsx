import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import '../styles/contact-page.css';

const Contact = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [msg, setMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('contacts');
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
      x: -300,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: 0.75,
      },
    },
  };

  // handle form data
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Subject: '',
    Message: '',
  });

  const handleChange = (e) => {
    
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleFormSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    const url =
      'https://v1.nocodeapi.com/cloobtech/google_sheets/GUvGsCbbuEABvoTm?tabId=Sheet1';

    try {
      // Convert the formData to a 2D array
      const data = [
        [formData.Name, formData.Email, formData.Subject, formData.Message],
      ];

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Send the 2D array as the body
      });

      if (response.ok) {
        // Handle success here (e.g., show a success message)
        setMsg('Form submitted successfully!');
        setFormData({
          Name: '',
          Email: '',
          Subject: '',
          Message: '',
        });
        setIsLoading(false);
      } else {
        // Handle error here
        setMsg('Form submission failed.');
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='contacts' id='contacts'>
      {/* Contact Img */}
      <div className='background-img '></div>

      <section className='container'>
        <motion.div
          className='contacts-title'
          initial='hidden'
          animate={controls}
          variants={containerVariants}
        >
          <p>- Kindly reach me on the contacts below -</p>
          <h1>Contacts</h1>
        </motion.div>
        <motion.div
          initial='hidden'
          animate={controls}
          variants={cardVariants}
          className='contact-info'
        >
          <div className='title'>
            <h3>Email Addresses</h3>
            <p>
              <a href='mailto:services@cloob.tech'>services@cloob.tech</a>
            </p>
            <p>
              <a href='mailto:info@cloob.tech'>info@cloob.tech</a>
            </p>
          </div>

          <div className='title'>
            <h3>Phonelines</h3>
            <p>{'(234) 706-248-2037'}</p>
            <p>{'(234) 807-362-8145'}</p>
          </div>

          <div className='message-container'>
            <h3>Leave a message</h3>
            <form action='' onSubmit={handleFormSubmit}>
              <input
                type='text'
                placeholder='Name'
                name='Name'
                value={formData.Name}
                onChange={handleChange}
              />
              <input
                type='email'
                placeholder='Email'
                name='Email'
                value={formData.Email}
                onChange={handleChange}
              />
              <input
                type='text'
                placeholder='Subject'
                name='Subject'
                value={formData.Subject}
                onChange={handleChange}
              />
              <textarea
                name='Message'
                id=''
                cols='30'
                rows='10'
                placeholder='Message'
                value={formData.Message}
                onChange={handleChange}
              ></textarea>
              <button type='submit' disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Submit'}
              </button>
              <div className='form-msg'>{msg}</div>
            </form>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
