import "./App.css";
import { useEffect, useState } from "react";

import Cronometer from "./Cronometer/Cronometer";

import FormDataCronometerAnt from "./FormDataCronometerAnt/FormDataCronometerAnt";

function App() {
  const [listaColores, setListaColores] = useState([]);
  const [tamanioCronometro, setTamanioCronometro] = useState("");
  const [datosFormulario, setDatosFormulario] = useState();

  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      aligItems:"center",
      margin:"8em"
    }}>
      <Cronometer
        datosFormulario={datosFormulario}
        tamanioCronometro={tamanioCronometro}
        listaColores={listaColores}
      />

      <FormDataCronometerAnt
        setDatosFormulario={setDatosFormulario}
        setTamanioCronometro={setTamanioCronometro}
        setListaColores={setListaColores}
      />
    </div>
  );
}

export default App;
