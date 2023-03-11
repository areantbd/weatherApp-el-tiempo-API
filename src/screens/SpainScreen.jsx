import moment from 'moment/moment'
import "moment/locale/es"
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CityCard from '../components/CityCard'
import UseAnimations from 'react-useanimations'
import loading2 from 'react-useanimations/lib/loading2'
import * as services from "../services/get-api-info-services"
import ProvincesSelector from '../components/ProvincesSelector'

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
      <div className='fullscreen container'>
        <h1 className='text-center py-4'>El tiempo en España <br/>{moment().format("LL")}</h1>
        <ProvincesSelector className="mx-auto"/>
        <h1 className='text-center mt-5 pt-5'>Ciudades destacadas</h1>
        <div className='d-flex flex-wrap justify-content-center my-5 row'>
        {data?.ciudades.map((ciudad) => (
          <div key={ciudad?.id} className="col-5 col-lg-3 col-xl-2 my-1">
            <CityCard {...ciudad}/>
          </div>
          ))}
        </div>
      </div>
    )
  }

  
}

export default SpainScreen