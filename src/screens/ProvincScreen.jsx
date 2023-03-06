import React, { useEffect, useState } from 'react'
import ProvincesLink from '../components/ProvincesLink'
import UseAnimations from 'react-useanimations'
import loading2 from 'react-useanimations/lib/loading2'
import * as services from "../services/get-api-info-services"

function ProvincScreen() {
  const [provinces, setProvinces] = useState(null)

  useEffect(()=> {
    services.getProvincesNames()
      .then((data) => setProvinces(data.data.provincias))
      .catch((error) => console.error(error))
  }, [])

  console.log(provinces)

  if (!provinces) {
    return (
        <div className='d-flex justify-content-center align-items-center'>
          <UseAnimations animation={loading2} size={150} fillColor={"gray"} />
        </div>    
    )
  } else {
    return (
      <div className='fullscreen container d-flex flex-wrap  justify-content-center gap-3 mt-5'>
        {provinces?.map((province) => (
          <ProvincesLink id={province?.CODPROV} name={province.NOMBRE_PROVINCIA} key={province?.CODPROV} />
        ))}
      </div>
    )
  }

  
}

export default ProvincScreen