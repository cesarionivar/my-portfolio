import React from 'react';
import './footer.css';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__sociales'>
        <a href='#'>
          <i className='fab fa-github'></i>
        </a>
        <a
          href='http://www.twitter.com/cesarionivar'
          target='__blank'
          rel='noreferer'
        >
          <i className='fab fa-twitter'></i>
        </a>
        <a href='#'>
          <i className='fab fa-linkedin'></i>
        </a>
      </div>
      <p className='footer__info'>
        Made with <i class='fas fa-heart'></i> and React{' '}
        <i class='fab fa-react'></i>
      </p>
      <p className='footer__place'>By Cesario Nivar in Santo Domingo</p>
    </div>
  );
};
