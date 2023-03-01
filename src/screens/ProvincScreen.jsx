import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProvincesLink from '../components/ProvincesLink'

function ProvincScreen() {
  const [provinces, setProvinces] = useState(null)

  useEffect(()=> {
    axios.get("https://www.el-tiempo.net/api/json/v2/provincias")
      .then((data) => setProvinces(data.data.provincias))
      .catch((error) => console.error(error))
  }, [])

  // console.log(provinces)

  return (
    <div className='container d-flex flex-wrap  justify-content-evenly gap-3 mt-5'>
      {provinces?.map((province) => (
        <ProvincesLink id={province?.CODPROV} name={province.NOMBRE_PROVINCIA} key={province?.CODPROV} />
      ))}
    </div>
  )
}

export default ProvincScreen