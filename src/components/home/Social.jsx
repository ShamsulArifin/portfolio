import React from 'react';

const Social = () => {
  return (
    <div className='home__social'>
      <a
        href='https://www.facebook.com/samd.arifin/'
        className='home__social-icon'
        target='_blank'
      >
        <i class='uil uil-facebook-f'></i>
      </a>

      <a
        href='https://www.linkedin.com/in/shamsarifin/'
        className='home__social-icon'
        target='_blank'
      >
        <i class='uil uil-linkedin'></i>
      </a>

      <a
        href='https://github.com/ShamsulArifin'
        className='home__social-icon'
        target='_blank'
      >
        <i class='uil uil-github-alt'></i>
      </a>

      <a
        href='https://www.artstation.com/samarifin'
        className='home__social-icon'
        target='_blank'
      >
        <i class='uil uil-brush-alt'></i>
      </a>
    </div>
  );
};

export default Social;
