import React, { use } from 'react';
import Country from './Country/country';
import './countries.css'

const Countries = ({countriespromise}) => {

    const countriesData = use(countriespromise)
    const countries = countriesData.countries

    return (
        <>
         <h1>in the countries :{countries.length}</h1>
        <div className='grid'>
           {
            countries.map(country => <Country key ={country.cca3.cca3}country={country}></Country>)
           }
        </div>
        </>
    );
};

export default Countries;