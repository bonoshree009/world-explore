import React, { use } from 'react';
import Country from './Country/country';

const Countries = ({countriespromise}) => {

    const countriesData = use(countriespromise)
    const countries = countriesData.countries

    return (
        <div>
           <h1>in the countries :{countries.length}</h1> 
           {
            countries.map(country => <Country key ={country.cca3.cca3}country={country}></Country>)
           }
        </div>
    );
};

export default Countries;