import React from 'react';

const Country = ({country}) => {
    console.log(country)
    return (
        <div className='cart'>
            <h3>name:{country.name.common} </h3>
            <h2>capital:{country.capital.capital}</h2>
            <img src={country.flags.flags.png} alt="" />
          
        </div>
    );
};

export default Country;