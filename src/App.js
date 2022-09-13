import "./App.css";
import { useEffect, useState } from "react";

import Cronometer from "./Cronometer/Cronometer";

import FormDataCronometerAnt from "./FormDataCronometerAnt/FormDataCronometerAnt";

function App() {
 
  const [tamanioCronometro,setTamanioCronometro]=useState("")
  const [datosFormulario, setDatosFormulario] = useState();
  useEffect(() => {
    datosFormulario
      ? console.log("Si estan mostrando", datosFormulario)
      : console.log("No se esta mostrando nada");
  }, [datosFormulario]);
  return (
    <div className="container">
      <Cronometer datosFormulario={datosFormulario} tamanioCronometro={tamanioCronometro} />
      {/*    <FormDataCronometer setDatosFormulario={setDatosFormulario} setEnviarDatos={setEnviarDatos} /> */}
      <FormDataCronometerAnt setDatosFormulario={setDatosFormulario} setTamanioCronometro={setTamanioCronometro}/>
    </div>
  );
}

export default App;
