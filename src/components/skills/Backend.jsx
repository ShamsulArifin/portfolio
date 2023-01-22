import React from 'react';

const Backend = () => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>Backend Developer</h3>

      <div className='skills__box'>
        <div className='skills__group'>
          <div className='skills__data'>
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>C++</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>

          <div className='skills__data'>
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>Java</h3>
              <span className='skills__level'>Basic</span>
            </div>
          </div>

          <div className='skills__data'>
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>Python</h3>
              <span className='skills__level'>Advance</span>
            </div>
          </div>

          <div className='skills__data'>
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>GraphQL</h3>
              <span className='skills__level'>Basic</span>
            </div>
          </div>
        </div>

        <div className='skills__group'>
          <div className='skills__data'>
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>AWS Amplify</h3>
              <span className='skills__level'>BAsic</span>
            </div>
          </div>

          <div className='skills__data'>
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>Microsoft Azure</h3>
              <span className='skills__level'>Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
