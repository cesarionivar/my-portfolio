import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';

export const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className='contact page'>
        <h2 className='page__title'>Contact</h2>
        <div className='contactForm__container'>
          <form name='Contact' method='POST'>
            <input type='hidden' name='form-name' value='contact' />
            <div className='formControl sender-data'>
              <input name='name' type='text' placeholder='Full name' required />
              <input name='email' type='text' placeholder='Email' required />
            </div>
            <div className='formControl'>
              <textarea
                name='message'
                placeholder='Message'
                required
              ></textarea>
              <button type='submit'>Send message</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
