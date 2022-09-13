import Title from "antd/lib/skeleton/Title";
import React, { useEffect, useRef, useState } from "react";
import ButtonCronometer from "../ButtonCronometer/ButtonCronometer";
const granTamanio={
fontSize:"60px"
}

const tamanioMediano={
  fontSize:"40px"
}

const tamanioPequeño={
  fontSize:"20px"
}
function Cronometer(props) {
  const [segundos, setSegundos] = useState(0);

  const [minutos, setMinutos] = useState(0);
  const [milisegundos, setMilisegundos] = useState(0);

  const [activarContador, setActivarContador] = useState(false);
  const intervalRef = useRef();

  const cambiarEstadoContador = (event) => {
    let x = !activarContador;
    setActivarContador(x);

    if (x) {
      intervalRef.current = setInterval(() => {
        setMilisegundos((milisegundos) => milisegundos + 1);
      }, 10);
    } else if (!x) {
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




  useEffect(() => {
    if (props.datosFormulario) {
      setMilisegundos(Number(props.datosFormulario.milisegundos));
      setMinutos(Number(props.datosFormulario.minutos));
      setSegundos(Number(props.datosFormulario.segundos));
    }
  }, [props.datosFormulario]);



  return (
    <div className="App">
    
      <p 
      
      style={props.tamanioCronometro==="grande"?granTamanio:props.tamanioCronometro==="medinao"?tamanioMediano:tamanioPequeño}>
        {minutos < 10 ? "0" + minutos : minutos}:
        {segundos < 10 ? `0` + segundos : segundos}:
        {milisegundos < 10 ? `0` + milisegundos : milisegundos}
      </p>

 
      <ButtonCronometer
        activarContador={activarContador}
        cambiarEstadoContador={cambiarEstadoContador}
        resetearCronometro={resetearCronometro}
      />

      {activarContador.toString()}

   
    </div>
  );
}

export default Cronometer;
