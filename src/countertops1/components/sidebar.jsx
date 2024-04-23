import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useElementRefContext } from "../context/ct-context";

import { Col, InputNumber, Row, Slider, Typography, Input, Space } from "antd";

const Sidebar = () => {
  const sidenavElementRef = useRef(null);
  const { setElementRef } = useElementRefContext();

  useEffect(() => {
    console.log(
      "🚀 ~ useEffect ~ sidenavElementRef: SSSSS ",
      sidenavElementRef
    );

    const tempSizes = {
      width: sidenavElementRef.current.offsetWidth,
      height: sidenavElementRef.current.offsetHeight,
      marginTop: sidenavElementRef.current.offsetTop,
    };
    if (sidenavElementRef) setElementRef(tempSizes);
  }, [sidenavElementRef]);

  // ANT DESIGN LOGIC
  const [inputValueLargo, setInputValueLargo] = useState(20);
  const [inputValueAncho, setInputValueAncho] = useState(20);

  const onChangeLargo = (newValue) => {
    setInputValueLargo(newValue);
  };

  const onChangeAncho = (newValue) => {
    setInputValueAncho(newValue);
  };

  return (
    <>
      <div id="ct-side-nav" ref={sidenavElementRef}>
        <h3>Encimeras</h3>

        <nav id="nav-countertop">
          <ul className="list-header">
            <li>
              <Link to="/">
                <img
                  src="/images/home.jpg"
                  alt="Ir a Inicio"
                  title="Ir a Inicio"
                />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src="/images/guardar.jpg" alt="Guardar" title="Guardar" />
              </Link>
            </li>
          </ul>

          <div>Seleccione modelo</div>
          <ul className="list-jobs">
            <li>
              <Link to="simple">
                <img
                  src="/images/jobs/simple.png"
                  alt="Encimera Simple"
                  title="Encimera Simple"
                />
              </Link>
            </li>
            <li>
              <Link to="square">
                <img
                  src="/images/jobs/square.png"
                  alt="Encimera Cuadrada"
                  title="Encimera Cuadrada"
                />
              </Link>
            </li>
            <li>
              <Link to="circle">
                <img
                  src="/images/jobs/circle.png"
                  alt="Encimera Circular"
                  title="Encimera Circular"
                />
              </Link>
            </li>
            <li>
              <Link to="l-shaped?t=l1">
                <img
                  src="/images/jobs/L-1.png"
                  alt="Encimera en L - 1"
                  title="Encimera en L - 1"
                />
              </Link>
            </li>
            <li>
              <Link to="l-shaped?t=l2">
                <img
                  src="/images/jobs/L-2.png"
                  alt="Encimera en L - 2"
                  title="Encimera en L - 2"
                />
              </Link>
            </li>
            <li>
              <Link to="u-shaped?t=u1">
                <img
                  src="/images/jobs/U-1.png"
                  alt="Encimera en U - 1"
                  title="Encimera en U - 1"
                />
              </Link>
            </li>
            <li>
              <Link to="u-shaped?t=u2">
                <img
                  src="/images/jobs/U-2.png"
                  alt="Encimera en U - 2"
                  title="Encimera en U - 2"
                />
              </Link>
            </li>
            <li>
              <Link to="u-shaped?t=u3">
                <img
                  src="/images/jobs/U-3.png"
                  alt="Encimera en U - 3"
                  title="Encimera en U - 3"
                />
              </Link>
            </li>
            <li>
              <Link to="u-shaped?t=u4">
                <img
                  src="/images/jobs/U-4.png"
                  alt="Encimera en U - 4"
                  title="Encimera en U - 4"
                />
              </Link>
            </li>
          </ul>
        </nav>

        <section id="ct-controls">
          {/*  SIZES CONTROLS */}
          <>
            <Typography.Title level={4} style={{ marginBottom: 10 }}>
              Dimensiones
            </Typography.Title>
            <div>Largo</div>
            <Row>
              <Col span={12}>
                <Slider
                  min={20}
                  max={3600}
                  onChange={onChangeLargo}
                  value={
                    typeof inputValueLargo === "number" ? inputValueLargo : 20
                  }
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={20}
                  max={3600}
                  style={{ margin: "0 16px" }}
                  value={inputValueLargo}
                  onChange={onChangeLargo}
                />
              </Col>
            </Row>
            <div>Ancho</div>
            <Row>
              <Col span={12}>
                <Slider
                  min={20}
                  max={2100}
                  onChange={onChangeAncho}
                  value={
                    typeof inputValueAncho === "number" ? inputValueAncho : 20
                  }
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={20}
                  max={2100}
                  style={{ margin: "0 16px" }}
                  value={inputValueAncho}
                  onChange={onChangeAncho}
                />
              </Col>
            </Row>
          </>

          {/*  CORNERS CONTROLS */}
          <>
            <Typography.Title level={4} style={{ marginBottom: 10 }}>
              Esquinas
            </Typography.Title>

            <Space direction="vertical">
              <Row>
                <Col span={8}>
                  <Input addonAfter={"X"} defaultValue="mysite" />
                </Col>
                <Col span={8} offset={8}>
                  <Input addonBefore={"D"} defaultValue="mysite" />
                </Col>
              </Row>

              <Row>
                <Col span={8}>
                  <Input addonAfter={"O"} defaultValue="mysite" />
                </Col>
                <Col span={8} offset={8}>
                  <Input addonBefore={"A"} defaultValue="mysite" />
                </Col>
              </Row>
            </Space>
          </>
        </section>
      </div>
    </>
  );
};

Sidebar.displayName = "Sidebar";
export default Sidebar;
