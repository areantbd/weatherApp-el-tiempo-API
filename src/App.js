import { Route, Routes } from "react-router-dom";
import ProvincDetailScreen from "./screens/ProvincDetailScreen";
import ProvincScreen from "./screens/ProvincScreen";
import SpainScreen from "./screens/SpainScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SpainScreen />}/>
        <Route path="/provincias" element={<ProvincScreen />}/>
        <Route path="/provincias/:codProv" element={<ProvincDetailScreen />}/>
      </Routes>
    </>
  );
}

export default App;
