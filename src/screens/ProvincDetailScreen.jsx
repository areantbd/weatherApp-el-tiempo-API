import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProvincDetailScreen() {
  let { codProv } = useParams()
  const [prov, setProv] = useState(null)

  useEffect(() => {
    axios.get(`https://www.el-tiempo.net/api/json/v2/provincias/${codProv}`)
      .then((data) => setProv(data))
      .catch((error) => console.error(error))
  }, [codProv])

  console.log(prov)

  return (
    <div>Municipios destacados de {prov?.data.provincia.NOMBRE_PROVINCIA}</div>
  )
}

export default ProvincDetailScreen