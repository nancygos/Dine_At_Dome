import React from 'react';
import Card from './Card';
import dine1 from './images/dine1.jpg';
import dine2 from './images/dine2.jpg';
import dine3 from './images/dine3.jpg';

function WhereToDine() {
  return (
    <>
        <div className="WhereToDine-container">
            <h1 className='wheretodine-heading'>Where to Dine at Dome?</h1>
            <p className='wheretodine-para'>Find the Dine at Dome experience near you:</p>

            {/* CARDS */}

            <div className="WhereToDome-cards">
                < Card  image={dine1} cardHead="Peepe Restaurant" cardPara = "Italian and Sicilian cusine with passion" />
                < Card  image={dine2} cardHead="The Ragged Cot" cardPara = "Dine in style" />
                < Card  image={dine3} cardHead="Toss'd Italian Bar and Grille" cardPara = "Delightful food choice for any taste in Hermitage, Pa" />
                < Card  image={dine1} cardHead="Escape" cardPara = "Get Ready For Good Times" />
                < Card  image={dine2} cardHead="Clifton Hotel" cardPara = "Enjoy a culinary experience like no other" />
                < Card  image={dine3} cardHead="The Anchor Pub" cardPara = "A British Pub with Greek Heart" />
            </div>
        </div>
    </>
  )
}

export default WhereToDine