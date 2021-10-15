import React from 'react';
import { Link } from 'react-router-dom';

export const Success = () => {
  return (
    <div className='noMatch'>
      <img src='/img/received.png' alt='Message Received' />
      <h2>Your message has been received successfully!!!</h2>
      <Link to='/' className='btn-back'>
        Return home &nbsp;<i className='fas fa-home'></i>
      </Link>
    </div>
  );
};
