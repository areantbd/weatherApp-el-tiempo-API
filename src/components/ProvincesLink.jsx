import React from 'react'
import { Link } from 'react-router-dom'

function ProvincesLink({ id, name }) {

  // console.log(id)
  return (
    <div>
      <Link to={`/provincias/${id}`} className="btn btn-sm btn-secondary shadow px-3  py-1 text-light">{name}</Link>
    </div>
  )
}

export default ProvincesLink