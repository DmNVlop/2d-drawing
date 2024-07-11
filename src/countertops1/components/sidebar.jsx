import "./sidebar.css";

import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
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
  Button,
  Empty,
  Card,
} from "antd";
import ButtonSquare from "./Simple-Componentes/button-square";
import BUTTON_SQUARE_MODELS from "../const/button-square-models.const";
import { ASSEMBLY_DATA } from "../mocks/ASSEMBLY_DATA.const";
import DimensionsInput from "./Sidebar-Components/dimensions-input";
import {
  ClearOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from "@ant-design/icons";
import { useCustomURLHandler } from "../helpers/location.hook";
import { SHAPE_TYPES } from "../mocks/SHAPE_TYPES.const";

const Sidebar = () => {
  const _BUTTON_SQUARE_MODELS = BUTTON_SQUARE_MODELS;

  // Context
  const sidenavElementRef = useRef(null);

  const inputCornerTLRef = useRef(null);
  const inputCornerTRRef = useRef(null);
  const inputCornerBLRef = useRef(null);
  const inputCornerBRRef = useRef(null);

  const { setElementRef } = useElementRefContext();
  const {
    countertops,
    // setCountertops,
    getSelectedPieceCtx,
    getSelectedPieceValueCtx,
    getNumberOfPartsCtx,
    setOpacityOnPiecesCtx,
    updateCornersCtx,
    deleteWorkInPieceCtx,
    deleteAllWorksInPieceCtx,
    onSetSelectedPieceCtx,
    onSetNumberOfPieceCtx,
    onUpdatePartDataCtx,
    sidebarRightOpenedCtx,
    setSidebarRightOpenedCtx,
  } = useCountertopContext();

  const { ATTRIB_SETTED } = useCustomURLHandler();

  // Length and Width State
  const [inputValueLargo1, setInputValueLargo1] = useState(
    countertops[ATTRIB_SETTED]?.partsData[0]?.width || null
  );
  const [inputValueAncho1, setInputValueAncho1] = useState(
    countertops[ATTRIB_SETTED]?.partsData[0]?.height || null
  );

  const [inputValueLargo2, setInputValueLargo2] = useState(
    countertops[ATTRIB_SETTED]?.partsData[1]?.width || null
  );
  const [inputValueAncho2, setInputValueAncho2] = useState(
    countertops[ATTRIB_SETTED]?.partsData[1]?.height || null
  );

  const [inputValueLargo3, setInputValueLargo3] = useState(
    countertops[ATTRIB_SETTED]?.partsData[2]?.width || null
  );
  const [inputValueAncho3, setInputValueAncho3] = useState(
    countertops[ATTRIB_SETTED]?.partsData[2]?.height || null
  );

  // Trabajos de una pieza
  // const [worksFromAPiece, setWorksFromAPiece] = useState([]);

  // Corners State
  const [cornersState, setCornersState] = useState([0, 0, 0, 0]);
  const [cornersDisabled, setCornersDisabled] = useState([1, 1, 1, 1]);

  // ASSEMBLY DATA State
  const [_assemblyData, setAssemblyData] = useState(ASSEMBLY_DATA);

  const onSelectPiezaParent = (piezaSelected) => {
    // setCountertops((prev) => {
    //   let tempPrev = { ...prev };
    //   tempPrev.selectedPiece = piezaSelected;
    //   return tempPrev;
    // });
  };

  const handleClickAddWork = (e) => {
    e.preventDefault();

    setSidebarRightOpenedCtx(true);
  };

  const handleClickDeleteAllWork = (event) => {
    event.preventDefault();

    deleteAllWorksInPieceCtx(getSelectedPieceValueCtx());
  };

  const handleAssemblyClick = (event, item, index) => {
    event.preventDefault();
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

  const onChangeCorners = (newValue = 0, position = null) => {
    const finalNewValue = [...cornersState];
    finalNewValue[position] = newValue ? newValue : 0;

    updateCornersCtx(finalNewValue, getSelectedPieceValueCtx());
  };

  const handleClickResetAllCorners = () => {
    if (ATTRIB_SETTED == "circle") return;
    updateCornersCtx([0, 0, 0, 0], getSelectedPieceValueCtx());
  };

  const onChangeAllCorners = (newValue) => {
    setCornersState(newValue);
  };

  const handleClickEditWork = (e) => {
    e.preventDefault();
  };

  const handleClickDeleteWork = (e, indexWork, indexPart) => {
    e.preventDefault();
    deleteWorkInPieceCtx(indexWork, indexPart);
  };

  const onClickHandle = (event, inputRef) => {
    inputRef.current.select();
  };

  const selectingCornersToShow = (item) => {
    if (
      !item ||
      item == undefined ||
      !item.cornerPosition ||
      Array.isArray(item.cornerPosition) == false
    ) {
      console.log("⚠️ Faltó seleccion de esquina");
      return;
    }
    if (item?.cornerPosition[0]) {
      return <RadiusUpleftOutlined />;
    }

    if (item?.cornerPosition[1]) {
      return <RadiusUprightOutlined />;
    }

    if (item?.cornerPosition[2]) {
      return <RadiusBottomrightOutlined />;
    }

    if (item?.cornerPosition[3]) {
      return <RadiusBottomleftOutlined />;
    }
  };

  const setSizes = () => {
    setInputValueLargo1(
      countertops[ATTRIB_SETTED]?.partsData[0]?.width || null
    );
    setInputValueAncho1(
      countertops[ATTRIB_SETTED]?.partsData[0]?.height || null
    );

    setInputValueLargo2(
      countertops[ATTRIB_SETTED]?.partsData[1]?.width || null
    );
    setInputValueAncho2(
      countertops[ATTRIB_SETTED]?.partsData[1]?.height || null
    );

    setInputValueLargo3(
      countertops[ATTRIB_SETTED]?.partsData[2]?.width || null
    );
    setInputValueAncho3(
      countertops[ATTRIB_SETTED]?.partsData[2]?.height || null
    );
  };

  const activateByWorkSelected = () => {
    const {
      SIMPLE,
      SQUARE,
      CIRCLE,
      LShaped_l1,
      LShaped_l2,
      UShaped_u1,
      UShaped_u2,
      UShaped_u3,
      UShaped_u4,
    } = SHAPE_TYPES;
    if (
      ATTRIB_SETTED == LShaped_l1 ||
      ATTRIB_SETTED == LShaped_l2 ||
      ATTRIB_SETTED == UShaped_u1 ||
      ATTRIB_SETTED == UShaped_u2 ||
      ATTRIB_SETTED == UShaped_u3 ||
      ATTRIB_SETTED == UShaped_u4
    ) {
      return true;
    }
    return false;
  };

  // Hanlde Dimensions
  const maxWidth = 1120;
  const maxHeight = 700;

  useMemo(() => {
    const tempCorners =
      countertops[ATTRIB_SETTED]?.partsData[getSelectedPieceValueCtx()]
        ?.cornerRadius;
    if (Array.isArray(tempCorners) && tempCorners.length > 0) {
      setCornersState(
        countertops[ATTRIB_SETTED]?.partsData[getSelectedPieceValueCtx()]
          .cornerRadius
      );
    }
  }, [
    countertops[ATTRIB_SETTED]?.partsData[getSelectedPieceValueCtx()]
      ?.cornerRadius,
  ]);

  useEffect(() => {
    if (
      countertops[ATTRIB_SETTED]?.partsData[getSelectedPieceValueCtx()]
        ?.cornerRadiusDisabled
    ) {
      setCornersDisabled(
        countertops[ATTRIB_SETTED]?.partsData[getSelectedPieceValueCtx()]
          ?.cornerRadiusDisabled
      );
    }

    setOpacityOnPiecesCtx(getSelectedPieceValueCtx());
  }, [countertops?.selectedPiece]);

  useEffect(() => {
    const handleResize = () => {
      if (sidenavElementRef) {
        setElementRef({
          width: sidenavElementRef.current.offsetWidth,
          height: sidenavElementRef.current.offsetHeight,
          marginTop: sidenavElementRef.current.offsetTop,
        });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setSizes();
  }, [ATTRIB_SETTED, countertops[ATTRIB_SETTED]?.partsData]);

  return (
    <>
      <div id="ct-side-nav" ref={sidenavElementRef}>
        <h3>Encimeras</h3>

        {/* BUTTONS NAV MODELS */}
        <div id="nav-countertop">
          <h5>Seleccione modelo</h5>

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
            inputValueAncho1={inputValueAncho1}
            inputValueLargo1={inputValueLargo1}
            setInputValueAncho1={setInputValueAncho1}
            setInputValueLargo1={setInputValueLargo1}
            inputValueAncho2={inputValueAncho2}
            inputValueLargo2={inputValueLargo2}
            setInputValueAncho2={setInputValueAncho2}
            setInputValueLargo2={setInputValueLargo2}
            inputValueAncho3={inputValueAncho3}
            inputValueLargo3={inputValueLargo3}
            setInputValueAncho3={setInputValueAncho3}
            setInputValueLargo3={setInputValueLargo3}
            onSelectPiezaParent={onSelectPiezaParent}
            countertops={countertops}
            getSelectedPieceCtx={getSelectedPieceCtx}
            getSelectedPieceValueCtx={getSelectedPieceValueCtx}
            onSetSelectedPieceCtx={onSetSelectedPieceCtx}
            onSetNumberOfPieceCtx={onSetNumberOfPieceCtx}
            getNumberOfPartsCtx={getNumberOfPartsCtx}
            onUpdatePartDataCtx={onUpdatePartDataCtx}
            updateCornersCtx={updateCornersCtx}
          />

          {/*  CORNERS CONTROLS */}
          {getSelectedPieceCtx() && (
            <section className="ct-corners-controls">
              <Row justify="space-between">
                <Col span={18}>
                  <Typography.Title level={4} style={{ marginBottom: 10 }}>
                    Esquinas Redondas
                  </Typography.Title>
                </Col>
                <Col span={6} align="right">
                  <Button
                    icon={<ClearOutlined />}
                    style={{ marginBottom: "8px" }}
                    onClick={handleClickResetAllCorners}
                    disabled={
                      !getSelectedPieceCtx()?.value || ATTRIB_SETTED == "circle"
                    }
                    title="Borrar todas las esquinas"
                  ></Button>
                </Col>
              </Row>

              <Space direction="vertical">
                <Row justify="space-between" align="middle">
                  <Col span={10}>
                    <InputNumber
                      min={0}
                      max={1800}
                      ref={inputCornerTLRef}
                      addonBefore={<img src="/images/drawings/corner-TL.png" />}
                      disabled={
                        !getSelectedPieceCtx().value ||
                        cornersDisabled[0] ||
                        ATTRIB_SETTED == "circle"
                      }
                      onChange={(event) => onChangeCorners(event, 0)}
                      onClick={(e) => onClickHandle(e, inputCornerTLRef)}
                      value={
                        Array.isArray(cornersState) &&
                        cornersState.length > 0 &&
                        cornersState[0] >= 0
                          ? cornersState[0]
                          : 0
                      }
                    />
                  </Col>
                  <Col span={10}>
                    <InputNumber
                      min={0}
                      max={1800}
                      ref={inputCornerTRRef}
                      addonAfter={<img src="/images/drawings/corner-TR.png" />}
                      disabled={
                        !getSelectedPieceCtx()?.value ||
                        cornersDisabled[1] ||
                        ATTRIB_SETTED == "circle"
                      }
                      onChange={(event) => onChangeCorners(event, 1)}
                      onClick={(e) => onClickHandle(e, inputCornerTRRef)}
                      value={
                        Array.isArray(cornersState) &&
                        cornersState.length > 0 &&
                        cornersState[1] >= 0
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
                      ref={inputCornerBLRef}
                      addonBefore={<img src="/images/drawings/corner-BL.png" />}
                      disabled={
                        !getSelectedPieceCtx()?.value ||
                        cornersDisabled[3] ||
                        ATTRIB_SETTED == "circle"
                      }
                      onChange={(event) => onChangeCorners(event, 3)}
                      onClick={(e) => onClickHandle(e, inputCornerBLRef)}
                      value={
                        Array.isArray(cornersState) &&
                        cornersState.length > 0 &&
                        cornersState[3] >= 0
                          ? cornersState[3]
                          : 0
                      }
                    />
                  </Col>
                  <Col span={10}>
                    <InputNumber
                      min={0}
                      max={1800}
                      ref={inputCornerBRRef}
                      addonAfter={<img src="/images/drawings/corner-BR.png" />}
                      disabled={
                        !getSelectedPieceCtx()?.value ||
                        cornersDisabled[2] ||
                        ATTRIB_SETTED == "circle"
                      }
                      onChange={(event) => onChangeCorners(event, 2)}
                      onClick={(e) => onClickHandle(e, inputCornerBRRef)}
                      value={
                        Array.isArray(cornersState) &&
                        cornersState.length > 0 &&
                        cornersState[2] >= 0
                          ? cornersState[2]
                          : 0
                      }
                    />
                  </Col>
                </Row>
              </Space>
            </section>
          )}

          {/* WORKS CONTROLS */}
          {getSelectedPieceCtx()?.value && (
            <section className="ct-assembly-controls">
              <Typography.Title level={4} style={{ marginBottom: 10 }}>
                Tipos de Trabajo
              </Typography.Title>

              <Space direction="vertical" size={8} style={{ width: "100%" }}>
                <Row justify="space-between">
                  <Col span={12}>
                    <Button
                      type="primary"
                      icon={<PlusOutlined />}
                      style={{ marginBottom: "8px" }}
                      onClick={(event) => handleClickAddWork(event)}
                      disabled={!getSelectedPieceCtx()?.value}
                      title="Agregar trabajos"
                    >
                      Agregar
                    </Button>
                  </Col>
                  <Col span={12} align="right">
                    <Button
                      icon={<DeleteOutlined />}
                      style={{ marginBottom: "8px" }}
                      onClick={(event) => handleClickDeleteAllWork(event)}
                      disabled={!getSelectedPieceCtx()?.value}
                      title="Borrar todos los trabajos"
                    ></Button>
                  </Col>
                </Row>

                {getSelectedPieceCtx()?.value &&
                  countertops[ATTRIB_SETTED]?.partsData[
                    getSelectedPieceValueCtx()
                  ]?.works?.length > 0 &&
                  countertops[ATTRIB_SETTED]?.partsData[
                    getSelectedPieceValueCtx()
                  ]?.works.map((item, index) => {
                    return (
                      <Card
                        size="small"
                        key={item.id}
                        type="inner"
                        title={item.title}
                        extra={
                          <Space direction="horizontal" size={8}>
                            <EditOutlined
                              onClick={handleClickEditWork}
                              className="icon-card-actions"
                            />
                            <DeleteOutlined
                              onClick={(e) =>
                                handleClickDeleteWork(
                                  e,
                                  index,
                                  getSelectedPieceValueCtx()
                                )
                              }
                              className="icon-card-actions"
                            />
                          </Space>
                        }
                      >
                        <Row justify="space-between" align="middle">
                          <Col span={10}>
                            <p>
                              {item?.width}
                              {item?.height && <span>x</span>}
                              {item?.height} (mm)
                            </p>
                          </Col>
                          <Col span={10} style={{ textAlign: "right" }}>
                            {selectingCornersToShow(item)}
                          </Col>
                        </Row>
                      </Card>
                    );
                  })}

                {getSelectedPieceCtx()?.value &&
                  countertops[ATTRIB_SETTED]?.partsData[
                    getSelectedPieceValueCtx()
                  ]?.works?.length == 0 && (
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                  )}
              </Space>
            </section>
          )}

          {/* ASSEMBLY CONTROLS */}
          {/* {getSelectedPieceCtx()?.value && activateByWorkSelected() && ( */}
          {activateByWorkSelected() && (
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
                  const assemblyIndex = `assembly-${index}`;
                  return (
                    <Col span={8} key={assemblyIndex}>
                      <Link
                        to={(e) => {
                          e.preventDefault();
                        }}
                        onClick={(e) => handleAssemblyClick(e, item, index)}
                        className={
                          item.selected ? "assembly active" : "assembly"
                        }
                        style={{ opacity: item.selected ? 1 : 0.5 }}
                      >
                        <img src={item.src} alt={item.alt} title={item.title} />
                      </Link>
                    </Col>
                  );
                })}
              </Row>
            </section>
          )}
        </section>

        <section id="nav-countertop">
          {/* <div>Acciones</div> */}
          <Typography.Title level={4}>Acciones</Typography.Title>
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
        </section>
      </div>
    </>
  );
};

Sidebar.displayName = "Sidebar";
export default Sidebar;

Sidebar.propTypes = {
  // sidebarRightOpenedControl: PropTypes.func,
};
