import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CityCard from '../components/CityCard'
import UseAnimations from 'react-useanimations'
import loading2 from 'react-useanimations/lib/loading2'
import * as services from "../services/get-api-info-services"
import MunicipalitiesSelector from '../components/MunicipalitiesSelector'

function ProvincDetailScreen() {
  let { codProv } = useParams()
  const [prov, setProv] = useState(null)

  useEffect(() => {
    services.getProvince(codProv)
      .then((data) => setProv(data?.data))
      .catch((error) => console.error(error))
  }, [codProv])

  console.log(prov?.provincia.CODPROV)

  if (!prov) {
    return (
        <div className='d-flex justify-content-center align-items-center pt-5 mt-5'>
          <UseAnimations animation={loading2} size={150} fillColor={"gray"} />
        </div>    
    )
  } else {
    return (
      <>
        <div className='fullscreen py-5'>
          <MunicipalitiesSelector />
          <h1 className='text-center mt-5 pt-5'>Municipios destacados de {prov?.provincia.NOMBRE_PROVINCIA}</h1>
          <div className='container d-flex flex-wrap gap-2 justify-content-center mx-auto my-5'>
            {prov?.ciudades.map((ciudad) => (
              <div key={ciudad.id}>
                <CityCard {...ciudad} codProv={codProv}/>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }

  
}

export default ProvincDetailScreen