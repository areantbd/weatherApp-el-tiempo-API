import React from 'react'
import { Link } from 'react-router-dom'

function ProvincesLink({ id, name }) {

  // console.log(id)
  return (
    <div>
      <Link to={`/provincias/${id}`} className="bg-secondary px-4 py-3 text-light">{name}</Link>
    </div>
  )
}

export default ProvincesLink