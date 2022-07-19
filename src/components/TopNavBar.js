import React from 'react';
import {Link} from "react-router-dom";

function TopNavBar() {
  return (
    <>
        <div className="topNavBar-container">
            <div className="left">
                <h1 className="topNavBarLogo">
                    <Link to="/">Dine At Dome</Link>
                    <input type="search" name="search" id="top-navBar-search" placeholder='What are you looking for?' />
                </h1>
            </div>

            <div className="right">
                <ul>
                    <li> <Link to="/"> Home </Link> </li>
                    <li> <a href="/destination"> Destination </a> </li>
                    <li> <a href="/about"> About </a> </li>
                    <li> <a href="/media"> Media </a> </li>
                    <li> <Link to="/contact"> Contact </Link> </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default TopNavBar