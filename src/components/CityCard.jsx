import React from 'react'
import { Link } from 'react-router-dom'

function CityCard({ name, stateSky, temperatures, codProv, idProvince, id }) {
   console.log(stateSky)
  return (
    <Link to={`/provincias/${idProvince}/municipios/${id}`} className="text-decoration-none" >
      <div className=' weather-card'>
        <div className='border d-flex flex-column align-items-center justify-content-center bg-secondary   weather-card'>
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
    </Link>
  )
}

export default CityCard