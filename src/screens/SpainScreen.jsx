import moment from 'moment/moment'
import "moment/locale/es"
import React, { useEffect, useState } from 'react'
import CityCard from '../components/CityCard'
import UseAnimations from 'react-useanimations'
import loading2 from 'react-useanimations/lib/loading2'
import * as services from "../services/get-api-info-services"
import Navbar from '../components/Navbar'
// import ProvincesSelector from '../components/ProvincesSelector'


function SpainScreen() {
  const [data, setData] = useState(null)

  useEffect(() => {
    services.getInit()
      .then((data) => setData(data.data))
      .catch((error) => console.error(error))
  }, [])


  if (!data) {
    return (
        <div className='d-flex justify-content-center align-items-center'>
          <UseAnimations animation={loading2} size={150} fillColor={"gray"} />
        </div>    
    )
  } else {
    return (
      <>
      <Navbar />
      <div className='fullscreen container mt-2'>
        <h1 className='text-center py-4'>El tiempo en España <br/>{moment().format("LL")}</h1>
        {/* <ProvincesSelector className="mx-auto"/> */}
        <h1 className='text-center mt-5 pt-5'>Ciudades destacadas</h1>
        <div className='d-flex flex-wrap justify-content-center my-5 row'>
        {data?.ciudades.map((ciudad) => (
          <div key={ciudad?.id} className="col-5 col-lg-3 col-xl-2 my-1">
            <CityCard {...ciudad}/>
          </div>
          ))}
        </div>
        <h5 className='text-light text-center'>App creada usando el API de <a href='https://www.el-tiempo.net/api' target='_blank' rel="noreferrer">eltiempo.net</a></h5>
      </div>
      </>
    )
  }

  
}

export default SpainScreen