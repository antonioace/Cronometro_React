import { Button } from "antd";
import React from "react";

function ButtonCronometer(props) {
  return (
    <div style={{
      display:"flex",
      flexDirection:"row",
      marginTop:"0px",
      justifyContent:"space-between"
    }}>
      <Button
    
        size={
          props.tamanioCronometro === "grande"
            ? "large"
            : props.tamanioCronometro === "mediano"
            ? "middle"
            : "small"
        }
        style={{
          backgroundColor: props.seccionBotones,
        }}
        onClick={props.cambiarEstadoContador}
      >
        {!props.activarContador ? "Iniciar" : "Pausar"}
      </Button>

      <Button
       size={
        props.tamanioCronometro === "grande"
          ? "large"
          : props.tamanioCronometro === "mediano"
          ? "middle"
          : "small"
      }
        style={{
          backgroundColor: props.seccionBotones,
        }}
        onClick={props.resetearCronometro}
      >
        Reiniciar
      </Button>
    </div>
  );
}

export default ButtonCronometer;
