import React, { useEffect, useState } from "react";
import { get, useForm } from "react-hook-form";

function FormDataCronometerReactHooks({
  setDatosFormulario,
  setTamanioCronometro,
  setListaColores,
  listaColores,
}) {
  // La funcion watch es para ver que se esta escribiendo en el formulario en el tiempo real
  const {
    register,
    formState: { errors },
    getFieldState,
    watch,
    getValues,
    handleSubmit,
  } = useForm();

  const [mostrarInputNombreArchivo, setMostrarInputNombreArchivo] =
    useState(false);

  const [mostrarInputSugerencia, setMostrarInputSugerencia] = useState(false);

  const [formaInputs, setFormaInputs] = useState("vertical");

  const onSubmit = (datosFormulario) => {
    console.log("Esta bien el formulario");
    console.log(datosFormulario);
    setDatosFormulario(datosFormulario);
    // setListaColores(watch("colorValor"));
    setTamanioCronometro(watch("tamanioCronometroValor"));
  };

  const mostrarCampoInputNombreArchivo = (event) => {
    setMostrarInputNombreArchivo(!mostrarInputNombreArchivo);
  };

  const mostrarCampoInputSugerencia = (event) => {
    event.target.value === "si"
      ? setMostrarInputSugerencia(true)
      : setMostrarInputSugerencia(false);
  };

  const cambiarEstilosCamposDeLaHora = (event) => {
    event.target.value === "horizontal"
      ? setFormaInputs("horizontal")
      : setFormaInputs("vertical");
  };

  const mostrarErrorEnFormulario = (error) => {
    console.log("tiene errores el formulario");
  };
  /*   const handleChange = (e) => {
   
  };
 */
  /*   const firstName = register("firstName", { required: true }); */

  const cambiarColoresCronometro = () => {
    setListaColores(getValues("colorValor"));
  };



  const cambiarTamanioCronometro = () => {
    setTamanioCronometro(getValues("tamanioCronometroValor"));
  };

  /*   useEffect(() => {
    if (watch("colorValor")) setListaColores(watch("colorValor"));
    if (watch("tamanioCronometroValor"))
      setTamanioCronometro(watch("tamanioCronometroValor"));
  }, [watch("colorValor"), watch("tamanioCronometroValor")]);
 */

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div>
        <h3>Formulario para registrar datos del cronometro</h3>
      </div>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
        onSubmit={handleSubmit(onSubmit, mostrarErrorEnFormulario)}
      >
        <div
          style={{
            display: "flex",

            justifiContent: "space-evenly",
            marginBottom: "10px",
          }}
        >
          <label
            style={{
              marginRight: "10px",
            }}
          >
            Desea Guardar los datos:
          </label>

          <input
            type="checkbox"
            id=""
            {...register("guardarDatosValor")}
            onChange={mostrarCampoInputNombreArchivo}
          />
        </div>

        {mostrarInputNombreArchivo && (
          <div
            style={{
              display: "flex",
              justifiContent: "space-evenly",
              paddingBottom: "10px",
            }}
          >
            <div>
              <label
                style={{
                  marginRight: "10px",
                }}
              >
                Nombre del archivo:
              </label>
            </div>

            <input type="text" name="" id="" {...register("nombreArchivo")} />
          </div>
        )}

        <div
          style={{
            display: "flex",

            marginBottom: "10px",
          }}
        >
          <label
            style={{
              marginRight: "10px",
            }}
          >
            Como desea visualizar los inputs:
          </label>
          <select
            {...register("formaVisualizarInput")}
            onChange={cambiarEstilosCamposDeLaHora}
          >
            <option value="" selected disabled>
              Seleccione una opcion
            </option>

            <option value="horizontal">Horizontal</option>
            <option value="vertical">Vertical</option>
          </select>
        </div>

        <div
          style={{
            display: "flex",
            justifiContent: "space-evenly",
            marginBottom: "10px",
          }}
          onChange={(e) => {
            console.log(e, "fdfffg");
            console.log("estoy cambinado");
            // cambiarColoresCronometro()
          }}
        >
          <label
            style={{
              marginRight: "10px",
            }}
          >
            Escoje los colores del cronometro:
          </label>

          <label>
            <input
              type="checkbox"
              {...register("colorValor")}
              value="red"

              /*    onChange={cambiarColoresCronometro} */
            />
            Rojo
          </label>

          <label>
            <input
              type="checkbox"
              {...register("colorValor")}
              value="green"

              /*  onChange={cambiarColoresCronometro} */
            />
            Verde
          </label>

          <label>
            <input
              type="checkbox"
              {...register("colorValor")}
              value="blue"

              /*    onChange={cambiarColoresCronometro}  */
            />
            Azul
          </label>
          <label>
            <input
              type="checkbox"
              {...register("colorValor")}
              value="yellow"

              /*   onChange={cambiarColoresCronometro} */
            />
            Amarillo
          </label>
        </div>

        <div
          style={{
            display: "flex",
            justifiContent: "space-evenly",
            marginBottom: "10px",
          }}
        >
          <label
            style={{
              marginRight: "10px",
            }}
          >
            Tamaño del cronometro:
          </label>

          <div onChange={cambiarTamanioCronometro}>
            <div>
              <input
                type="radio"
                id="grande"
                value="grande"
                {...register("tamanioCronometroValor")}
              />
              <label htmlFor="grande">Grande</label>
            </div>
            <div>
              <input
                type="radio"
                id="mediano"
                value="mediano"
                {...register("tamanioCronometroValor")}
              />
              <label htmlFor="mediano">Mediano</label>
            </div>

            <div>
              <input
                type="radio"
                id="pequenio"
                value="pequenio"
                {...register("tamanioCronometroValor")}
              />
              <label htmlFor="pequenio">Pequeño</label>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifiContent: "space-evenly",
            marginBottom: "10px",
          }}
        >
          <label
            style={{
              marginRight: "10px",
            }}
          >
            Desea dar una sugerencia:
          </label>
          <select
            {...register("darSugerenciaValor")}
            onChange={mostrarCampoInputSugerencia}
          >
            <option value="si">Si</option>
            <option value="no" selected>
              No
            </option>
          </select>
        </div>

        {mostrarInputSugerencia && (
          <div
            style={{
              display: "flex",
              justifiContent: "space-evenly",
              marginBottom: "10px",
            }}
          >
            <label
              style={{
                marginRight: "10px",
              }}
            >
              Sugerencia:
            </label>
            <input type="text" name="" id="" {...register("sugerenciaValor")} />
          </div>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: formaInputs === "horizontal" ? "row" : "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: formaInputs === "horizontal" ? "column" : "row",
              justifiContent: "space-evenly",
              marginBottom: "10px",
            }}
          >
            <label
              style={{
                marginRight: "10px",
              }}
            >
              Minutos:
            </label>
            <input
              type="number"
              {...register("minutos", {
                required: true,
                max: 60,
                min: 0,
              })}
            />

            {errors.minutos?.type === "required" && (
              <p style={{ color: "red" }}>Debe poner los minutos</p>
            )}
            {errors.minutos?.type === "max" && (
              <p style={{ color: "red" }}>Solo puede poner maximo 60 minutos</p>
            )}
            {errors.minutos?.type === "min" && (
              <p style={{ color: "red" }}>Solo puede poner minimo 0 minutos</p>
            )}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: formaInputs === "horizontal" ? "column" : "row",
              justifiContent: "space-evenly",
              marginBottom: "10px",
            }}
          >
            <label
              style={{
                marginRight: "10px",
              }}
            >
              Segundos:
            </label>
            <input
              type="number"
              {...register("segundos", {
                required: true,
                max: 59,
                min: 0,
              })}
            />

            {errors.segundos?.type === "required" && (
              <p style={{ color: "red" }}>Debe poner los segundos</p>
            )}

            {errors.segundos?.type === "max" && (
              <p style={{ color: "red" }}>
                Solo puede poner maximo 59 segundos
              </p>
            )}
            {errors.segundos?.type === "min" && (
              <p style={{ color: "red" }}>Solo puede poner minimo 0 segundos</p>
            )}
          </div>
          <div
            style={{
              display: "flex",
              justifiContent: "space-evenly",
              flexDirection: formaInputs === "horizontal" ? "column" : "row",
              marginBottom: "10px",
            }}
          >
            <label
              style={{
                marginRight: "10px",
              }}
            >
              Milisegundos:
            </label>
            <input
              type="number"
              name=""
              id=""
              {...register("milisegundos", {
                required: true,
                max: 99,
                min: 0,
              })}
            />
            {errors.milisegundos?.type === "required" && (
              <p style={{ color: "red" }}>Debe poner los milisegundos</p>
            )}

            {errors.milisegundos?.type === "max" && (
              <p style={{ color: "red" }}>
                Solo puede poner maximo 99 milisegundos
              </p>
            )}
            {errors.milisegundos?.type === "min" && (
              <p style={{ color: "red" }}>
                Solo puede poner minimo 0 milisegundos
              </p>
            )}
          </div>
        </div>

        <button
          style={{
            borderRadius: "30px",
            width: "10%",
          }}
          type="submit"
        >
          Enviar datos
        </button>
      </form>
    </div>
  );
}

export default FormDataCronometerReactHooks;
