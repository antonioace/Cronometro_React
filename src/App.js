import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [segundos, setSegundos] = useState(0);

  const [minutos, setMinutos] = useState(0);
  const [milisegundos, setMilisegundos] = useState(0);

  const [activarContador, setActivarContador] = useState(false);
  const intervalRef = useRef();

  const cambiarEstadoContador = () => {
    let x = !activarContador;
     setActivarContador(x); 

    /*    x === true
      ? (intervalRef.current = setInterval(() => {
          setSegundos((segundos) => segundos + 1);
 }, 1000))
      : clearInterval(intervalRef.current);  */

    if (x === true) {
      intervalRef.current = setInterval(() => {
        setMilisegundos((milisegundos) => milisegundos + 1);
      }, 10);
    } else if (x === false) {
      clearInterval(intervalRef.current);
    }
  };

  const resetearCronometro = () => {
    clearInterval(intervalRef.current);
    setMilisegundos(0);
    setMinutos(0);
    setSegundos(0);
    setActivarContador(false);
  };

  useEffect(() => {
   


    if (milisegundos > 99) {
      setMilisegundos(0);
      setSegundos((segundos) => segundos + 1);
    }
    if (segundos > 59) {
      setSegundos(0);
      setMinutos((minutos) => minutos + 1);
    }
  }, [milisegundos, segundos]);

  return (
    <div className="App">
      <p className="fs-3">
        {minutos < 10 ? "0" + minutos : minutos}:
        {segundos < 10 ? `0` + segundos : segundos}:
        {milisegundos < 10 ? `0` + milisegundos : milisegundos}
      </p>
      <button
        className={!activarContador ? "btn btn-primary" : "btn btn-danger"}
        onClick={cambiarEstadoContador}
      >
        {!activarContador ? "Iniciar" : "Pausar"}
      </button>
      <button className="btn btn-success mx-3" onClick={resetearCronometro}>
        Reiniciar
      </button>

      {activarContador.toString()}
    </div>
  );
}

export default App;
