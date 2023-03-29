import moment from 'moment/moment'
import "moment/locale/es"
import React, { useEffect, useState } from 'react'
import CityCard from '../components/CityCard'
import UseAnimations from 'react-useanimations'
import loading2 from 'react-useanimations/lib/loading2'
import * as services from "../services/get-api-info-services"
import ProvincesSelector from '../components/ProvincesSelector'
import { Link } from 'react-router-dom'

function SpainScreen() {
  const [data, setData] = useState(null)
  const [munic, setMunic] = useState(null)
  const [search, setSearch] = useState("")
  // console.log(services.getInit())

  useEffect(() => {
    services.getInit()
      .then((data) => setData(data.data))
      .catch((error) => console.error(error))
    services.getMunicipalities()
      .then((mun) => setMunic(mun?.data.filter((nombre) => nombre?.NOMBRE.toLowerCase().includes(search.toLowerCase()))))
      .catch((error) => console.error(error))
  }, [search])

  // console.log(data?.ciudades)
  console.log("munic", munic)

  if (!data) {
    return (
        <div className='d-flex justify-content-center align-items-center'>
          <UseAnimations animation={loading2} size={150} fillColor={"gray"} />
        </div>    
    )
  } else {
    return (
      <div className='fullscreen container'>
        <h1 className='text-center py-4'>El tiempo en España <br/>{moment().format("LL")}</h1>
        <div className="input-group justify-content-center my-3">
          <div className="form-outline">
            <input
              type="text"
              value={search}
              className="form-control me-2"
              placeholder="Buscar por municipio"
              onChange={(ev) => setSearch(ev.target.value)}
            />
          </div>
          <Link
            to={munic && `/provincias/${munic[0]?.CODPROV}/municipios/${munic[0]?.CODIGOINE.slice(0, 5)}`}
            className="input-group-text ms-1"
            style={{ backgroundColor: "white", border: "none" }}
          >
            <i className="fa fa-search"></i>
          </Link>
        </div>
        <ProvincesSelector className="mx-auto"/>
        <h1 className='text-center mt-5 pt-5'>Ciudades destacadas</h1>
        <div className='d-flex flex-wrap justify-content-center my-5 row'>
        {data?.ciudades.map((ciudad) => (
          <div key={ciudad?.id} className="col-5 col-lg-3 col-xl-2 my-1">
            <CityCard {...ciudad}/>
          </div>
          ))}
        </div>
      </div>
    )
  }

  
}

export default SpainScreen