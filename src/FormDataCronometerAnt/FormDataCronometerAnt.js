import React, { useState } from "react";
import { Button, Form, InputNumber, Radio, Select, Switch } from "antd";
import { Option } from "antd/lib/mentions";
import Input from "antd/lib/input/Input";

function FormDataCronometerAnt({ setDatosFormulario, setTamanioCronometro }) {
  const [mostrarInputNombreArchivo, setMostrarInputNombreArchivo] =
    useState(false);

  const [mostrarInputSugerencia, setMostrarInputSugerencia] = useState(false);

  const [formaInputs, setFormaInputs] = useState("vertical");

  const finalizoFormulario = (valores) => {
    setDatosFormulario(valores);
  };

  const finalizoFormularioConErrores = (errorInfo) => {
    console.log("Failed", errorInfo);
  };

  const mostrarTextAreaNombreArchivo = () => {
    setMostrarInputNombreArchivo(!mostrarInputNombreArchivo);
  };

  const mostrarTextAreaSugerencia = (valorSugerencia) => {
    valorSugerencia === "si"
      ? setMostrarInputSugerencia(true)
      : setMostrarInputSugerencia(false);
  };

  const cambiarTamanioCronometro = (event) => {
    setTamanioCronometro(event.target.value);
    console.log(event.target.value);
  };

  const cambiarFormaDeVisualizarInputs = (valorFormaInputs) => {
    setFormaInputs(valorFormaInputs);
    console.log(valorFormaInputs);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={finalizoFormulario}
      onFinishFailed={finalizoFormularioConErrores}
      autoComplete="off"
    >
      <Form.Item
        label="Desea guardar los datos"
        name="mostrarInputNombreArchivoValor"
        valuePropName="checked"
      >
        <Switch onChange={mostrarTextAreaNombreArchivo} />
      </Form.Item>

      {mostrarInputNombreArchivo && (
        <Form.Item label="Nombre del archivo" name="nombreArchivo">
          <Input />
        </Form.Item>
      )}

      <Form.Item
        name="formaVisualizarDatos"
        label="Como desea visualizar los inputs"
      >
        <Select
          placeholder="Selecciona la forma como desea visualizar los inputs"
          onChange={cambiarFormaDeVisualizarInputs}
          allowClear
        >
          <Option value="vertical">Alineacion vertical</Option>
          <Option value="horizontal">Alineacion horizontal</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Elije los colores del programa"
        name="coloresFormulario"
      >
        <Radio.Group>
          <Radio value="red">rojo</Radio>
          <Radio value="green">verde</Radio>
          <Radio value="blue">azul</Radio>
          <Radio value="yellow">amarillo</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Tamaño del cronometro" name="tamanioCronometro">
        <Radio.Group onChange={cambiarTamanioCronometro}>
          <Radio value="grande">Grande</Radio>
          <Radio value="pequeño">Pequeño</Radio>
          <Radio value="mediano">Mediano</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Desea dar una sugerencia" name="darSugerenciaValor">
        <Select
          placeholder="Selecciona la forma como desea visualizar los inputs"
          allowClear
          onChange={mostrarTextAreaSugerencia}
        >
          <Option value="si"> Si</Option>
          <Option value="no"> No</Option>
        </Select>
      </Form.Item>

      {mostrarInputSugerencia && (
        <Form.Item label="Sugerencia" name="sugerenciaValor">
          <Input />
        </Form.Item>
      )}

      <div
        style={{
          display: formaInputs === "vertical" ? "" : "flex",
          FlexDirection: formaInputs === "vertical" ? "" : "row",
        }}
      >
        <div
          style={{
            display: formaInputs === "vertical" ? "" : "flex",
            FlexDirection: formaInputs === "vertical" ? "" : "column",
          }}
        >
          <Form.Item
            label="Minutos"
            name="minutos"
            rules={[
              {
                required: true,
                message: "Pon los minutos",
              },
            ]}
          >
            <InputNumber
              type="number"
              placeholder="Ingresa los minutos"
              size={"large"}
              min={1}
              max={60}
            />
          </Form.Item>
        </div>

        <div
          style={{
            display: formaInputs === "vertical" ? "" : "flex",
            FlexDirection: formaInputs === "vertical" ? "" : "column",
          }}
        >
          <Form.Item
            label="Segundos"
            name="segundos"
            rules={[
              {
                required: true,
                message: "Pon los segundos!",
              },
            ]}
          >
            <InputNumber
              type="number"
              placeholder="Ingresa las segundos"
              size={"large"}
              min={1}
              max={59}
            />
          </Form.Item>
        </div>

        <div
          
        >
          <Form.Item
          
            label="Milisegundos"
            name="milisegundos"
            rules={[
              {
                required: true,
                message: "Pon los milisegundos!",
              },
            ]}
          >
            <InputNumber
              type="number"
              placeholder="Ingresa los milisegundos"
              size={"large"}
              min={0}
              max={99}
            />
          </Form.Item>
        </div>

        <div>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Enviar datos
            </Button>
          </Form.Item>
        </div>
      </div>
    </Form>
  );
}

export default FormDataCronometerAnt;
