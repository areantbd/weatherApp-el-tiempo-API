import React from 'react'
import { Link } from 'react-router-dom'

function CityCard({ name, stateSky, temperatures, idProvince, id }) {
  return (
    <Link to={`/provincias/${idProvince}/municipios/${id}`} className="text-decoration-none" >
      <div className=' weather-card'>
        <div className='card-text border d-flex flex-column align-items-center justify-content-center bg-secondary p-2'>
          <h4 className='text-center patata d-inline-block text-truncate' style={{maxWidth: "120px"}}>{name}</h4> 
          <h5 className='text-center patata d-inline-block text-truncate' style={{maxWidth: "120px"}}>{stateSky.description}</h5> 
          <div className='row'>
            <h5 className='col-5 text-center'>Min: {temperatures?.min}</h5>
            <h5 className='col-5 text-center'>Max: {temperatures?.max}</h5>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CityCard