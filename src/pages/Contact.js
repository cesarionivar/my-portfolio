import React, { useRef } from 'react';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';

export const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(formRef.current);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log('Form successfully submitted'))
      .catch((error) => alert(error));
  };

  return (
    <div>
      <Navbar />
      <div className='contact page'>
        <h2 className='page__title'>Contact</h2>
        <div className='contactForm__container'>
          <form
            onSubmit={handleSubmit}
            ref={formRef}
            name='contact'
            method='POST'
            data-netlify='true'
          >
            <div className='formControl sender-data'>
              <input name='name' type='text' placeholder='Full name' required />
              <input type='text' placeholder='Email' required />
            </div>
            <div className='formControl'>
              <textarea name='' placeholder='Message' required></textarea>
              <button type='submit'>Send message</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
