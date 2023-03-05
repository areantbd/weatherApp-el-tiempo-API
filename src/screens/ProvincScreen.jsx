import React, { useEffect, useState } from 'react'
import ProvincesLink from '../components/ProvincesLink'
import * as services from "../services/get-api-info-services"

function ProvincScreen() {
  const [provinces, setProvinces] = useState(null)

  useEffect(()=> {
    services.getProvincesNames()
      .then((data) => setProvinces(data.data.provincias))
      .catch((error) => console.error(error))
  }, [])

  console.log(provinces)

  return (
    <div className='container d-flex flex-wrap  justify-content-evenly gap-3 mt-5'>
      {provinces?.map((province) => (
        <ProvincesLink id={province?.CODPROV} name={province.NOMBRE_PROVINCIA} key={province?.CODPROV} />
      ))}
    </div>
  )
}

export default ProvincScreen