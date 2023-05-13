import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as services from "../services/get-api-info-services";

function ProvincesSelector() {
  const [provinces, setProvinces] = useState(null);

  useEffect(() => {
    services
      .getProvincesNames()
      .then((data) => setProvinces(data.data.provincias))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="d-block">
      <div className="dropdown-center d-flex justify-content-center">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="size 3">
          Seleccionar provincia
        </button>
        <ul className="dropdown-menu">
        {provinces?.map((province) => (
          <li key={province?.CODPROV}><Link to={`provincias/${province?.CODPROV}`} className="provinces-link text-decoration-none">{province?.NOMBRE_PROVINCIA}</Link></li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default ProvincesSelector;
