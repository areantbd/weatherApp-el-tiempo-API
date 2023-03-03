import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CityCard from '../components/CityCard'

function ProvincDetailScreen() {
  let { codProv } = useParams()
  const [prov, setProv] = useState(null)

  useEffect(() => {
    axios.get(`https://www.el-tiempo.net/api/json/v2/provincias/${codProv}`)
      .then((data) => setProv(data?.data))
      .catch((error) => console.error(error))
  }, [codProv])

  console.log(prov?.provincia.CODPROV)

  return (
    <>
      <div className=' my-5'>
        <Link to={`/provincias/${codProv}/municipios`}>Todos los municipios</Link>
        <h1 className='text-center'>Municipios destacados de {prov?.provincia.NOMBRE_PROVINCIA}</h1>
        <div className='container d-flex flex-wrap gap-2 justify-content-center mx-auto'>
          {prov?.ciudades.map((ciudad) => (
            <div key={ciudad.id}>
              <CityCard {...ciudad} codProv={codProv}/>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProvincDetailScreen