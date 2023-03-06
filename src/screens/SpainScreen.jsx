import moment from 'moment/moment'
import "moment/locale/es"
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CityCard from '../components/CityCard'
import UseAnimations from 'react-useanimations'
import loading2 from 'react-useanimations/lib/loading2'
import * as services from "../services/get-api-info-services"

function SpainScreen() {
  const [data, setData] = useState(null)
  console.log(services.getInit())

  useEffect(() => {
    services.getInit()
      .then((data) => setData(data.data))
      .catch((error) => console.error(error))
  }, [])

  console.log(data?.ciudades)

  if (!data) {
    return (
        <div className='d-flex justify-content-center align-items-center'>
          <UseAnimations animation={loading2} size={150} fillColor={"gray"} />
        </div>    
    )
  } else {
    return (
      <div className='fullscreen'>
        <h1 className='text-center my-4'>El tiempo en España {moment().format("LL")}</h1>
        <Link to={"/provincias"}>Provincias</Link>
        <h1 className='text-center mt-3'>Ciudades destacadas</h1>
        <div className=' d-flex flex-wrap gap-2 justify-content-center my-5'>
        {data?.ciudades.map((ciudad) => (
          <div key={ciudad?.id}>
            <CityCard {...ciudad}/>
          </div>
          ))}
        </div>
      </div>
    )
  }

  
}

export default SpainScreen