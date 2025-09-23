import React from 'react';
import './country.css'

const Country = ({country}) => {
    console.log(country)
    
    return (
        <div className='cart'>
            <img src={country.flags.flags.png} alt="" />
            <h3>name:{country.name.common} </h3>
            <h2>capital:{country.capital.capital}</h2>
            <h2> Area:{country.area.area}</h2>
            <h2> {country.area.area > 10000 ? "big country": "small country"}</h2>
            <button onClick={"visited"}>Not Visited</button>

        </div>
    );
};

export default Country;