import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <section className='cards' id='projects'>
      <h1>Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Workout Tracker offers tracking of unlimited activities, whether you’re cycling, hiking or even kayaking.'
              label='React'
              path='/services'
            />
            <CardItem
              src='images/img-2.png'
              text='Employee Directory'
              label='React'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Real time weather application'
              label='JavaScript'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Online Repository for local businesses to find influencers in Twitter'
              label='HTML'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Cards;
