import { Route, Routes } from "react-router-dom";
import MunicDetailScreen from "./screens/MunicDetailScreen";
import MunicScreen from "./screens/MunicScreen";
import ProvincDetailScreen from "./screens/ProvincDetailScreen";
import ProvincScreen from "./screens/ProvincScreen";
import SpainScreen from "./screens/SpainScreen";

function App() {
  return (
    <div className="page-bg">
      <Routes>
        <Route path="/" element={<SpainScreen />}/>
        <Route path="/provincias" element={<ProvincScreen />}/>
        <Route path="/provincias/:codProv" element={<ProvincDetailScreen />}/>
        <Route path="/provincias/:codProv/municipios" element={<MunicScreen />}/>
        <Route path="/provincias/:codProv/municipios/:codMunic" element={<MunicDetailScreen />}/>
      </Routes>
    </div>
  );
}

export default App;
