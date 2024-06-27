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
import { DIRECTION } from "../mocks/LINES.const";
import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from "@ant-design/icons";
import { RectHelperCalcSizes } from "./Rect-Helpers/rect-helper";
import { useCustomURLHandler } from "../helpers/location.hook";

const Sidebar = ({ sidebarRightOpenedControl }) => {
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
    updateCornersCtx,
    deleteWorkInPieceCtx,
    deleteAllWorksInPieceCtx,
    onSetSelectedPieceCtx,
    onSetNumberOfPieceCtx,
    onUpdatePartDataCtx,
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
  const [worksFromAPiece, setWorksFromAPiece] = useState([]);

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

  const handleClickAddWork = (event) => {
    event.preventDefault();

    sidebarRightOpenedControl(true);
  };

  const handleClickDeleteAllWork = (event) => {
    event.preventDefault();

    deleteAllWorksInPieceCtx(getSelectedPieceValueCtx());
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
    const finalNewValue = [...cornersState];
    finalNewValue[position] = newValue;

    updateCornersCtx(finalNewValue, getSelectedPieceValueCtx());
  };

  const onChangeAllCorners = (newValue) => {
    setCornersState(newValue);
  };

  // const uppdateSizesAndLines = () => {
  //   if (countertops && inputValueLargo1 && inputValueAncho1) {
  //     let tempData =
  //       JSON.parse(JSON.stringify(countertops[ATTRIB_SETTED]?.partsData)) || [];
  //     let tempDataLines =
  //       JSON.parse(JSON.stringify(countertops[ATTRIB_SETTED]?.linesData)) || [];

  //     tempData[getSelectedPieceValueCtx()].width = inputValueLargo1;
  //     tempData[getSelectedPieceValueCtx()].height = inputValueAncho1;

  //     tempData = countertops[ATTRIB_SETTED]?.partsData || [];
  // const _piece = tempData[getSelectedPieceValueCtx()];

  // tempDataLines = tempDataLines.map((itemLine) => {
  //   if (itemLine.direction === DIRECTION.HORIZONTAL) {
  //     itemLine.text = inputValueLargo1;
  //     itemLine.length = _piece.realWidth;
  //   }

  //   if (itemLine.direction === DIRECTION.VERTICAL) {
  //     itemLine.text = inputValueAncho;
  //     itemLine.length = _piece.realHeight;
  //     itemLine.xRef = _piece.realWidth;
  //   }

  //   return itemLine;
  // });
  //   }
  // };

  const handleClickEditWork = (event) => {
    event.preventDefault();
  };

  const handleClickDeleteWork = (event, indexWork, indexPart) => {
    event.preventDefault();
    deleteWorkInPieceCtx(indexWork, indexPart.value - 1);
  };

  const onClickHandle = (event, inputRef) => {
    inputRef.current.select();
  };

  const selectingCornersToShow = (item) => {
    if (item.cornerPosition[0]) {
      return <RadiusUpleftOutlined />;
    }

    if (item.cornerPosition[1]) {
      return <RadiusUprightOutlined />;
    }

    if (item.cornerPosition[2]) {
      return <RadiusBottomrightOutlined />;
    }

    if (item.cornerPosition[3]) {
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

  // useEffect(() => {
  //   if (
  //     countertops[ATTRIB_SETTED]?.partsData[getSelectedPieceValueCtx()]
  //       ?.width &&
  //     countertops[ATTRIB_SETTED]?.partsData[getSelectedPieceValueCtx()]?.height
  //   ) {
  //     const tempFirstPartData =
  //       countertops[ATTRIB_SETTED]?.partsData[getSelectedPieceValueCtx()];

  //     setInputValueLargo1(tempFirstPartData.width);
  //     setInputValueAncho1(tempFirstPartData.height);
  //   }

  //   if (
  //     Array.isArray(
  //       countertops[ATTRIB_SETTED]?.partsData[getSelectedPieceValueCtx()]
  //         ?.cornerRadius
  //     ) &&
  //     countertops[ATTRIB_SETTED]?.partsData[getSelectedPieceValueCtx()]
  //       ?.cornerRadius?.length > 0
  //   ) {
  //     const tempArray =
  //       countertops[ATTRIB_SETTED]?.partsData[getSelectedPieceValueCtx()]
  //         ?.cornerRadius;

  //     setCornersState(tempArray);
  //   }
  // }, [
  //   countertops[ATTRIB_SETTED]?.partsData[getSelectedPieceValueCtx()]?.width,
  //   countertops[ATTRIB_SETTED]?.partsData[getSelectedPieceValueCtx()]?.height,
  // ]);

  // Hanlde Dimensions
  const maxWidth = 1120;
  const maxHeight = 700;

  // useEffect(() => {
  //   if (countertops) {
  //     const rectHelperCalcSizes = RectHelperCalcSizes(
  //       inputValueLargo1,
  //       inputValueAncho1,
  //       maxWidth,
  //       maxHeight
  //     );

  //     const tempPieceSelected = getSelectedPieceValueCtx();
  //     let tempPiece = countertops[ATTRIB_SETTED]?.partsData[tempPieceSelected];

  //     tempPiece = {
  //       ...tempPiece,
  //       width: inputValueLargo1,
  //       height: inputValueAncho1,
  //       realWidth: rectHelperCalcSizes.realWidth,
  //       realHeight: rectHelperCalcSizes.realHeight,
  //     };

  //     onUpdatePartDataCtx(tempPieceSelected, tempPiece);

  //     uppdateSizesAndLines();
  //   }
  // }, [inputValueLargo1, inputValueAncho1]);

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
  }, [countertops?.selectedPiece]);

  useEffect(() => {
    const tempSizes = {
      width: sidenavElementRef.current.offsetWidth,
      height: sidenavElementRef.current.offsetHeight,
      marginTop: sidenavElementRef.current.offsetTop,
    };
    if (sidenavElementRef) setElementRef(tempSizes);
  }, [sidenavElementRef]);

  // useEffect(() => {
  //   const _tempCorners =
  //     countertops[ATTRIB_SETTED]?.partsData[getSelectedPieceValueCtx()]
  //       ?.cornerRadiusProduction;
  //   if (_tempCorners) {
  //     onChangeAllCorners(_tempCorners);
  //   }
  // }, [
  //   countertops[ATTRIB_SETTED]?.partsData[getSelectedPieceValueCtx()]
  //     ?.cornerRadius,
  // ]);

  useEffect(() => {
    const tempW =
      countertops[ATTRIB_SETTED]?.partsData[getSelectedPieceValueCtx()]
        ?.works || worksFromAPiece;

    setWorksFromAPiece(Array.isArray(tempW) && tempW.length > 0 ? tempW : []);
  }, [countertops]);

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
          />

          {/*  CORNERS CONTROLS */}
          {getSelectedPieceCtx() && (
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
                      ref={inputCornerTLRef}
                      addonBefore={<img src="/images/drawings/corner-TL.png" />}
                      disabled={
                        !getSelectedPieceCtx().value || cornersDisabled[0]
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
                        !getSelectedPieceCtx()?.value || cornersDisabled[1]
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
                        !getSelectedPieceCtx()?.value || cornersDisabled[3]
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
                        !getSelectedPieceCtx()?.value || cornersDisabled[2]
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

          {/*  WORKS CONTROLS */}
          {getSelectedPieceCtx()?.value && false && (
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
                  worksFromAPiece.length > 0 &&
                  worksFromAPiece.map((item, index) => {
                    return (
                      <Card
                        size="small"
                        key={item.id}
                        type="inner"
                        title={item.title}
                        extra={
                          <Space direction="horizontal" size={8}>
                            <EditOutlined
                              onClick={(e) => handleClickEditWork(e)}
                              className="icon-card-actions"
                            />
                            <DeleteOutlined
                              onClick={(e) =>
                                handleClickDeleteWork(
                                  e,
                                  index,
                                  getSelectedPieceCtx()?.value
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
                  worksFromAPiece.length == 0 && (
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                  )}
              </Space>
            </section>
          )}

          {/*  ASSEMBLY CONTROLS */}
          {getSelectedPieceCtx()?.value && (
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
                        className={
                          item.selected ? "assembly active" : "assembly"
                        }
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
  sidebarRightOpenedControl: PropTypes.func,
};
