import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CityCard from '../components/CityCard'

function SpainScreen() {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get("https://www.el-tiempo.net/api/json/v2/home")
      .then((data) => setData(data.data))
  }, [])

  console.log(data?.ciudades)
  return (
    <>
      <Link to={"/provincias"}>Provincias</Link>
      <div className='container d-flex flex-wrap gap-2 justify-content-center mx-auto my-5'>
      {data?.ciudades.map((ciudad) => (
        <div className="" key={ciudad?.id}>
          <CityCard {...ciudad}/>
        </div>
        ))}
      </div>
    </>
  )
}

export default SpainScreen