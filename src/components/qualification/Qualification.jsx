import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className='qualification section'>
      <h2 className='section__title'>Qualification</h2>
      <span className='section__subtitle'>My personel journey</span>

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div
            className={
              toggleState === 1
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(1)}
          >
            <i className='uil uil-graduation-cap qualification__icon'></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(2)}
          >
            <i className='uil uil-briefcase-alt qualification__icon'></i>
            Experience
          </div>
        </div>

        <div className='qualification__sections'>
          <div
            className={
              toggleState === 1
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
            onClick={() => toggleTab(1)}
          >
            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>Bachelor</h3>
                <span className='qualification__subtitle'>
                  Bsc. In Computer Science & Engineering - Manarat International
                  University
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>2021
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>
                  Higher Secondary Certificate
                </h3>
                <span className='qualification__subtitle'>
                  Science - Quality Education College
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>2015
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>
                  Secondary School Cirtificate
                </h3>
                <span className='qualification__subtitle'>
                  Science - Madrasa E Mohammadia Arabia
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>2012
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
            onClick={() => toggleTab(2)}
          >
            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>
                  Junior Software Engineer
                </h3>
                <span className='qualification__subtitle'>
                  Renssoft Solutions Ltd - Dhaka
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>JUN 2021 - Present
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>
                  Unreal Engine Developer
                </h3>
                <span className='qualification__subtitle'>
                  Opus Technology Ltd - Dhaka
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>NOV 2021 - APR 2022
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>
                  Unreal Engine Developer (Remote)
                </h3>
                <span className='qualification__subtitle'>
                  Kaleido Soft - Croatia
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>JAN 2021 - NOV 2021
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>
                  Junior Python Programmer
                </h3>
                <span className='qualification__subtitle'>
                  Crystal Technology Bangladesh Ltd - Dhaka
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>APR 2020 - NOV 2021
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
