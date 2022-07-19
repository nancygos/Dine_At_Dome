import React from 'react';
import TopNavBar from './TopNavBar';
import dine5 from './images/dine5.png';

function About() {
  return (
    <>
      <TopNavBar />
      <div className="about-top">
          <img src={dine5} alt="dine5" className='About-dine-image'/>
          <h1 className="about-heading">Safe and unique dining experience for the new reality</h1>
      </div>
      <div className="about-mid"></div>
    </>
  )
}

export default About