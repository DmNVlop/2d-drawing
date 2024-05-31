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
  Typography,
  Space,
  Flex,
  Button,
  Empty,
} from "antd";
import { INPUT_DISABLED_LOGIC } from "../mocks/SHAPE_TYPES";
import ButtonSquare from "./Simple-Componentes/button-square";
import BUTTON_SQUARE_MODELS from "../const/button-square-models.const";
import { ASSEMBLY_DATA } from "../mocks/ASSEMBLY_DATA";
import DimensionsInput from "./Sidebar-Components/dimensions-input";

const Sidebar = ({ sidebarRightOpenedControl }) => {
  const location = useNavigate();

  const _BUTTON_SQUARE_MODELS = BUTTON_SQUARE_MODELS;
  // const _ASSEMBLY_DATA = ASSEMBLY_DATA;

  // Context
  const sidenavElementRef = useRef(null);
  const { setElementRef } = useElementRefContext();
  const { countertops, setCountertops } = useCountertopContext();

  // Length and Width State
  const [inputValueLargo, setInputValueLargo] = useState(null);
  const [inputValueAncho, setInputValueAncho] = useState(null);

  // Corners State
  const [cornersState, setCornersState] = useState([]);
  const [cornersDisabled, setCornersDisabled] = useState([1, 1, 1, 1]);

  // Disabled Input State
  const [disabledInputSlider, setDisabledInputSlider] =
    useState(INPUT_DISABLED_LOGIC);

  // ASSEMBLY DATA State
  const [_assemblyData, setAssemblyData] = useState(ASSEMBLY_DATA);

  // Pieza Selected
  const [piezaSelectedParent, setPiezaSelectedParent] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const configModal = {
    title: "Ensamblaje Simple",
    content: (
      <>
        <h2>Ensamblaje Simple</h2>
        <p>Ensamblaje de dos piezas en angulo de 90 grados.</p>
      </>
    ),
  };

  const onSelectPiezaParent = (piezaSelected) => {
    setPiezaSelectedParent(piezaSelected);
  };

  const handleClickWork = (workType, event) => {
    event.preventDefault();

    // if (workType === WORKS_TYPES.CCCHAFLAN) {
    //   const temp = { ...countertops.partsData[0].works };
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

  const handleAssemblyClick = (item, index) => {
    setAssemblyData((prev) => {
      let tempAssemblyClean = [...prev];
      tempAssemblyClean = tempAssemblyClean.map((item) => {
        item.selected = false;
        return item;
      });
      tempAssemblyClean[index].selected = true;
      return tempAssemblyClean;
    });
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

  useEffect(() => {
    if (countertops?.partsData[0]?.cornerRadiusDisabled) {
      setCornersDisabled(countertops?.partsData[0]?.cornerRadiusDisabled);
    }
  }, [piezaSelectedParent]);

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

      tempData[piezaSelectedParent?.value - 1 || 0].width = inputValueLargo;
      tempDataLines[piezaSelectedParent?.value - 1 || 0].xRef =
        tempData[piezaSelectedParent?.value - 1 || 0].realWidth;

      tempDataLines[piezaSelectedParent?.value || 1].length =
        tempData[piezaSelectedParent?.value - 1 || 0].realWidth;

      console.log(
        "🚀 ~ useEffect ~ tempData[piezaSelectedParent?.value - 1 || 0].realWidth:",
        tempData[piezaSelectedParent?.value - 1 || 0].realWidth
      );

      setCountertops({
        ...countertops,
        partsData: tempData,
        linesData: tempDataLines,
      });
    }

    if (countertops && inputValueAncho) {
      const tempData = countertops.partsData;
      const tempDataLines = countertops.linesData;

      console.log(
        "🚀 ~ useEffect ~ ANCHO[piezaSelectedParent?.value - 1 || 0]:",
        tempData[piezaSelectedParent?.value - 1]
      );

      tempData[piezaSelectedParent?.value - 1 || 0].height = inputValueAncho;
      tempDataLines[piezaSelectedParent?.value - 1 || 0].length =
        tempData[piezaSelectedParent?.value - 1 || 0].realHeight;

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
          <DimensionsInput
            inputValueAncho={inputValueAncho}
            inputValueLargo={inputValueLargo}
            setInputValueAncho={setInputValueAncho}
            setInputValueLargo={setInputValueLargo}
            onSelectPiezaParent={onSelectPiezaParent}
          />

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
                    disabled={!piezaSelectedParent || cornersDisabled[0]}
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
                    disabled={!piezaSelectedParent || cornersDisabled[1]}
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
                    disabled={!piezaSelectedParent || cornersDisabled[3]}
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
                    disabled={!piezaSelectedParent || cornersDisabled[2]}
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
                disabled={!piezaSelectedParent}
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
            {/* 
            <Modal
              title="Ensamblaje Simple!"
              open={isModalOpen}
              onOk={handleOk}
            >
              <p>Description del Assembly...</p>
              <p>FIGURE...</p>
              <p>Some Footer...</p>
            </Modal> */}

            <Row gutter={[16, 16]}>
              {_assemblyData.map((item, index) => {
                return (
                  <Col span={8} key={index}>
                    <Link
                      to={(e) => {
                        e.preventDefault();
                      }}
                      onClick={() => handleAssemblyClick(item, index)}
                      className={item.selected ? "assembly active" : "assembly"}
                    >
                      <img src={item.src} alt={item.alt} title={item.title} />
                    </Link>
                  </Col>
                );
              })}
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
  sidebarRightOpenedControl: PropTypes.func,
};
