import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mov' autoPlay loop muted />
      <h1>Hi! I am Anna.</h1>
    </div>
  );
}

export default HeroSection;
