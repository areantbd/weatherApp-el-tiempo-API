import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as services from "../services/get-api-info-services"
import UseAnimations from 'react-useanimations'
import loading2 from 'react-useanimations/lib/loading2'
import moment from 'moment/moment'
import "moment/locale/es"

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
        <h3 className='fw-bold'>{munic?.municipio.NOMBRE.toUpperCase()} {prov}</h3>
        <h1 className='fw-bold'>{moment().format("dddd").toUpperCase()}, {moment().format("D")} {moment().format("MMM").toUpperCase()} </h1>
        <h1>{munic?.temperatura_actual}º</h1>
        <h3>{munic?.stateSky.description}</h3>
        <h5>MAX: {munic?.temperaturas.max}ºC</h5>
        <h5>MIN: {munic?.temperaturas.min}ºC</h5>
        <h5>Humedad {munic?.humedad}%</h5>
        <h5>Viento {munic?.viento} km/h</h5>
        <h5>P. Lluvia {munic?.lluvia}%</h5>

        <h1>Mas info</h1>
        <h3>Población capital: {munic?.municipio.POBLACION_CAPITAL}</h3>
        <h3>Población municipio: {munic?.municipio.POBLACION_MUNI}</h3>
        <h3>Altitud SNDM: {munic?.municipio.ALTITUD} m.</h3>
        <h3>Perímetro total: {munic?.municipio.PERIMETRO} m.</h3>
        <h3>Superficie total: {munic?.municipio.SUPERFICIE} ha.</h3>
      {munic?.keywords}</div>
    )
  }

  
}

export default MunicDetailScreen