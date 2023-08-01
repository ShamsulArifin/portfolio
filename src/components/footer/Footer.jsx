import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title'>Arifin</h1>

        <ul className='footer__list'>
          <li>
            <a href='#about' className='footer__link'>
              About
            </a>
          </li>

          <li>
            <a href='#portfolio' className='footer__link'>
              Projects
            </a>
          </li>

          {/* <li>
            <a href='#services' className='footer__link'>
              Services
            </a>
          </li> */}
        </ul>

        <div className='footer__social'>
          <a
            href='https://www.facebook.com/samd.arifin/'
            className='footer__social-link'
            target='_blank'
          >
            <i class='bx bxl-facebook'></i>
          </a>

          <a
            href='https://www.instagram.com/shamsul_arifn/'
            className='footer__social-link'
            target='_blank'
          >
            <i class='bx bxl-instagram'></i>
          </a>

          <a
            href='https://youtube.com/@samarifin/'
            className='footer__social-link'
            target='_blank'
          >
            <i class='bx bxl-youtube'></i>
          </a>

          <a
            href='https://www.linkedin.com/in/shamsarifin/'
            className='footer__social-link'
            target='_blank'
          >
            <i class='bx bxl-linkedin'></i>
          </a>
        </div>

        <span className='footer__copy'>
          &#169; Shamsul Arifin. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
