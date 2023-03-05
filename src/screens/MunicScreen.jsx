import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MunicipalitiesLink from '../components/MunicipalitiesLink'
import * as services from "../services/get-api-info-services"

function MunicScreen() {
  const {codProv} = useParams()
  const [municipios, setMunicipios] = useState(null)
  let test = null

  useEffect(() => {
    services.getMunicipalitiesNames(codProv)
      .then((data) => setMunicipios(data.data))
      .catch((error) => console.error(error))
  }, [codProv])

  if (municipios) {
    test = Object.entries(municipios?.municipios)
  }

  console.log("test", test)

  // console.log(municipios)

  return (
    <div className='container d-flex flex-wrap  justify-content-evenly gap-3 mt-5'>
    {test?.map((municipio) => (
        <MunicipalitiesLink provId={codProv} munId={municipio[1]?.CODIGOINE.slice(0, 5)} name={municipio[1]?.NOMBRE} />
    ))}
    </div>
  )
}

export default MunicScreen