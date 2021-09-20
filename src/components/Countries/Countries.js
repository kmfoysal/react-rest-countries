import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([])
    
    useEffect(() =>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h2>Available Countries : {countries.length}</h2>
            <div className='country-box'>
            {
            countries.map(country => <Country allCountry = {country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;