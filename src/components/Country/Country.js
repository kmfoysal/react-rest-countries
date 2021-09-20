import React from 'react';
import './Country.css';

const Country = (props) => {

    const {name, capital, flag, population} = props.allCountry;

    return (
        <div className='country'>
            <h3>Country Name: {name}</h3>
            <img src={flag} alt="flag" />
            <h5>Capital Name: {capital}</h5>
            <h6>Total Population : {population}</h6>
        </div>
    );
};

export default Country;