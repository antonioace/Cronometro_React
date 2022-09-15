import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Col,
  Form,
  InputNumber,
  Radio,
  Row,
  Select,
  Switch,
} from "antd";

import { Option } from "antd/lib/mentions";
import Input from "antd/lib/input/Input";

function FormDataCronometerAnt({
  setDatosFormulario,
  setTamanioCronometro,
  setListaColores,
}) {
  const [mostrarInputNombreArchivo, setMostrarInputNombreArchivo] =
    useState(false);

  const [mostrarInputSugerencia, setMostrarInputSugerencia] = useState(false);

  const [formaInputs, setFormaInputs] = useState("vertical");

  const finalizoFormulario = (valores) => {
    setDatosFormulario(valores);
    setListaColores(valores.listColoresValues);
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

  const agregarListaDeColores = (listaColoresValues) => {
    setListaColores(listaColoresValues);
  };

 
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Form
        name="basic"
       
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

        <Form.Item name="listColoresValues" label="Checkbox.Group">
          <Checkbox.Group onChange={agregarListaDeColores}>
            <Row>
              <Col span={8}>
                <Checkbox value="red" style={{ lineHeight: "32px" }}>
                  rojo
                </Checkbox>
              </Col>

              <Col span={8}>
                <Checkbox value="green" style={{ lineHeight: "32px" }}>
                  verde
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="blue" style={{ lineHeight: "32px" }}>
                  azul
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="yellow" style={{ lineHeight: "32px" }}>
                  amarillo
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
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
            display: "flex",
            flexDirection: formaInputs === "horizontal" ? "row" : "column",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: formaInputs === "horizontal" ? "column" : "row",
              width: "50% ",
            }}
          >
            <p style={{ margin: 0 }}>Minutos:</p>

            <Form.Item
              style={{ margin: 0 }}
              name="minutos"
              rules={[
                {
                  required: true,
                  message: "Pon los minutos",
                },
              ]}
            >
              <InputNumber
                style={{ margin: "10px 0" }}
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
              display: "flex",
              alignItems: "center",
              flexDirection: formaInputs === "horizontal" ? "column" : "row",
              width: "50% ",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p>Segundos:</p>
            </div>
            <Form.Item
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
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: formaInputs === "horizontal" ? "column" : "row",
              width: "50% ",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p>Milisegundos:</p>
            </div>
            <Form.Item
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
        </div>
        <div
          style={{
        
            display: "flex",
            justifyContent: "center",
            alignItems:"center"
          }}
        >
          <Form.Item
          style={{ margin:"0"}}
          >
            <Button type="primary" htmlType="submit">
              Enviar datos
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

export default FormDataCronometerAnt;
