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
    <div className="d-block">
      <div className="dropdown-center d-flex justify-content-center">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="size 3">
          Seleccionar Municipio
        </button>
          <ul className="dropdown-menu">
          {test?.map((municipio) => (
            <li key={municipio[1]?.CODIGOINE.slice(0, 5)}><Link to={`/provincias/${codProv}/municipios/${municipio[1]?.CODIGOINE.slice(0, 5)}`} className="provinces-link text-decoration-none ms-3 me-n3">{municipio[1]?.NOMBRE}</Link></li>
          ))}
          </ul>
      </div>
    </div>
  )
}

export default MunicipalitiesSelector