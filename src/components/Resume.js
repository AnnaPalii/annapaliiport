import React from 'react';
import './Cards.css';


export const Resume = () => {
    return (
        <section className='cards' id='resume'>
            <h1 className='text'>Resume</h1>
            <embed src="assets/annapaliicv.pdf" width="600px" height="700px" className='resume' />
        </section>
    )
};


export default Resume; 


