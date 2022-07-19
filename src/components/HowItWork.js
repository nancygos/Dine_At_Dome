import React from 'react';
import Card2 from './Card2';
import dine1 from './images/dine1.jpg';
import dine2 from './images/dine2.jpg';
import dine3 from './images/dine3.jpg';

function HowItWork() {
  return (
    <div className='howItwork'>
        <hr />
        <div className="HowItWork-container">
            <h1 className='wheretodine-heading howitworks-heading'>How it works?</h1>
            <p className='wheretodine-para'>Book your private dining pod for magical evenings, relaxing lunches and all kinds of celebrations.</p>

            <div className='WhereToDome-cards'>
                < Card2  image={dine1} cardHead="Bring in your “social-bubble”" cardPara = "Book your own, private dome for a memorable and safe dining experience" />
                < Card2  image={dine2} cardHead="Al-fresco dining in any weather" cardPara = "Enjoy eating outside, yet stay sheltered from the elements" />
                < Card2  image={dine3} cardHead="Extraordinary way to dine out" cardPara = "Admire 360° panoramic views from the comfort of your invisible pod" />
               
            </div>
        </div>
    </div>
  )
}

export default HowItWork