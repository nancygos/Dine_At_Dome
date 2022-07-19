import React from 'react'
import logo from './images/logo.png';
import glass from './images/glass.png';
import chefHat from './images/chefHat.png';
import martini from './images/martiniGlass.jpg';

import {Link} from "react-router-dom";

function Navbar() {
  return (
    <>
        <nav>
            <div className="container">

                <div className="navContainer">
                  <div> <img src={logo} alt="Dine at Dome" className='logo' /> </div>

                  <div className="list">
                    <ul>
                      <li> <Link to="/"> Home </Link> </li>
                      <li> <a href="/destination"> Destination </a> </li>
                      <li> <a href="/about"> About </a> </li>
                      <li> <a href="/media"> Media </a> </li>
                      <li> <Link to="/contact"> Contact </Link> </li>
                    </ul>
                  </div>

                </div>

                <div className="centerContainer">
                  <h1 className='centerText'>Dine at Dome</h1>
                  <p className='centerPara'>Unique and memorable <br /> dining experiences, near you.</p>

                  <div className="search-bar">
                    
                    <select name="select" id="select">
                      <option value="All Regions">All Regions</option>
                      <option value="Asia">Asia</option>
                      <option value="India"> &nbsp; India</option>
                      <option value="Canada">Canada</option>
                      <option value="Quebec"> &nbsp; Quebec</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Oceania">Oceania</option>
                      <option value="New Zealand"> &nbsp; New Zealand</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Endland"> &nbsp; Endland</option>
                      <option value="Northern Ireland"> &nbsp; Northern Ireland</option>
                      <option value="Scotland"> &nbsp; Scotland</option>
                      <option value="Wales"> &nbsp; Wales</option>
                      <option value="United States">United States</option>
                    </select>
         
                    <button type="submit" className='search-btn'> <img src={glass} alt="glass"  className='glass'/> <span className='searchSpan'>Search</span></button>
                  </div>
                </div>

                <div className="baseContainer">
                  <div className="smallCards smallCards1">
                    <img src={chefHat} alt="chefHat" className='smallCardsImg' />
                    <p className='small-glass-para'>Restraunts</p>
                  </div>
                  <div className="smallCards smallCards2">
                    <img src={martini} alt="martini" className='smallCardsImg' />
                    <p className='small-glass-para'>Drink Bars</p>
                  </div>
                  <div className="smallCards smallCards3">
                    <p className='small-glass-para'>Pubs&inns</p>
                  </div>
                  <div className="smallCards smallCards4">
                    <p className='small-glass-para'>Hotels</p>
                  </div>
                  <div className="smallCards smallCards5">
                    <p className='small-glass-para'>Country H...</p>
                  </div>
                  <div className="smallCards smallCards6">
                    <p className='small-glass-para'>Golf Courses</p>
                  </div>
                  <div className="smallCards smallCards7">
                    <p className='small-glass-para'>Distillers</p>
                  </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar