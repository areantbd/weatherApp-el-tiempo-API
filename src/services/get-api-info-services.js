import axios from "axios";

const http = axios.create({
  baseURL: "https://www.el-tiempo.net/api/json/v2"
})


export function getInit() {
  return http.get("/home")
}

export function getProvincesNames() {
  return http.get("/provincias")
}

export function getProvince(codProv) {
  return http.get(`/provincias/${codProv}`)
}
export function getMunicipalitiesNames(codProv) {
  return http.get(`/provincias/${codProv}/municipios`)
}

export function getMunicipalities() {
  return http.get(`/municipios`)
}


export function getMunicipalitie(codProv, codMunic) {
  return http.get(`/provincias/${codProv}/municipios/${codMunic}`)
}