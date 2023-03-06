import React from 'react'
import { Link } from 'react-router-dom'

function MunicipalitiesLink({provId, munId, name}) {
  return (
    <div>
      <Link to={`/provincias/${provId}/municipios/${munId}`} className="bg-secondary px-4 py-2 text-light">{name}</Link>
    </div>
  )
}

export default MunicipalitiesLink