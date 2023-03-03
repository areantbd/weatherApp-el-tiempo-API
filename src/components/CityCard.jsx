import React from 'react'

function CityCard({ name, stateSky, temperatures, codProv, idProvince, id }) {
  
  return (
    <div className='container weather-card'>
      <div className='border d-flex flex-column align-items-center justify-content-center bg-secondary py-3 mx-3 weather-card'>
        <h4 className='text-center text-light'>{name}</h4> 
        <h5 className='text-center text-light'>{stateSky.description}</h5> 
        <div className='d-flex gap-5'>
          <h5 className='text-center text-light'>T min: {temperatures.min}</h5>
          <h5 className='text-center text-light'>T max: {temperatures.max}</h5>
        </div>
        <h5 className='text-center text-light'>{codProv || idProvince}</h5>
        <h5 className='text-center text-light'>{id}</h5>
      </div>
    </div>
  )
}

export default CityCard