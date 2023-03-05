import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as services from "../services/get-api-info-services"

function MunicDetailScreen() {
  let { codProv, codMunic } = useParams()
  const [munic, setMunic] = useState(null)

  useEffect(() => {
    services.getMunicipalitie(codProv, codMunic)
      .then((data) => setMunic(data.data))
  }, [codMunic, codProv])

  console.log(codMunic)
  console.log(codProv)
  console.log(munic)

  return (
    <div>{munic?.lluvia}</div>
  )
}

export default MunicDetailScreen