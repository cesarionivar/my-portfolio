import React from 'react';
import { Banner } from '../components/Banner/Banner';
import { Footer } from '../components/Footer/Footer';
import { HireMe } from '../components/HireMe/HireMe';
import { Navbar } from '../components/Navbar/Navbar';
import { Resume } from '../components/Resume/Resume';

export const Landing = () => {
  return (
    <div className='landing page'>
      <Navbar />
      <Banner />
      <Resume />
      <HireMe />
      <Footer />
    </div>
  );
};
