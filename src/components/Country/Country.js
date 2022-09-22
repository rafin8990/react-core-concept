import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country'>
            <div>
               <img src={props.flag} alt="" />
             <h2>Name: {props.name}</h2>
            <p>Population: {props.population}</p>
            </div>
        </div>
    );
};

export default Country;