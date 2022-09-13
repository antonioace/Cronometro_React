import { Button } from "antd";
import React from "react";

function ButtonCronometer(props) {
  return (
    <div>
   <Button 
   type={!props.activarContador ? "primary" : "danger"}
   onClick={props.cambiarEstadoContador}
   >{!props.activarContador ? "Iniciar" : "Pausar"}</Button>


     
      <Button type="info" onClick={props.resetearCronometro}>
        Reiniciar
      </Button>
      
    </div>
  );
}

export default ButtonCronometer;
