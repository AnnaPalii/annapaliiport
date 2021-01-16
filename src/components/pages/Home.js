import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import AboutMe from '../AboutMe';
import Resume from '../Resume';


function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Cards />
      <Resume />
      <Footer />
    </>
  );
}

export default Home;
