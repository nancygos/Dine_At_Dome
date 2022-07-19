import React from 'react';
import TopNavBar from './TopNavBar';
import contact from './images/contact.png';
import Fotter from './Fotter';

function Contact() {
  return (
    <>
        < TopNavBar />
        <div className="contact-container">
            <img src={contact} alt="contactImage" className='contact-image'/>

            <div className="contact-written">
                <h1 className="contact-h1">Contact Dine at Dome</h1>
                <p className="contact-p">Questions about bookings – <strong>support@dineatdome.com</strong> </p>
                <p className="contact-p">General questions, cooperation, etc – <strong> info@dineatdome.com</strong></p>
                <p className="contact-p"> <strong> Telephone:</strong> +44 20 3608 2097</p>
            </div>
        </div>

        <Fotter />
    </>
  )
}

export default Contact