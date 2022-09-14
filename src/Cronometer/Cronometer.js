import React, { useEffect, useRef, useState } from "react";
import ButtonCronometer from "../ButtonCronometer/ButtonCronometer";

function Cronometer(props) {
  
  const estilosCronometro = {
    fontSize:
      props.tamanioCronometro === "grande"
        ? "60px"
        : props.tamanioCronometro === "mediano"
        ? "40px"
        : "20px",

    display:"flex",
    justifyContent:"center",
    flexDirection:"row"
  };

  const [segundos, setSegundos] = useState(0);

  const [minutos, setMinutos] = useState(0);
  const [milisegundos, setMilisegundos] = useState(0);

  const [activarContador, setActivarContador] = useState(false);

  const [seccionMinutos, setSeccionMinutos] = useState("");
  const [seccionSegundos, setSeccionSegundos] = useState("");
  const [seccionMilisegundos, setSeccionMilisegundos] = useState("");

  const [seccionBotones, setSeccionBotones] = useState("");

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
    if (props.listaColores) {
      switch (props.listaColores.length) {
        case 1:
          setSeccionMinutos(props.listaColores[0]);
          setSeccionSegundos(props.listaColores[0]);
          setSeccionMilisegundos(props.listaColores[0]);
          setSeccionBotones(props.listaColores[0]);

          break;

        case 2:
          setSeccionMinutos(props.listaColores[0]);
          setSeccionSegundos(props.listaColores[1]);
          setSeccionMilisegundos(props.listaColores[0]);
          setSeccionBotones(props.listaColores[1]);
          break;
        case 3:
          setSeccionMinutos(props.listaColores[0]);
          setSeccionSegundos(props.listaColores[1]);
          setSeccionMilisegundos(props.listaColores[2]);
          setSeccionBotones(props.listaColores[1]);

          break;

        case 4:
          setSeccionMinutos(props.listaColores[0]);
          setSeccionSegundos(props.listaColores[1]);
          setSeccionMilisegundos(props.listaColores[2]);
          setSeccionBotones(props.listaColores[3]);
          break;
        default:
          setSeccionMinutos("black");
          setSeccionSegundos("black");
          setSeccionMilisegundos("black");
          setSeccionBotones("");

          break;
      }  
      
    }
    else{
      console.log("No se han cargado los colores")
    }
  }, [props.listaColores]);

  useEffect(() => {
    if (props.datosFormulario) {
      setMilisegundos(Number(props.datosFormulario.milisegundos));
      setMinutos(Number(props.datosFormulario.minutos));
      setSegundos(Number(props.datosFormulario.segundos));
    }
  }, [props.datosFormulario]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        aligItems: "center",
        margin: "auto",
      }}
    >
      <p
        style={
          estilosCronometro
        }
      >
        <span
          style={{
            color: seccionMinutos,
          }}
        >
          {minutos < 10 ? `0` + minutos : minutos}:
        </span>
        <span
          style={{
            color: seccionSegundos,
          }}
        >
          {segundos < 10 ? `0` + segundos : segundos}:
        </span>
        <span
          style={{
            color: seccionMilisegundos,
          }}
        >
          {milisegundos < 10 ? `0` + milisegundos : milisegundos}
        </span>
      </p>

      <ButtonCronometer
        tamanioCronometro={props.tamanioCronometro}
        seccionBotones={seccionBotones}
        activarContador={activarContador}
        cambiarEstadoContador={cambiarEstadoContador}
        resetearCronometro={resetearCronometro}
      />
    </div>
  );
}

export default Cronometer;
