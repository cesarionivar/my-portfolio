import React from 'react';

import './banner.css';
import hello from '../../assets/img/greet.png';

export const Banner = () => {
  return (
    <div className='banner'>
      <img src={hello} alt='Welcome' className='welcome-img' />
      <br />
      <h2 class='title'>
        {'<'} I'm a Software Developer {'/>'}
      </h2>
    </div>
  );
};
