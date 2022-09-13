import React, { useState } from "react";

function FormDataCronometer({ setDatosFormulario, setEnviarDatos }) {
  const [milisegundosForm, setMilisegundosForm] = useState(0);
  const [segundosForm, setSegundosForm] = useState(0);
  const [minutosForm, setMinutosForm] = useState(0);

  const milisegundosChange = (event) => {
    if (event.target.value < 0 || event.target.value > 99) {
      alert("Milisegundos no pueden ser menores a 0  o mayor a 99");
      event.target.value = 0;
    } else setMilisegundosForm(event.target.value);
  };

  const segundosChange = (event) => {
    if (event.target.value < 0 || event.target.value > 59) {
      alert("segundos no pueden ser menores a 0  o mayor a 59");
      event.target.value = 0;
    } else setSegundosForm(event.target.value);
  };

  const minutosChange = (event) => {
    if (event.target.value < 0 || event.target.value > 59) {
      alert("segundos no pueden ser menores a 0  o mayor a 59");
      event.target.value = 0;
    } else setMinutosForm(event.target.value);
  };

  const submitDataCronometer = (event) => {
    event.preventDefault();
    setEnviarDatos(true);
    setDatosFormulario({
      milisegundosForm,
      segundosForm,
      minutosForm,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={submitDataCronometer}>
          <input
            type="number"
            placeholder="minutos"
            className="form-control "
            onChange={minutosChange}
          />
          <input
            type="number"
            placeholder="segundos de 0 59"
            className="form-control "
            onChange={segundosChange}
          />
          <input
            type="number"
            placeholder="milisegundos de 0 a 99"
            className="form-control "
            onChange={milisegundosChange}
          />

          <button className="btn btn-primary my-3" type="submit">
            Enviar Datos
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormDataCronometer;
