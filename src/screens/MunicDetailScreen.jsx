import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as services from "../services/get-api-info-services";
import UseAnimations from "react-useanimations";
import loading2 from "react-useanimations/lib/loading2";
import moment from "moment/moment";
import "moment/locale/es";
import Map from "../components/Map";
import Navbar from "../components/NavbarMun";

function MunicDetailScreen() {
  let { codProv, codMunic } = useParams();
  const [munic, setMunic] = useState(null);
  const [fav, setFav] = useState(false);
  const center = {
    lat: munic?.municipio.LATITUD_ETRS89_REGCAN95,
    lng: munic?.municipio.LONGITUD_ETRS89_REGCAN95,
  };
  let image =
    `https://loremflickr.com/480/640/city,${munic?.municipio.NOMBRE.replace(
      /\s/g,
      ""
    )}` || `https://loremflickr.com/640/480/city`;
  let lluvia = munic?.lluvia || 0;
  let provCod = localStorage.getItem("prov");
  let mun = localStorage.getItem("mun");

  useEffect(() => {
    if (mun === codMunic && provCod === codProv) {
      setFav(true);
    }
  }, [codMunic, codProv, mun, provCod]);

  function average(array) {
    const numArray = array.map((number) => Number(number));
    let sum = numArray.reduce((previous, current) => (current += previous));
    let avg = sum / numArray.length;
    return avg.toFixed(0);
  }

  function setFavorite() {
    if (!fav) {
      localStorage.setItem("prov", codProv);
      localStorage.setItem("mun", codMunic);
      window.location.reload();
    } else {
      localStorage.clear();
      window.location.reload();
    }
  }

  useEffect(() => {
    services
      .getMunicipalitie(codProv, codMunic)
      .then((data) => setMunic(data.data));
  }, [codMunic, codProv]);

  let prov = "";

  if (munic?.municipio.NOMBRE !== munic?.municipio.NOMBRE_PROVINCIA) {
    prov = `(${munic?.municipio.NOMBRE_PROVINCIA.toUpperCase()})`;
  } else {
    prov = "";
  }

  if (!munic) {
    return (
      <div className="d-flex justify-content-center align-items-center pt-5 mt-5">
        <UseAnimations animation={loading2} size={150} fillColor={"gray"} />
      </div>
    );
  } else {
    return (
      <>
        <Navbar />
        <div
          className="fullscreen pt-5 container"
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="detail-card py-3 mb-5">
            {fav ? (
              <i
                className={`fa fa-heart text-danger fa-lg fav-button`}
                onClick={() => setFavorite()}
              ></i>
            ) : (
              <i
                className={`fa fa-heart fa-lg fav-button`}
                onClick={() => setFavorite()}
              ></i>
            )}
            <h3 className="fw-bold data-text">
              {munic?.municipio.NOMBRE.toUpperCase()} {prov}
            </h3>
            <h1 className="fw-bold data-text">
              {moment().format("dddd").toUpperCase()}, {moment().format("D")}{" "}
              {moment().format("MMM").toUpperCase()}{" "}
            </h1>
            <h1 className="data-text">{munic?.temperatura_actual}º</h1>
            <h3 className="data-text">{munic?.stateSky.description}</h3>
            <div className="d-flex gap-3">
              <h5 className="data-text">MAX: {munic?.temperaturas.max}ºC</h5>
              <h5 className="data-text">MIN: {munic?.temperaturas.min}ºC</h5>
            </div>
            <div className="cards gap-2 pb-3 mt-3">
              <div className="data-card">
                <h5 className="text-center data-text">Humedad</h5>
                <h5 className="text-center data-text">{munic?.humedad}%</h5>
              </div>
              <div className="data-card">
                <h5 className="text-center data-text">Viento</h5>
                <h5 className="text-center data-text">{munic?.viento} km/h</h5>
              </div>
              <div className="data-card">
                <h5 className="text-center data-text">P. Lluvia</h5>
                <h5 className="text-center data-text">{lluvia}%</h5>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column gap-3 justify-content-around">
            <div className="detail-card py-3 data-text">
              <h3 className="text-decoration-underline">MAÑANA</h3>
              <div className="d-flex flex-wrap gap-3 align-items-center justify-content-center">
                <div className=" d-flex gap-2 text-center">
                  <div className="data-card">
                    <h2>Temp. Max</h2>
                    <h2>
                      {munic?.pronostico.manana.temperatura.reduce((a, b) =>
                        Math.max(a, b)
                      )}
                      º
                    </h2>
                  </div>
                  <hr />
                  <div className="data-card">
                    <h2>Temp. Min</h2>
                    <h2>
                      {munic?.pronostico.manana.temperatura.reduce((a, b) =>
                        Math.min(a, b)
                      )}
                      º
                    </h2>
                  </div>
                </div>
                <div className="data-card text-center">
                  <h2>Lluvia</h2>
                  <h2>
                    {average(munic?.pronostico.manana.prob_precipitacion)}%
                  </h2>
                </div>
                <div className="data-card text-center">
                  <h2>Humedad</h2>
                  <h2>{average(munic?.pronostico.manana.humedad_relativa)}%</h2>
                </div>
              </div>
            </div>
            <Map center={center} zoom={11} className="border" />
          </div>

          <div className="detail-card py-3 mt-5 data-text">
            <h1>Mas info</h1>
            <h3>Población capital: {munic?.municipio.POBLACION_CAPITAL}</h3>
            <h3>Población municipio: {munic?.municipio.POBLACION_MUNI}</h3>
            <h3>Altitud SNDM: {munic?.municipio.ALTITUD} m.</h3>
            <h3>Perímetro total: {munic?.municipio.PERIMETRO} m.</h3>
            <h3>
              Superficie total: {munic?.municipio.SUPERFICIE.toFixed(2)} ha.
            </h3>
          </div>
        </div>
      </>
    );
  }
}

export default MunicDetailScreen;
