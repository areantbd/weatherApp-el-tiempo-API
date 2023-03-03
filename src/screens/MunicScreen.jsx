import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function MunicScreen() {
  const {codProv} = useParams()
  const [municipios, setMunicipios] = useState(null)
  let test = null

  // console.log(codProv)
  useEffect(() => {
    axios.get(`https://www.el-tiempo.net/api/json/v2/provincias/${codProv}/municipios`)
      .then((data) => setMunicipios(data.data))
      .catch((error) => console.error(error))
  }, [codProv])

  if (municipios) {
    test = Object.entries(municipios?.municipios)
  }

  console.log("test", test)

  // console.log(municipios)

  return (
    <>
    {test?.map((municipio) => (
      <h3>{municipio[1]?.NOMBRE} {municipio[1]?.CODIGOINE.slice(0, 5)}</h3>
    ))}
    </>
  )
}

export default MunicScreen