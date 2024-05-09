import "./sidebar.css";

import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCountertopContext,
  useElementRefContext,
} from "../context/ct-context";

import PropTypes from "prop-types";

import {
  Col,
  InputNumber,
  Row,
  Slider,
  Typography,
  Space,
  Flex,
  Button,
  Empty,
  Dropdown,
} from "antd";
import { INPUT_DISABLED_LOGIC, SHAPE_TYPES } from "../mocks/SHAPE_TYPES";
import ButtonSquare from "./Simple-Componentes/button-square";
import BUTTON_SQUARE_MODELS from "../const/button-square-models.const";
import menuProps from "../const/lista-parts-dropdown-nav.const";

const Sidebar = ({ sidebarRightOpenedControl }) => {
  const location = useNavigate();

  const _BUTTON_SQUARE_MODELS = BUTTON_SQUARE_MODELS;

  // Context
  const sidenavElementRef = useRef(null);
  const { setElementRef } = useElementRefContext();
  const { countertops, setCountertops } = useCountertopContext();

  // Length and Width State
  const [inputValueLargo, setInputValueLargo] = useState(null);
  const [inputValueAncho, setInputValueAncho] = useState(null);

  // Corners State
  const [cornersState, setCornersState] = useState([]);
  const [cornersDisabled, setCornersDisabled] = useState([
    true,
    true,
    true,
    true,
  ]);

  // Disabled Input State
  const [disabledInputSlider, setDisabledInputSlider] =
    useState(INPUT_DISABLED_LOGIC);

  const disabledSliderLogic = (shapeType) => {
    if (!shapeType) {
      throw new Error("shapeType is required GG");
    }

    if (shapeType === SHAPE_TYPES.SIMPLE) {
      setDisabledInputSlider((prev) => {
        const tempLogic = {
          ...INPUT_DISABLED_LOGIC,
          ...{ p1_width: false, p1_height: false },
        };
        return {
          ...prev,
          ...tempLogic,
        };
      });
    }

    if (shapeType === SHAPE_TYPES.SQUARE) {
      setDisabledInputSlider((prev) => {
        const tempLogic = {
          ...INPUT_DISABLED_LOGIC,
          ...{ p1_width: false },
        };
        return {
          ...prev,
          ...tempLogic,
        };
      });
    }

    if (shapeType === SHAPE_TYPES.CIRCLE) {
      setDisabledInputSlider((prev) => {
        const tempLogic = {
          ...INPUT_DISABLED_LOGIC,
          ...{ p1_width: false },
        };
        return {
          ...prev,
          ...tempLogic,
        };
      });
    }
  };

  const onChangeLargo = (newValue) => {
    setInputValueLargo(newValue);
    if (countertops?.shapeType == SHAPE_TYPES.SQUARE) {
      setInputValueAncho(newValue);
    }
  };

  const onChangeAncho = (newValue) => {
    setInputValueAncho(newValue);
    if (countertops?.shapeType == SHAPE_TYPES.SQUARE) {
      setInputValueLargo(newValue);
    }
  };

  const handleClickWork = (workType, event) => {
    event.preventDefault();

    // if (workType === WORKS_TYPES.CCCHAFLAN) {
    //   const temp = { ...countertops.partsData[0].works };
    //   console.log("🚀 ~ handleClickWork ~ temp:", temp);
    //   const result = temp.filter((item) => {
    //     if (item.type == WORKS_TYPES.CCCHAFLAN) {
    //       item.selected = !item.selected;
    //       return item;
    //     }
    //   });
    // }
  };

  const handleClickAddWork = (event) => {
    event.preventDefault();

    sidebarRightOpenedControl(true);
  };

  const onChangeCorners = (newValue, position) => {
    setCornersState((prev) => {
      const tempArray = [...prev];
      tempArray[position] = newValue;

      setCountertops((prev) => {
        const t = { ...prev };
        t.partsData[0].cornerRadius = tempArray;
        return {
          ...prev,
          ...t,
        };
      });

      return tempArray;
    });
  };

  useMemo(() => {
    if (countertops?.partsData[0]?.width && countertops?.partsData[0]?.height) {
      const tempFirstPartData = countertops.partsData[0];

      setInputValueLargo(tempFirstPartData.width);
      setInputValueAncho(tempFirstPartData.height);
    }

    if (
      Array.isArray(countertops?.partsData[0]?.cornerRadius) &&
      countertops?.partsData[0]?.cornerRadius?.length > 0
    ) {
      const tempArray = countertops?.partsData[0]?.cornerRadius;

      setCornersState(tempArray);
    }
  }, [countertops?.partsData[0]?.width, countertops?.partsData[0]?.height]);

  useMemo(() => {
    if (countertops?.shapeType) {
      disabledSliderLogic(countertops.shapeType);
    }
  }, [location, countertops?.shapeType]);

  useMemo(() => {
    console.log(
      "🚀 ~ useMemo ~ countertops?.partsData[0]?.cornersDisabled:",
      countertops?.partsData[0]?.cornerRadiusDisabled
    );

    if (countertops?.partsData[0]?.cornerRadiusDisabled) {
      setCornersDisabled(countertops?.partsData[0]?.cornerRadiusDisabled);
    }
  }, [countertops?.partsData[0]?.cornerRadiusDisabled]);

  useEffect(() => {
    const tempSizes = {
      width: sidenavElementRef.current.offsetWidth,
      height: sidenavElementRef.current.offsetHeight,
      marginTop: sidenavElementRef.current.offsetTop,
    };
    if (sidenavElementRef) setElementRef(tempSizes);
  }, [sidenavElementRef]);

  useEffect(() => {
    if (countertops && inputValueLargo) {
      const tempData = countertops.partsData;
      const tempDataLines = countertops.linesData;

      tempData[0].width = inputValueLargo;
      tempDataLines[0].xRef = inputValueLargo;

      tempDataLines[1].length = inputValueLargo;

      setCountertops({
        ...countertops,
        partsData: tempData,
        linesData: tempDataLines,
      });
    }

    if (countertops && inputValueAncho) {
      const tempData = countertops.partsData;
      const tempDataLines = countertops.linesData;

      tempData[0].height = inputValueAncho;
      tempDataLines[0].length = inputValueAncho;

      setCountertops({
        ...countertops,
        partsData: tempData,
        linesData: tempDataLines,
      });
    }
  }, [inputValueLargo, inputValueAncho]);

  return (
    <>
      <div id="ct-side-nav" ref={sidenavElementRef}>
        <h3>Encimeras</h3>

        {/* BUTTONS NAV MODELS */}
        <div id="nav-countertop">
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

          <div id="sidebar-right-features">
            <Row gutter={[8, 8]}>
              {_BUTTON_SQUARE_MODELS.map((item, index) => {
                return (
                  <Col
                    className="gutter-row"
                    span={6}
                    justify="space-between"
                    key={index}
                  >
                    <ButtonSquare
                      inputData={{
                        url: item.url,
                        img: item.img,
                        alt: item.alt,
                        title: item.title,
                      }}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>

        {/* CONTROLS */}
        <section id="ct-controls">
          {/*  SIZES CONTROLS */}
          <section className="ct-sizes-controls">
            <Typography.Title level={4} style={{ marginBottom: 10 }}>
              Dimensiones
            </Typography.Title>

            <Dropdown.Button
              menu={menuProps}
              trigger={["click"]}
              onClick={(e) => e.preventDefault()}
            >
              Selecciona una pieza
            </Dropdown.Button>

            <div>Largo</div>
            <Row>
              <Col span={12}>
                <Slider
                  min={100}
                  max={1500}
                  disabled={disabledInputSlider?.p1_width}
                  onChange={onChangeLargo}
                  value={
                    typeof inputValueLargo === "number" ? inputValueLargo : 100
                  }
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={100}
                  max={1500}
                  disabled={disabledInputSlider?.p1_width}
                  style={{ margin: "0 16px" }}
                  onChange={onChangeLargo}
                  value={inputValueLargo}
                />
              </Col>
            </Row>

            <div>Ancho</div>
            <Row>
              <Col span={12}>
                <Slider
                  min={100}
                  max={800}
                  disabled={disabledInputSlider?.p1_height}
                  onChange={onChangeAncho}
                  value={
                    typeof inputValueAncho === "number" ? inputValueAncho : 100
                  }
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={100}
                  max={800}
                  disabled={disabledInputSlider?.p1_height}
                  style={{ margin: "0 16px" }}
                  onChange={onChangeAncho}
                  value={inputValueAncho}
                />
              </Col>
            </Row>
          </section>

          {/*  CORNERS CONTROLS */}
          <section className="ct-corners-controls">
            <Typography.Title level={4} style={{ marginBottom: 10 }}>
              Esquinas
            </Typography.Title>

            <Space direction="vertical">
              <Row justify="space-between" align="middle">
                <Col span={10}>
                  <InputNumber
                    min={0}
                    max={1800}
                    addonBefore={<img src="/images/drawings/corner-TL.png" />}
                    disabled={cornersDisabled[0]}
                    onChange={(event) => onChangeCorners(event, 0)}
                    value={
                      Array.isArray(cornersState) &&
                      cornersState.length > 0 &&
                      cornersState[0] >= 0 &&
                      !cornersDisabled[0]
                        ? cornersState[0]
                        : 0
                    }
                  />
                </Col>
                <Col span={10}>
                  <InputNumber
                    min={0}
                    max={1800}
                    addonAfter={<img src="/images/drawings/corner-TR.png" />}
                    disabled={cornersDisabled[1]}
                    onChange={(event) => onChangeCorners(event, 1)}
                    value={
                      Array.isArray(cornersState) &&
                      cornersState.length > 0 &&
                      cornersState[1] >= 0 &&
                      !cornersDisabled[1]
                        ? cornersState[1]
                        : 0
                    }
                  />
                </Col>
              </Row>

              <Row justify="space-between" align="middle">
                <Col span={10}>
                  <InputNumber
                    min={0}
                    max={1800}
                    addonBefore={<img src="/images/drawings/corner-BL.png" />}
                    disabled={cornersDisabled[3]}
                    onChange={(event) => onChangeCorners(event, 3)}
                    value={
                      Array.isArray(cornersState) &&
                      cornersState.length > 0 &&
                      cornersState[3] >= 0 &&
                      !cornersDisabled[3]
                        ? cornersState[3]
                        : 0
                    }
                  />
                </Col>
                <Col span={10}>
                  <InputNumber
                    min={0}
                    max={1800}
                    addonAfter={<img src="/images/drawings/corner-BR.png" />}
                    disabled={cornersDisabled[2]}
                    onChange={(event) => onChangeCorners(event, 2)}
                    value={
                      Array.isArray(cornersState) &&
                      cornersState.length > 0 &&
                      cornersState[2] >= 0 &&
                      !cornersDisabled[2]
                        ? cornersState[2]
                        : 0
                    }
                  />
                </Col>
              </Row>
            </Space>
          </section>

          {/*  WORKS CONTROLS */}
          <section className="ct-assembly-controls">
            <Typography.Title level={4} style={{ marginBottom: 10 }}>
              Tipos de Trabajo
            </Typography.Title>

            <Flex gap="small" style={{ marginBottom: 10 }} wrap>
              <Button
                type="primary"
                onClick={(event) => handleClickAddWork(event)}
              >
                Agregar Trabajos
              </Button>
            </Flex>

            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          </section>

          {/*  ASSEMBLY CONTROLS */}
          <section className="ct-assembly-controls">
            <Typography.Title level={4} style={{ marginBottom: 10 }}>
              Tipo de Ensamble
            </Typography.Title>

            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Link to="#" className="assembly">
                  <img
                    src="/images/assembly/assembly-simple.png"
                    alt="Ensamblaje simple"
                    title="Ensamblaje simple"
                  />
                </Link>
              </Col>
              <Col span={8}>
                <Link to="#" className="assembly">
                  <img
                    src="/images/assembly/assembly-recto-chaflan.png"
                    alt="Ensamblaje recto chaflan"
                    title="Ensamblaje recto chaflan"
                  />
                </Link>
              </Col>
              <Col span={8}>
                <Link to="#" className="assembly">
                  <img
                    src="/images/assembly/assembly-diagonal.png"
                    alt="Ensamblaje ángulo variable"
                    title="Ensamblaje ángulo variable"
                  />
                </Link>
              </Col>
              <Col span={8}>
                <Link to="#" className="assembly">
                  <img
                    src="/images/assembly/assembly-noventa-grados.png"
                    alt="Ensamblaje ángulos de 90 grados"
                    title="Ensamblaje ángulos de 90 grados"
                  />
                </Link>
              </Col>
              <Col span={8}>
                <Link to="#" className="assembly">
                  <img
                    src="/images/assembly/assembly-recto.png"
                    alt="Ensamblaje en Recto"
                    title="Ensamblaje en Recto"
                  />
                </Link>
              </Col>
            </Row>
          </section>
        </section>
      </div>
    </>
  );
};

Sidebar.displayName = "Sidebar";
export default Sidebar;

Sidebar.propTypes = {
  setSidebarRightOpened: PropTypes.func,
};
