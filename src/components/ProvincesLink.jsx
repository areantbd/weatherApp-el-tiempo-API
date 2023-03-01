import React from 'react'
import { Link } from 'react-router-dom'

function ProvincesLink({ id, name }) {

  // console.log(id)
  return (
    <div>
      <Link to={`/provincias/${id}`} key={id} className="bg-secondary px-4 py-1 text-light">{name}</Link>
    </div>
  )
}

export default ProvincesLink