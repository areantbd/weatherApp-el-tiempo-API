import axios from 'axios'
import React, { useEffect, useState } from 'react'

function SpainScreen() {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get("https://www.el-tiempo.net/api/json/v2/home")
      .then((data) => setData(data.data))
  }, [])

  console.log(data?.ciudades)
  return (
    <div>
      <h1>{data?.ciudades[0].name}</h1>
    </div>
  )
}

export default SpainScreen