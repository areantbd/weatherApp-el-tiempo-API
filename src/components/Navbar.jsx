import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as services from "../services/get-api-info-services"

function Navbar() {
  const [munic, setMunic] = useState(null)
  const [search, setSearch] = useState("")

  useEffect(() => {
    services.getMunicipalities()
      .then((mun) => setMunic(mun?.data.filter((nombre) => nombre?.NOMBRE.toLowerCase().includes(search.toLowerCase()))))
      .catch((error) => console.error(error))
  }, [search])
  
  console.log("munic", munic)

  return (
    <>
      {/* <nav className="navbar bg-light">
        <div className="container-fluid d-flex flex-row flex-nowrap">
          <Link to={"/"} className="navbar-brand">app del tiempo</Link>
          <form className="d-flex" role="search">
            <input
                type="text"
                value={search}
                className="form-control me-2"
                placeholder="Buscar por municipio"
                onChange={(ev) => setSearch(ev.target.value)}
              />
              {munic?.length === 1 ? (
                <Link
                  to={munic && `/provincias/${munic[0]?.CODPROV}/municipios/${munic[0]?.CODIGOINE.slice(0, 5)}`}
                  className="input-group-text ms-1"
                  style={{ backgroundColor: "white", border: "none" }}
                  >
                  <i className="fa fa-search"></i>
                  </Link>
                ) : (
                  <Link
                    to={munic && `/provincias/${munic[0]?.CODPROV}/municipios/${munic[0]?.CODIGOINE.slice(0, 5)}`}
                    className="input-group-text ms-1 text-danger"
                    style={{ backgroundColor: "white", border: "none" }}
                  >
                    <i className="fa fa-search"></i>
                  </Link>
                )}
          </form>
        </div>
      </nav> */}
      <nav class="navbar navbar-expand-lg bg-light align-items-center">
        <div class="container-fluid ">
        <Link to={"/"} className="navbar-brand">app del tiempo</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" >              
              <li class="nav-item dropdown">
                <span class="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Seleccionar provincia
                </span>
                <ul class="dropdown-menu">
                  <li>Action</li>
                  <li>Another action</li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>Something else here</li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
            <input
                type="text"
                value={search}
                className="form-control me-2"
                placeholder="Buscar por municipio"
                onChange={(ev) => setSearch(ev.target.value)}
              />
              {munic?.length === 1 ? (
                <Link
                  to={munic && `/provincias/${munic[0]?.CODPROV}/municipios/${munic[0]?.CODIGOINE.slice(0, 5)}`}
                  className="input-group-text ms-1"
                  style={{ backgroundColor: "white", border: "none" }}
                  >
                  <i className="fa fa-search"></i>
                  </Link>
                ) : (
                  <Link
                    to={munic && `/provincias/${munic[0]?.CODPROV}/municipios/${munic[0]?.CODIGOINE.slice(0, 5)}`}
                    className="input-group-text ms-1 text-danger"
                    style={{ backgroundColor: "white", border: "none" }}
                  >
                    <i className="fa fa-search"></i>
                  </Link>
                )}
          </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar