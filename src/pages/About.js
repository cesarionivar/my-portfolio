import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';

export const About = () => {
  return (
    <div>
      <Navbar />
      <div className='about page'>
        <h2 className='page__title'>About</h2>
      </div>
      <Footer />
    </div>
  );
};
