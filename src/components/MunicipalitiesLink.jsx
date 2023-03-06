import React from 'react'
import { Link } from 'react-router-dom'

function MunicipalitiesLink({provId, munId, name}) {
  return (
    <div>
      <Link to={`/provincias/${provId}/municipios/${munId}`} className="btn btn-sm btn-secondary px-4 py-2 text-light">
        <div>
          {name}
        </div>
      </Link>
    </div>
  )
}

export default MunicipalitiesLink