import React from 'react';
import Fotter from './Fotter'
import HowItWork from './HowItWork';
import Navbar from './Navbar';
import WhereToDine from './WhereToDine';

function Home() {
  return (
    <>
        < Navbar />
        < WhereToDine />
        < HowItWork />
        < Fotter />
    </>
  )
}

export default Home