import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as services from "../services/get-api-info-services"
import UseAnimations from 'react-useanimations'
import loading2 from 'react-useanimations/lib/loading2'
import moment from 'moment/moment'
import "moment/locale/es"
import Map from '../components/Map'

function MunicDetailScreen() {
  let { codProv, codMunic } = useParams()
  const [munic, setMunic] = useState(null)
  const center = {lat: munic?.municipio.LATITUD_ETRS89_REGCAN95, lng: munic?.municipio.LONGITUD_ETRS89_REGCAN95}
  

  useEffect(() => {
    services.getMunicipalitie(codProv, codMunic)
      .then((data) => setMunic(data.data))
  }, [codMunic, codProv])

  console.log(codMunic)
  console.log(codProv)
  console.log(munic)
  let prov = ""

  if (munic?.municipio.NOMBRE !== munic?.municipio.NOMBRE_PROVINCIA) {
    prov = `(${munic?.municipio.NOMBRE_PROVINCIA.toUpperCase()})`
  } else {
    prov = ""
  }

  if (!munic) {
    return (
        <div className='d-flex justify-content-center align-items-center pt-5 mt-5'>
          <UseAnimations animation={loading2} size={150} fillColor={"gray"} />
        </div>    
    )
  } else {
    return (
      <div className='fullscreen pt-5 container'>
        <div className='detail-card py-3 mb-5'>
          <h3 className='fw-bold data-text'>{munic?.municipio.NOMBRE.toUpperCase()} {prov}</h3>
          <h1 className='fw-bold data-text'>{moment().format("dddd").toUpperCase()}, {moment().format("D")} {moment().format("MMM").toUpperCase()} </h1>
          <h1 className='data-text'>{munic?.temperatura_actual}º</h1>
          <h3 className='data-text'>{munic?.stateSky.description}</h3>
          <div className='d-flex gap-3'>
            <h5 className='data-text'>MAX: {munic?.temperaturas.max}ºC</h5>
            <h5 className='data-text'>MIN: {munic?.temperaturas.min}ºC</h5>
          </div>
          <div className='cards gap-2 pb-3 mt-3'>            
            <div className='data-card'>
              <h5 className='text-center data-text'>Humedad</h5>
              <h5 className='text-center data-text'>{munic?.humedad}%</h5>
            </div>
            <div className='data-card'>
              <h5 className='text-center data-text'>Viento</h5>
              <h5 className='text-center data-text'>{munic?.viento} km/h</h5>
            </div>
            <div className='data-card'>
              <h5 className='text-center data-text'>P. Lluvia</h5>
              <h5 className='text-center data-text'>{munic?.lluvia}%</h5>
            </div>
          </div>
        </div>

        <Map center={center} zoom={11}/>

        <h1>Mas info</h1>
        <h3>Población capital: {munic?.municipio.POBLACION_CAPITAL}</h3>
        <h3>Población municipio: {munic?.municipio.POBLACION_MUNI}</h3>
        <h3>Altitud SNDM: {munic?.municipio.ALTITUD} m.</h3>
        <h3>Perímetro total: {munic?.municipio.PERIMETRO} m.</h3>
        <h3>Superficie total: {munic?.municipio.SUPERFICIE.toFixed(2)} ha.</h3>
      {munic?.keywords}</div>
    )
  }

  
}

export default MunicDetailScreen