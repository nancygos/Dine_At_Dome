import React from 'react';

function Card(props) {
  return (
    <>
        <div className="cardContainer">
            <img src={props.image} alt="dome1" className='cardImage'/>

            <div className="written">
                <h1 className="cardHeading"> {props.cardHead} </h1>
                <p className="cardPara"> {props.cardPara} </p>
            </div>
        </div>
    </>
  )
}

export default Card