import { Button, Checkbox, Input, InputNumber, Radio, Select } from "antd";
import { Option } from "antd/lib/mentions";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

function FormCronometerDataAntReactHooks({
  setDatosFormulario,
  setTamanioCronometro,
  setListaColores,
  listaColores,
}) {
  const estiloLabel = {
    fontSize: "20px",
    fontWeight: "10px",
    marginRight: "10px",
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [mostrarInputNombreArchivo, setMostrarInputNombreArchivo] =
    useState(false);
  const [formaInputs, setFormaInputs] = useState("");
  const [mostrarInputSugerencia, setMostrarInputSugerencia] = useState(false);

  const enviarDatos = (data) => {
    console.log("Esta bien el formulario");
    console.log(data);
    setDatosFormulario(data);
  };

  const enviarConErrores = (data) => {
    console.log("tiene errores el formulario : ", data);
  };
  const validarNumeroSeaPar = (numero) => (numero % 2 === 0 ? true : false);
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2>Formulario para registrar datos del cronometro</h2>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        onSubmit={handleSubmit(enviarDatos, enviarConErrores)}
      >
        <div
          style={{
            display: "flex",
            marginBottom: "15px",
          }}
        >
          <label style={estiloLabel}>
            Desea guardar los datos del cronometro:
          </label>

          <Controller
            control={control}
            name="guardarDatosValor"
            render={({ field: { onChange, value, name, ref } }) => (
              <Checkbox
                style={{ marginTop: "auto", marginBottom: "auto" }}
                onChange={(e) => {
                  console.log("Se ejecuta el onCHange");
                  setMostrarInputNombreArchivo(!mostrarInputNombreArchivo);
                  onChange(e.target.checked);
                }}
                checked={value}
              ></Checkbox>
            )}
          />
        </div>

        {mostrarInputNombreArchivo && (
          <div
            style={{
              display: "flex",
              marginBottom: "15px",
            }}
          >
            <label style={estiloLabel}>Nombre del archivo:</label>

            <Controller
              control={control}
              name="nombreArchivoValor"
              render={({ field }) => (
                <Input style={{ width: "30%" }} {...field}></Input>
              )}
            />
          </div>
        )}

        <div
          style={{
            display: "flex",
            marginBottom: "15px",
          }}
        >
          <label style={estiloLabel}>Como desea visualizar los inputs:</label>

          <Controller
            control={control}
            name="formaVisualizarValor"
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder="seleccion Una Opcion"
                value={value}
                style={{ width: 160, fontSize: "20px" }}
                onChange={(valor) => {
                  setFormaInputs(valor);
                  onChange(valor);
                }}
              >
                <Option
                  value="horizontal"
                  selected={true}
                  style={{ width: 120, fontSize: "14px" }}
                >
                  Horizontal
                </Option>
                <Option
                  value="vertical"
                  style={{ width: 120, fontSize: "14px" }}
                >
                  Vertical
                </Option>
              </Select>
            )}
          />
        </div>

        <div
          style={{
            display: "flex",
            marginBottom: "15px",
          }}
        >
          <label style={estiloLabel}>Escoja los colore del cronometro:</label>

          <Controller
            control={control}
            name="colorValor"
            render={({ field: { onChange, value } }) => (
              <Checkbox.Group
                value={value}
                onChange={(valorListaDeColores) => {
                  setListaColores(valorListaDeColores);
                  onChange(valorListaDeColores);
                }}
              >
                <Checkbox value="red">Rojo</Checkbox>
                <Checkbox value="green">Verde</Checkbox>
                <Checkbox value="yellow">Amarillo</Checkbox>
                <Checkbox value="blue">Azul</Checkbox>
              </Checkbox.Group>
            )}
          />
        </div>

        <div
          style={{
            display: "flex",
            marginBottom: "15px",
          }}
        >
          <label style={estiloLabel}>Escoja el tamaño del cronometro:</label>

          <Controller
            name="tamanioCronometroValor"
            control={control}
            render={({ field: { value, onChange } }) => {
              return (
                <Radio.Group
                  value={value}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setTamanioCronometro(e.target.value);
                    onChange(e.target.value);
                  }}
                >
                  <Radio value="grande">Grande</Radio>
                  <Radio value="mediano">Mediano</Radio>
                  <Radio value="pequenio">Pequeño</Radio>
                </Radio.Group>
              );
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            marginBottom: "15px",
          }}
        >
          <label style={estiloLabel}>Desea dar una sugerencia:</label>

          <Controller
            name="mostrarInputSugerenciaValor"
            control={control}
            render={({ field: { value, onChange } }) => {
              return (
                <Select
                  placeholder="selecciona Si o No"
                  value={value}
                  style={{ width: 180, fontSize: "15px" }}
                  onChange={(valorMostrarInputSugerencia) => {
                    valorMostrarInputSugerencia === "si"
                      ? setMostrarInputSugerencia(true)
                      : setMostrarInputSugerencia(false);

                    onChange(valorMostrarInputSugerencia);
                  }}
                >
                  <Option value="si" style={{ width: 120, fontSize: "14px" }}>
                    Si
                  </Option>
                  <Option value="no" style={{ width: 120, fontSize: "14px" }}>
                    No
                  </Option>
                </Select>
              );
            }}
          />
        </div>

        {mostrarInputSugerencia && (
          <div
            style={{
              display: "flex",
              marginBottom: "15px",
            }}
          >
            <label style={estiloLabel}>Sugerencia:</label>

            <Input
              style={{ width: "30%", fontSize: "14px" }}
              placeholder="Pon la sugerencia"
            ></Input>
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
              marginBottom: "15px",
              flexDirection: formaInputs === "horizontal" ? "column" : "row",
            }}
          >

            
            <label style={estiloLabel}>Minutos:</label>
            <Controller
              control={control}
              rules={{ required: true, min: 0, max: 99, pattern: /[0-9]+/ }}
              name="minutos"
              render={({ field: { onChange, value } }) => {
                return (
                  <InputNumber
                  className={errors.minutos?"is-invalid":""}
                    onChange={onChange}
                    value={value}
                    style={{ width: "30%", fontSize: "14px" }}
                    placeholder="Pon los minutos"
                  ></InputNumber>
                );
              }}
            />

            {errors.minutos?.type === "required" && (
              <p
                style={{ color: "red", fontWeight: "20px", marginLeft: "20px" }}
              >
                Debe poner los minutos
              </p>
            )}
            {errors.minutos?.type === "max" && (
              <p
                style={{ color: "red", fontWeight: "20px", marginLeft: "20px" }}
              >
                Solo puede poner maximo 99 minutos
              </p>
            )}
            {errors.minutos?.type === "min" && (
              <p
                style={{ color: "red", fontWeight: "20px", marginLeft: "20px" }}
              >
                Solo puede poner minimo 0 minutos
              </p>
            )}
            {errors.minutos?.type === "pattern" && (
              <p
                style={{ color: "red", fontWeight: "20px", marginLeft: "20px" }}
              >
                Solo pueden haber numeros
              </p>
            )}
          </div>

          <div
            style={{
              display: "flex",
              marginBottom: "15px",
              flexDirection: formaInputs === "horizontal" ? "column" : "row",
            }}
          >
            <label style={estiloLabel}>Segundos:</label>

            <Controller
              control={control}
              rules={{ required: true, min: 0, max: 59 }}
              name="segundos"
              render={({ field: { onChange, value } }) => {
                return (
                  <InputNumber
                  className={errors.segundos?"is-invalid":""}
                    value={value}
                    onChange={onChange}
                    style={{ width: "30%", fontSize: "14px" }}
                    placeholder="Pon los segundos"
                  ></InputNumber>
                );
              }}
            />
            {errors.segundos?.type === "required" && (
              <p
                style={{ color: "red", fontWeight: "20px", marginLeft: "20px" }}
              >
                Debe poner los segundos
              </p>
            )}
            {errors.segundos?.type === "max" && (
              <p
                style={{ color: "red", fontWeight: "20px", marginLeft: "20px" }}
              >
                Solo puede poner maximo 59 segundos
              </p>
            )}
            {errors.segundos?.type === "min" && (
              <p
                style={{ color: "red", fontWeight: "20px", marginLeft: "20px" }}
              >
                Solo puede poner minimo 0 segundos
              </p>
            )}
          </div>

          <div
            style={{
              display: "flex",
              marginBottom: "15px",
              marginRight: "20x",
              flexDirection: formaInputs === "horizontal" ? "column" : "row",
            }}
          >
            <label style={estiloLabel}>Milisegundos:</label>

            <Controller
              control={control}
              rules={{ required: true, min: 0, max: 99 }}
              name="milisegundos"
              render={({ field: { onChange, value } }) => {
                return (
                  <InputNumber
                  className={errors.milisegundos?"is-invalid":""}
                    onChange={onChange}
                    style={{ width: "30%", fontSize: "14px" }}
                    placeholder="Pon los milisegundos"
                  ></InputNumber>
                );
              }}
            />
            {errors.milisegundos?.type === "required" && (
              <p
                style={{ color: "red", fontWeight: "20px", marginLeft: "20px" }}
              >
                Debe poner los milisegundos
              </p>
            )}
            {errors.milisegundos?.type === "max" && (
              <p
                style={{ color: "red", fontWeight: "20px", marginLeft: "20px" }}
              >
                Solo puede poner maximo 99 milisegundos
              </p>
            )}
            {errors.milisegundos?.type === "min" && (
              <p
                style={{ color: "red", fontWeight: "20px", marginLeft: "20px" }}
              >
                Solo puede poner minimo 0 milisegundos
              </p>
            )}
          </div>
        </div>
        <div>
          <div>
            <label style={estiloLabel}>Campo Numero mayor a 0:</label>
            <Controller
              control={control}
              rules={{
                required: true,
                pattern:/^[0-9]*$/,
                validate: {
                  positive: (v) => parseInt(v) > 0,
                },
              }}
              name="campoNumeroPar"
              render={({ field: { onChange, value } }) => {
                return (
                  <Input
                    className={errors.campoNumeroPar?"is-invalid":""}
                    onChange={onChange}
                    style={{ width: "30%", fontSize: "14px" }}
                    placeholder="Ejemplo de validaciones"
                  ></Input>
                );
              }}
            />
            {errors.campoNumeroPar?.type === "required" && (
              <p
                style={{ color: "red", fontWeight: "20px", marginLeft: "20px" }}
              >
                El campo es requerido
              </p>
            )}

            {errors.campoNumeroPar?.type === "positive" && (
              <p
                style={{ color: "red", fontWeight: "20px", marginLeft: "20px" }}
              >
                El numero debe ser positivo
              </p>
            )}

            {errors.campoNumeroPar?.type === "pattern" && (
              <p
                style={{ color: "red", fontWeight: "20px", marginLeft: "20px" }}
              >
                El campo debe tener solo numero
              </p>
            )}
          </div>
          <Button type="primary" htmlType="submit">
            Guardar datos
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormCronometerDataAntReactHooks;
