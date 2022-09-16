import "./App.css";

import "./index.css"
import { useEffect, useState } from "react";

import Cronometer from "./Cronometer/Cronometer";

import FormDataCronometerAnt from "./FormDataCronometerAnt/FormDataCronometerAnt";
import FormDataCronometerReactHooks from "./FormDataCronometerReactHooks/FormDataCronometerReactHooks";
import FormCronometerDataAntReactHooks from "./FormCronometerDataAntReactHooks/FormCronometerDataAntReactHooks";

function App() {
  const [listaColores, setListaColores] = useState([]);
  const [tamanioCronometro, setTamanioCronometro] = useState("");
  const [datosFormulario, setDatosFormulario] = useState();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        aligItems: "center",
        margin: "8em",
      }}
    >
      <Cronometer
        datosFormulario={datosFormulario}
        tamanioCronometro={tamanioCronometro}
        listaColores={listaColores}
      />

      {/*  <FormDataCronometerAnt
        setDatosFormulario={setDatosFormulario}
        setTamanioCronometro={setTamanioCronometro}
        setListaColores={setListaColores}
      /> */}

      {/*  <FormDataCronometerReactHooks
       setDatosFormulario={setDatosFormulario}
       setTamanioCronometro={setTamanioCronometro}
       setListaColores={setListaColores}
       listaColores={listaColores}
      /> */}

      <FormCronometerDataAntReactHooks
        setDatosFormulario={setDatosFormulario}
        setTamanioCronometro={setTamanioCronometro}
        setListaColores={setListaColores}
        listaColores={listaColores}
      />
    </div>
  );
}

export default App;
