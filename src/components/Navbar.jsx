import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as services from "../services/get-api-info-services";
import icon from "../assets/images/icons8-parcialmente-nublado-lluvia.gif";
import icon2 from "../assets/images/icons8-tormenta.gif";

function Navbar() {
  const [munic, setMunic] = useState(null);
  const [search, setSearch] = useState("");
  const [provinces, setProvinces] = useState(null);


  useEffect(() => {
    services
      .getMunicipalities()
      .then((mun) =>
        setMunic(
          mun?.data.filter((nombre) =>
            nombre?.NOMBRE.toLowerCase().includes(search.toLowerCase())
          )
        )
      )
      .catch((error) => console.error(error));
    services
      .getProvincesNames()
      .then((data) => setProvinces(data.data.provincias))
      .catch((error) => console.error(error));
  }, [search]);

  const municNames = munic?.map((m) => m.NOMBRE)

  let index = municNames?.indexOf(search);

  return (
    <>
      <nav className="navbar bg-light fixed-top">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand ms-4">
            <img className="icon me-3" alt="name" src={icon} /> App del tiempo{" "}
            <img className="icon ms-3" alt="name icon" src={icon2} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Buscador
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Seleccionar provincia
                  </span>
                  <ul className="dropdown-menu">
                    {provinces?.map((province) => (
                      <li key={province?.CODPROV}>
                        <Link
                          to={`provincias/${province?.CODPROV}`}
                          className="provinces-link text-decoration-none"
                        >
                          {province?.NOMBRE_PROVINCIA}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input
                  list="municipios"
                  type="text"
                  value={search}
                  className="form-control me-2"
                  placeholder="Buscar por municipio"
                  onChange={(ev) => setSearch(ev.target.value)}
                />
                <datalist id="municipios">
                  {munic?.map((mun) => (
                    <option key={mun?.ID_REL} value={mun?.NOMBRE} />
                  ))}
                </datalist>
                {munic?.length !== 0 ? (
                  <Link
                    to={
                      munic &&
                      `/provincias/${
                        munic[index]?.CODPROV
                      }/municipios/${munic[index]?.CODIGOINE.slice(0, 5)}`
                    }
                    className="input-group-text ms-1"
                    style={{ backgroundColor: "white", border: "none" }}
                    onClick={() => setSearch("")}
                  >
                    <i className="fa fa-search"></i>
                  </Link>
                ) : (
                  <i className="fa fa-search"></i>
                )}
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
