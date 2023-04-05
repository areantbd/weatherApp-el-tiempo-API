import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as services from "../services/get-api-info-services";

function MunicipalitiesSelector() {
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

  
  // console.log(codProv)
  return (
    <ul className="dropdown-menu">
    {test?.map((municipio) => (
      <li key={municipio[1]?.CODIGOINE.slice(0, 5)}><Link to={`/provincias/${codProv}/municipios/${municipio[1]?.CODIGOINE.slice(0, 5)}`} className="provinces-link text-decoration-none ms-3 me-n3">{municipio[1]?.NOMBRE}</Link></li>
    ))}
    </ul>
  )
}

export default MunicipalitiesSelector