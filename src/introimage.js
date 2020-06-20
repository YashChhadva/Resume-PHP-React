import React from 'react';
import Background from './tech.jpg';

export default function IntroImage(){
    const mystyle ={
            width:'100vw',
            height: '50vh',
            backgroundImage: `url(${Background})`
    };
    const textstyle ={
        
};
    return(
        
        <div classname={mystyle}>
           
            <h2>hello</h2>
        </div>
    );
};