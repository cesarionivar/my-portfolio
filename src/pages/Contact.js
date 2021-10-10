import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';

export const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className='contact page'>
        <h2 className='page__title'>Contact</h2>
      </div>
      <Footer />
    </div>
  );
};
