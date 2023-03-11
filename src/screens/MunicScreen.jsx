import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UseAnimations from 'react-useanimations'
import loading2 from 'react-useanimations/lib/loading2'
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

  if (!municipios) {
    return (
        <div className='d-flex justify-content-center align-items-center'>
          <UseAnimations animation={loading2} size={150} fillColor={"gray"} />
        </div>    
    )
  } else {
    return (
      <div className='fullscreen container d-flex flex-wrap justify-content-center gap-3 pt-5'>
        {test?.map((municipio) => (
          <MunicipalitiesLink provId={codProv} munId={municipio[1]?.CODIGOINE.slice(0, 5)} name={municipio[1]?.NOMBRE} key={municipio[1]?.NOMBRE} />
        ))}
      </div>
    )
  }
}

export default MunicScreen