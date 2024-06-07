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
import { ASSEMBLY_DATA } from "../mocks/ASSEMBLY_DATA";
import DimensionsInput from "./Sidebar-Components/dimensions-input";
import { DIRECTION_TYPES } from "../mocks/LINES_CONST";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

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
    setCountertops,
    updateCornersCtx,
    deleteWorkInPieceCtx,
  } = useCountertopContext();

  // Length and Width State
  const [inputValueLargo, setInputValueLargo] = useState(null);
  const [inputValueAncho, setInputValueAncho] = useState(null);

  // Trabajos de una pieza
  const [worksFromAPiece, setWorksFromAPiece] = useState([]);

  // Corners State
  const [cornersState, setCornersState] = useState([0, 0, 0, 0]);
  // const [cornersRealState, setCornersRealState] = useState([0, 0, 0, 0]);
  const [cornersDisabled, setCornersDisabled] = useState([1, 1, 1, 1]);

  // ASSEMBLY DATA State
  const [_assemblyData, setAssemblyData] = useState(ASSEMBLY_DATA);

  // Pieza Selected
  const [piezaSelectedParent, setPiezaSelectedParent] = useState(null);

  const onSelectPiezaParent = (piezaSelected) => {
    setPiezaSelectedParent(piezaSelected);

    setCountertops((prev) => {
      let tempPrev = { ...prev };
      tempPrev.selectedPiece = piezaSelected;
      return tempPrev;
    });
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
    const _indexPiece = countertops.selectedPiece.value - 1;

    setCornersState((prev) => {
      const tempArray = [...prev];
      tempArray[position] = newValue;

      updateCornersCtx(tempArray, _indexPiece, "SINGLE");
      updateCornersCtx(tempArray, _indexPiece, "PROD");

      // setCountertops((prev) => {
      //   const t = { ...prev };
      //   t.partsData[0].cornerRadius = tempArray;
      //   return t;
      // });

      return tempArray;
    });
  };

  const onChangeAllCorners = (newValue) => {
    setCornersState((prev) => {
      // setCountertops((prev) => {
      //   const t = { ...prev };
      //   t.partsData[0].cornerRadius = tempArray;
      //   return t;
      // });

      return [...newValue];
    });
  };

  const uppdateSizesAndLines = () => {
    if (countertops && inputValueLargo && inputValueAncho) {
      const tempData = [...(countertops?.partsData || [])];
      let tempDataLines = [...(countertops?.linesData || [])];

      tempData[piezaSelectedParent?.value - 1 || 0].width = inputValueLargo;
      tempData[piezaSelectedParent?.value - 1 || 0].height = inputValueAncho;

      const _piece = tempData[piezaSelectedParent?.value - 1 || 0];
      tempDataLines = tempDataLines.map((itemLine) => {
        if (itemLine.direction === DIRECTION_TYPES.HORIZONTAL) {
          itemLine.text = inputValueLargo;
          itemLine.length = _piece.realWidth;
        }

        if (itemLine.direction === DIRECTION_TYPES.VERTICAL) {
          itemLine.text = inputValueAncho;
          itemLine.length = _piece.realHeight;
          itemLine.xRef = _piece.realWidth;
        }

        return itemLine;
      });

      // fnCalcLinesValues(width, height, realWidth, realHeight, direction, level);

      setCountertops({
        ...countertops,
        partsData: tempData,
        linesData: tempDataLines,
      });
    }
  };

  const handleClickEditWork = (event) => {
    event.preventDefault();
  };

  const handleClickDeleteWork = (event, indexWork, indexPart) => {
    event.preventDefault();
    deleteWorkInPieceCtx(indexWork, indexPart.value - 1);
  };

  const onClickHandle = (event, inputRef) => {
    // inputRef.current.focus();
    inputRef.current.select();
  };

  useMemo(() => {
    if (
      countertops?.partsData[piezaSelectedParent?.value - 1 || 0]?.width &&
      countertops?.partsData[piezaSelectedParent?.value - 1 || 0]?.height
    ) {
      const tempFirstPartData =
        countertops.partsData[piezaSelectedParent?.value - 1 || 0];

      setInputValueLargo(tempFirstPartData.width);
      setInputValueAncho(tempFirstPartData.height);

      setTimeout(() => {
        uppdateSizesAndLines();
      }, 1);
    }

    if (
      Array.isArray(
        countertops?.partsData[piezaSelectedParent?.value - 1 || 0]
          ?.cornerRadius
      ) &&
      countertops?.partsData[piezaSelectedParent?.value - 1 || 0]?.cornerRadius
        ?.length > 0
    ) {
      const tempArray =
        countertops?.partsData[piezaSelectedParent?.value - 1 || 0]
          ?.cornerRadius;

      setCornersState(tempArray);
    }
  }, [
    countertops?.partsData[piezaSelectedParent?.value - 1 || 0]?.width,
    countertops?.partsData[piezaSelectedParent?.value - 1 || 0]?.height,
  ]);

  useMemo(() => {
    uppdateSizesAndLines();
  }, [inputValueLargo, inputValueAncho]);

  useEffect(() => {
    if (
      countertops?.partsData[piezaSelectedParent?.value - 1 || 0]
        ?.cornerRadiusDisabled
    ) {
      setCornersDisabled(
        countertops?.partsData[piezaSelectedParent?.value - 1 || 0]
          ?.cornerRadiusDisabled
      );
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
    const _tempCorners =
      countertops?.partsData[piezaSelectedParent?.value - 1 || 0]
        ?.cornerRadiusProduction;
    if (_tempCorners) {
      onChangeAllCorners(_tempCorners);
    }
  }, [
    countertops?.partsData[piezaSelectedParent?.value - 1 || 0]?.cornerRadius,
  ]);

  useEffect(() => {
    const tempW =
      countertops?.partsData[piezaSelectedParent?.value - 1 || 0]?.works ||
      worksFromAPiece;

    if (Array.isArray(tempW) && tempW.length > 0) {
      setWorksFromAPiece(tempW);
    }
  }, [countertops]);

  return (
    <>
      <div id="ct-side-nav" ref={sidenavElementRef}>
        <h3>Encimeras</h3>

        {/* BUTTONS NAV MODELS */}
        <div id="nav-countertop">
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
            countertops={countertops}
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
                    ref={inputCornerTLRef}
                    addonBefore={<img src="/images/drawings/corner-TL.png" />}
                    disabled={!piezaSelectedParent || cornersDisabled[0]}
                    onChange={(event) => onChangeCorners(event, 0)}
                    onClick={(e) => onClickHandle(e, inputCornerTLRef)}
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
                    ref={inputCornerTRRef}
                    addonAfter={<img src="/images/drawings/corner-TR.png" />}
                    disabled={!piezaSelectedParent || cornersDisabled[1]}
                    onChange={(event) => onChangeCorners(event, 1)}
                    onClick={(e) => onClickHandle(e, inputCornerTRRef)}
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
                    ref={inputCornerBLRef}
                    addonBefore={<img src="/images/drawings/corner-BL.png" />}
                    disabled={!piezaSelectedParent || cornersDisabled[3]}
                    onChange={(event) => onChangeCorners(event, 3)}
                    onClick={(e) => onClickHandle(e, inputCornerBLRef)}
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
                    ref={inputCornerBRRef}
                    addonAfter={<img src="/images/drawings/corner-BR.png" />}
                    disabled={!piezaSelectedParent || cornersDisabled[2]}
                    onChange={(event) => onChangeCorners(event, 2)}
                    onClick={(e) => onClickHandle(e, inputCornerBRRef)}
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

            <Space direction="vertical" size={8} style={{ width: "100%" }}>
              {/* <Flex gap="small" wrap> */}
              <Button
                type="primary"
                style={{ marginBottom: "8px" }}
                onClick={(event) => handleClickAddWork(event)}
                disabled={!piezaSelectedParent}
              >
                Agregar Trabajos
              </Button>
              {/* </Flex> */}

              {piezaSelectedParent &&
                worksFromAPiece.length > 0 &&
                worksFromAPiece.map((item, index) => {
                  return (
                    <Card
                      size="small"
                      key={index}
                      type="inner"
                      title={item.type}
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
                                piezaSelectedParent
                              )
                            }
                            className="icon-card-actions"
                          />
                        </Space>
                      }
                    >
                      <p>
                        {item.width} x {item.height} (mm)
                      </p>
                    </Card>
                  );
                })}

              {piezaSelectedParent && worksFromAPiece.length == 0 && (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              )}
            </Space>
          </section>

          {/*  ASSEMBLY CONTROLS */}
          {piezaSelectedParent && (
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
          <div>Acciones</div>
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
