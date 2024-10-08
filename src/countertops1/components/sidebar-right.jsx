import "./sidebar-right.css";

import PropTypes from "prop-types";

import {
  Button,
  Checkbox,
  Col,
  Flex,
  Form,
  Input,
  message,
  Radio,
  Row,
  Space,
  Typography,
} from "antd";
import {
  ArrowDownOutlined,
  ArrowsAltOutlined,
  CloseOutlined,
  ColumnHeightOutlined,
  ColumnWidthOutlined,
  RadiusSettingOutlined,
  ToTopOutlined,
  VerticalAlignBottomOutlined,
} from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import BUTTON_SQUARE_WORKS from "../mocks/WORKS_BUTTOMS.data";
import { WORKS_CORNERS } from "../mocks/WORKS_CORNERS.data";
import { useCountertopContext } from "../context/ct-context";
import { setCcredinSizes } from "./CNC-Works/woks-calcs-logic";
import { WORKS_TYPES } from "../mocks/WORKS.types";
import ButtonSquareJobs from "./Simple-Componentes/buttom-square-jobs";
import { useCustomURLHandler } from "../helpers/location.hook";

function SidebarRight() {
  const { Text } = Typography;
  const _WORKS_CORNERS = WORKS_CORNERS;

  const [formSizesRightBar] = Form.useForm();

  const inputRightBarWidthRef = useRef(null);
  const inputRightBarHeightRef = useRef(null);
  const inputRightBarRadiusRef = useRef(null);
  const inputRightBarSeparacionRef = useRef(null);
  const inputRightBarPosicionRef = useRef(null);
  const inputRightBarGrifoDiametroRef = useRef(null);
  const inputRightBarGrifoSeparationRef = useRef(null);

  const { ATTRIB_SETTED } = useCustomURLHandler();

  const {
    countertops,
    getSelectedPieceCtx,
    getSelectedPieceValueCtx,
    getIndexWorkOnPieceIfExistCtx,
    updateCornersCtx,
    updateWorkInPieceCtx,
    getIdCtx,
    setSidebarRightOpenedCtx,
    deleteWorkInPieceByFilterCtx,
    sidebarRightOpenedCtx,
  } = useCountertopContext();

  const [_buttomSquareWorks, setButtomSquareWorks] =
    useState(BUTTON_SQUARE_WORKS);

  const [_worksCorners, setWorksCorners] = useState([]);

  const [workSelected, setWorkSelected] = useState(null);
  const [workCornerSelected, setWorkCornerSelected] = useState(null);

  const [widthInput, setWidthInput] = useState(null);
  const [heightInput, setHeightInput] = useState(null);
  const [radiusInput, setRadiusInput] = useState(null);
  const [frontLengthInput, setFrontLengthInput] = useState(70);
  const [positionLengthInput, setPositionLengthInput] = useState(0);
  const [positionFromInput, setPositionFromInput] = useState(1); // "1: left" | "2: right"
  const [hasWaterTapInput, setHasWaterTapInput] = useState(false); // boolean
  const [tapPositionInput, setTapPositionInput] = useState(2); // "left" | "center" | "right"
  const [tapDiameterInput, setTapDiameterInput] = useState(25);
  const [tapSeparationInput, setTapSeparationInput] = useState(50);

  const handleCloseSidebarRight = (event) => {
    event.preventDefault();
    onCloseBtn();
  };

  const SetSelectedItems = (itemArray, index, cornerIndexReal) => {
    itemArray = itemArray.map((item) => {
      item.selected = false;
      return item;
    });
    itemArray[index].selected = true;

    return itemArray;
  };

  const handleWorkClick = (e, item, index) => {
    e.preventDefault();
    setButtomSquareWorks((prev) => {
      let tempWorksClean = [...prev];
      const tempArray = SetSelectedItems(tempWorksClean, index);
      setWorkSelected(tempArray[index]);
      return tempArray;
    });

    setWorksCorners(() => {
      const _work = _buttomSquareWorks.find(
        (item) => item.selected === true
      ).type;

      if (!_work) return [];

      const cornersToReturn = _WORKS_CORNERS[_work].corners.map((item) => {
        return { ...item, selected: false };
      });

      return cornersToReturn;
    });

    setWorkCornerSelected(null);
  };

  const handleWorkCornerClick = (item, cornerIndex = -1) => {
    const cornerIndexReal = () => {
      return cornerIndex === 2 ? 3 : cornerIndex === 3 ? 2 : cornerIndex;
    };

    const isCornerRadiusDisabled =
      countertops[ATTRIB_SETTED]?.partsData[getSelectedPieceValueCtx()]
        ?.cornerRadiusDisabled[cornerIndexReal()];

    if (isCornerRadiusDisabled && item.code !== "ccred4lados-clear") return;

    if (cornerIndex >= 0) {
      setWorksCorners((prev) => {
        const tempWorksCorners = SetSelectedItems(
          [...prev],
          cornerIndex,
          cornerIndexReal()
        );
        setWorkCornerSelected(tempWorksCorners[cornerIndex]);
        return tempWorksCorners;
      });
    }
  };

  const showSizesInputValidate = (arrayItemsRole) => {
    return true;
  };

  const onClickHandleSelectText = (event, inputRef) => {
    inputRef.current.select();
  };

  const onCloseBtn = (e = null) => {
    e ? e.preventDefault() : null;
    if (formSizesRightBar) {
      formSizesRightBar.resetFields();
    }

    setWidthInput(null);
    setHeightInput(null);
    setRadiusInput(null);
    setWorksCorners([]);
    setButtomSquareWorks((prev) => {
      return prev.map((item) => {
        item.selected = false;
        return item;
      });
    });
    setSidebarRightOpenedCtx(false);

    setWorkSelected(null);
    setWorkCornerSelected(null);
  };

  const modifyRedINObject = (currentItem) => {
    const objToReturn = [];

    currentItem.cornerPosition.forEach((item, index) => {
      if (item) {
        const tArr = [0, 0, 0, 0];
        tArr[index] = 1;

        const currectOB = {
          url: "#",
          img: "#",
          alt: "Corte Redondo",
          title: "Corte Redondo",
          code: WORKS_TYPES.CCRED1LADO,
          cornerPosition: tArr,
          type: WORKS_TYPES.CCRED1LADO,
          id: getIdCtx(),
        };
        objToReturn.push({
          ...item,
          ...currectOB,
        });
      }
    });

    return objToReturn || [];
  };

  const handleSetWork = (e) => {
    e.preventDefault();

    const _piece =
      countertops[ATTRIB_SETTED]?.partsData[getSelectedPieceValueCtx()];
    const currentItem =
      workSelected.type == WORKS_TYPES.ENCASTRE
        ? { ...workSelected }
        : { ...workCornerSelected };

    // Validar esquina seleccionada
    if (!workCornerSelected && workSelected.type != WORKS_TYPES.ENCASTRE) {
      console.log("🚧 No hay esquina seleccionada");
      message.warning({
        content: "No hay esquina seleccionada...🚧",
        duration: 2,
      });
      return;
    }

    // -- CCRED
    // limpiar esquinas
    if (
      currentItem.type == WORKS_TYPES.CCRED4LADOS &&
      currentItem.code == "ccred4lados-clear"
    ) {
      updateCornersCtx([0, 0, 0, 0], getSelectedPieceValueCtx());

      currentItem.cornerPosition = [1, 1, 1, 1];
      const finalCurrentObject = modifyRedINObject(currentItem);
      if (Array.isArray(finalCurrentObject) && finalCurrentObject?.length > 0) {
        const indexArrayToDelete = [];
        finalCurrentObject.forEach((workToSave) => {
          indexArrayToDelete.push(getIndexWorkOnPieceIfExistCtx(workToSave));
        });

        if (
          Array.isArray(indexArrayToDelete) &&
          indexArrayToDelete.length > 0
        ) {
          deleteWorkInPieceByFilterCtx(indexArrayToDelete);
        }
      }
    }

    // settear esquinas REDIN
    if (
      (currentItem.type == WORKS_TYPES.CCRED2LADOS ||
        currentItem.type == WORKS_TYPES.CCRED4LADOS) &&
      currentItem.code != "ccred4lados-clear"
    ) {
      const t = setCcredinSizes(currentItem, getSelectedPieceCtx(), _piece);

      updateCornersCtx(t.corners, getSelectedPieceValueCtx());
    }

    // -- CCCHAFLAN
    if (currentItem.type == WORKS_TYPES.CCCHAFLAN) {
      // Validar
      currentItem.id = getIdCtx();
      currentItem.width = widthInput;
      currentItem.height = heightInput;

      if (
        workCornerSelected == null ||
        !currentItem.width ||
        !currentItem.height
      ) {
        console.log(
          "🚧 Faltan datos en el formulario: ",
          WORKS_TYPES.CCCHAFLAN
        );
        message.warning({
          content:
            "Faltan datos en el formulario: " + WORKS_TYPES.CCCHAFLAN + " 🚧",
          duration: 2,
        });
        return;
      }

      updateWorkInPieceCtx(currentItem, getSelectedPieceValueCtx());
    }

    // -- CCFALESC
    if (currentItem.type == WORKS_TYPES.CCFALESC) {
      currentItem.id = getIdCtx();
      currentItem.width = widthInput;
      currentItem.height = null;

      if (!workCornerSelected || !currentItem.width) {
        console.log("🚧 Faltan datos en el formulario: ", WORKS_TYPES.CCFALESC);
        message.warning(
          "🚧 Faltan datos en el formulario: " + WORKS_TYPES.CCFALESC
        );
        return;
      }

      updateWorkInPieceCtx(currentItem, getSelectedPieceValueCtx());
    }

    // -- CCRECIN
    if (currentItem.type == WORKS_TYPES.CCRECIN) {
      currentItem.id = getIdCtx();
      currentItem.width = widthInput;
      currentItem.height = heightInput;

      if (!workCornerSelected || !currentItem.width || !currentItem.height) {
        console.log("🚧 Faltan datos en el formulario: ", WORKS_TYPES.CCRECIN);
        message.warning(
          "🚧 Faltan datos en el formulario: " + WORKS_TYPES.CCRECIN
        );
        return;
      }

      updateWorkInPieceCtx(currentItem, getSelectedPieceValueCtx());
    }

    // -- ENCASTRES
    // Validar
    if (currentItem.type == WORKS_TYPES.ENCASTRE) {
      currentItem.id = getIdCtx();
      currentItem.width = widthInput;
      currentItem.height = heightInput;

      if (
        !widthInput ||
        !heightInput ||
        radiusInput === "" ||
        frontLengthInput === "" ||
        !positionLengthInput ||
        !positionFromInput ||
        (hasWaterTapInput &&
          (!tapPositionInput || !tapDiameterInput || !tapSeparationInput))
      ) {
        console.log("🚧 Faltan datos en el formulario: ", WORKS_TYPES.ENCASTRE);
        message.warning(
          "🚧 Faltan datos en el formulario: " + WORKS_TYPES.ENCASTRE
        );
        return;
      }

      const encastreAddData = {
        width: widthInput, // size
        height: heightInput, // size
        radius: radiusInput, // number
        frontLength: frontLengthInput, // size
        positionLength: positionLengthInput, // size
        positionFrom: positionFromInput, // "left 1" | "right 2"
        hasWaterTap: hasWaterTapInput, // boolean
        tapPosition: tapPositionInput, // "left" | "center" | "right"
        tapDiameter: tapDiameterInput / 2, // number
        tapSeparation: tapSeparationInput / 2, // number
      };

      const currentItem_encastre = { ...currentItem, ...encastreAddData };

      updateWorkInPieceCtx(currentItem_encastre, getSelectedPieceValueCtx());
    }
  };

  const handleWidthInputChange = (e) => {
    e.preventDefault();
    setWidthInput(Number(parseFloat(e.target.value)));
  };

  const handleHeightInputChange = (e) => {
    e.preventDefault();
    setHeightInput(Number(parseFloat(e.target.value)));
  };

  const handleRadiusInputChange = (e) => {
    e.preventDefault();
    setRadiusInput(Number(parseFloat(e.target.value)));
  };

  const handleSeparacionChange = (e) => {
    e.preventDefault();
    setFrontLengthInput(Number(parseFloat(e.target.value)));
  };

  const handlePositionLengthChange = (e) => {
    e.preventDefault();
    setPositionLengthInput(Number(parseFloat(e.target.value)));
  };

  const handlePositionFromRadioChange = (e) => {
    e.preventDefault();
    setPositionFromInput(Number(parseFloat(e.target.value)));
  };

  const handleTapPositionChange = (e) => {
    e.preventDefault();
    setTapPositionInput(Number(parseFloat(e.target.value)));
  };

  const handleTapDiameterChange = (e) => {
    e.preventDefault();
    setTapDiameterInput(Number(parseFloat(e.target.value)));
  };

  const handleTapSeparationChange = (e) => {
    e.preventDefault();
    setTapSeparationInput(Number(parseFloat(e.target.value)));
  };

  const showRightBarWidthInput = (_workSelected) => {
    const validOptions = {
      [WORKS_TYPES.CCCHAFLAN]: true,
      [WORKS_TYPES.CCFALESC]: true,
      [WORKS_TYPES.CCRECIN]: true,
      [WORKS_TYPES.ENCASTRE]: true,
    };

    return validOptions[_workSelected.type] || false;
  };

  const showRightBarHeightInput = (_workSelected) => {
    const validOptions = {
      [WORKS_TYPES.CCCHAFLAN]: true,
      [WORKS_TYPES.CCRECIN]: true,
      [WORKS_TYPES.ENCASTRE]: true,
    };

    return validOptions[_workSelected.type] || false;
  };

  const showRightBarRadiusInput = (_workSelected) => {
    const validOptions = {
      [WORKS_TYPES.ENCASTRE]: true,
    };

    return validOptions[_workSelected.type] || false;
  };

  const showRightBarSeparacionInput = (_workSelected) => {
    const validOptions = {
      [WORKS_TYPES.ENCASTRE]: true,
    };

    return validOptions[_workSelected.type] || false;
  };

  const handleEnableGrifo = (e) => {
    setHasWaterTapInput(e.target.checked);
  };

  useEffect(() => {
    setWorksCorners([]);

    if (!countertops?.selectedPiece) {
      onCloseBtn();
    }
  }, [countertops?.selectedPiece]);

  return (
    <>
      <div
        id="sidebar-right"
        className={sidebarRightOpenedCtx ? "" : "close-sidebar-right"}
      >
        {/* TITLE */}
        <div className="title-specifications" style={{ marginBottom: "16px" }}>
          <Row gutter={[16]} justify="space-between" align={"middle"}>
            <Col className="gutter-row" span={18}>
              <h3>Especificaciones</h3>
            </Col>

            <Col className="gutter-row" span={6} align="right">
              <Button
                icon={<CloseOutlined />}
                onClick={(event) => {
                  handleCloseSidebarRight(event);
                }}
              />
            </Col>
          </Row>
        </div>

        {/* BUTTONS FEATURES */}
        <div id="sidebar-right-features">
          {/* Seleccion de trabajos */}
          <dir style={{ marginBottom: "10px" }}>
            1. Seleccione un trabajo...
          </dir>
          <Row
            gutter={[8, 8]}
            style={{ marginBottom: "16px" }}
            id="work-select-section"
          >
            {_buttomSquareWorks.map((item, index) => {
              return (
                <Col
                  className={
                    item.selected ? "gutter-row" : "gutter-row opacity-works"
                  }
                  span={6}
                  justify="space-between"
                  key={index}
                  onClick={(event) => {
                    handleWorkClick(event, item, index);
                  }}
                >
                  <ButtonSquareJobs
                    inputData={{
                      item: item,
                      img: item.img,
                      alt: item.alt,
                      title: item.title,
                      worksCorners: _worksCorners,
                    }}
                  />
                </Col>
              );
            })}
          </Row>

          {/* Seleccion de medidas */}
          {_worksCorners.length > 0 && showSizesInputValidate([]) && (
            <div style={{ marginBottom: "16px" }}>
              <div style={{ marginBottom: "10px" }}>
                2. Seleccione medidas...
              </div>
              <Form form={formSizesRightBar} name="control-hooks">
                <Row gutter={[8, 8]}>
                  {showRightBarWidthInput(workSelected) && (
                    <Col span={12}>
                      <Form.Item name={"Width"} style={{ marginBottom: 0 }}>
                        <Input
                          ref={inputRightBarWidthRef}
                          onClick={(e) =>
                            onClickHandleSelectText(e, inputRightBarWidthRef)
                          }
                          placeholder="Largo"
                          title="Largo"
                          min={50}
                          max={3600}
                          prefix={<ColumnWidthOutlined />}
                          onChange={(e) => {
                            handleWidthInputChange(e);
                          }}
                        />
                      </Form.Item>
                    </Col>
                  )}

                  {showRightBarHeightInput(workSelected) && (
                    <Col span={12}>
                      <Form.Item name={"Height"} style={{ marginBottom: 0 }}>
                        <Input
                          ref={inputRightBarHeightRef}
                          onClick={(e) =>
                            onClickHandleSelectText(e, inputRightBarHeightRef)
                          }
                          placeholder="Fondo"
                          title="Fondo"
                          min={50}
                          max={3600}
                          prefix={<ColumnHeightOutlined />}
                          onChange={(e) => {
                            handleHeightInputChange(e);
                          }}
                        />
                      </Form.Item>
                    </Col>
                  )}

                  {showRightBarRadiusInput(workSelected) && (
                    <Col span={12}>
                      <Form.Item
                        name={"BorderRadio"}
                        style={{ marginBottom: 0 }}
                      >
                        <Input
                          ref={inputRightBarRadiusRef}
                          onClick={(e) =>
                            onClickHandleSelectText(e, inputRightBarRadiusRef)
                          }
                          placeholder="Radio del Borde"
                          title="Radio del Borde"
                          min={20}
                          max={120}
                          prefix={<RadiusSettingOutlined />}
                          onChange={(e) => {
                            handleRadiusInputChange(e);
                          }}
                        />
                      </Form.Item>
                    </Col>
                  )}

                  {showRightBarSeparacionInput(workSelected) && (
                    <Col span={12}>
                      <Form.Item
                        name={"SeparacionFrente"}
                        initialValue={frontLengthInput}
                        style={{ marginBottom: 0 }}
                      >
                        <Input
                          ref={inputRightBarSeparacionRef}
                          onClick={(e) =>
                            onClickHandleSelectText(
                              e,
                              inputRightBarSeparacionRef
                            )
                          }
                          placeholder="Separacion Frente"
                          title="Separacion Frente"
                          min={0}
                          max={3600}
                          prefix={<VerticalAlignBottomOutlined />}
                          onChange={(e) => {
                            handleSeparacionChange(e);
                          }}
                        />
                      </Form.Item>
                    </Col>
                  )}

                  {showRightBarSeparacionInput(workSelected) && (
                    <Col span={24}>
                      <h5>Posicion</h5>
                    </Col>
                  )}

                  {showRightBarSeparacionInput(workSelected) && (
                    <Col span={12}>
                      <Form.Item name={"Posicion"} style={{ marginBottom: 0 }}>
                        <Input
                          ref={inputRightBarPosicionRef}
                          onClick={(e) =>
                            onClickHandleSelectText(e, inputRightBarPosicionRef)
                          }
                          placeholder="Posicion"
                          title="Posicion"
                          min={50}
                          max={3600}
                          prefix={<ColumnWidthOutlined />}
                          onChange={(e) => {
                            handlePositionLengthChange(e);
                          }}
                        />
                      </Form.Item>
                    </Col>
                  )}

                  {showRightBarSeparacionInput(workSelected) && (
                    <Col span={12}>
                      <Form.Item
                        name={"PosicionRadio"}
                        initialValue={positionFromInput}
                        style={{ marginBottom: 0 }}
                      >
                        <Radio.Group onChange={handlePositionFromRadioChange}>
                          <Space direction="vertical">
                            <Radio value={1}>D/Izquierda</Radio>
                            <Radio value={2}>D/Derecha</Radio>
                          </Space>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                  )}

                  {showRightBarSeparacionInput(workSelected) && (
                    <>
                      <Col span={4}>
                        <h5>Grifo</h5>
                      </Col>

                      <Col span={20}>
                        <Checkbox
                          checked={hasWaterTapInput}
                          onChange={handleEnableGrifo}
                        >
                          Habilitar Grifo
                        </Checkbox>
                      </Col>
                    </>
                  )}

                  {showRightBarSeparacionInput(workSelected) &&
                    hasWaterTapInput && (
                      <>
                        <Col span={24}>
                          <Form.Item
                            name={"GrifoRadio"}
                            initialValue={tapPositionInput}
                            style={{ marginBottom: 0 }}
                          >
                            <Radio.Group onChange={handleTapPositionChange}>
                              <Space direction="horizontal">
                                <Radio value={1}>Izquierda</Radio>
                                <Radio value={2}>Centro</Radio>
                                <Radio value={3}>Derecha</Radio>
                              </Space>
                            </Radio.Group>
                          </Form.Item>
                        </Col>

                        <Col span={12}>
                          <Form.Item
                            name={"GrifoDiametro"}
                            initialValue={tapDiameterInput}
                            style={{ marginBottom: 0 }}
                          >
                            <Input
                              ref={inputRightBarGrifoDiametroRef}
                              onClick={(e) =>
                                onClickHandleSelectText(
                                  e,
                                  inputRightBarGrifoDiametroRef
                                )
                              }
                              placeholder="Grifo Diametro"
                              title="Grifo Diametro"
                              min={10}
                              max={120}
                              prefix={<ArrowsAltOutlined />}
                              onChange={handleTapDiameterChange}
                            />
                          </Form.Item>
                        </Col>

                        <Col span={12}>
                          <Form.Item
                            name={"GrifoSeparation"}
                            initialValue={tapSeparationInput}
                            style={{ marginBottom: 0 }}
                          >
                            <Input
                              ref={inputRightBarGrifoSeparationRef}
                              onClick={(e) =>
                                onClickHandleSelectText(
                                  e,
                                  inputRightBarGrifoSeparationRef
                                )
                              }
                              placeholder="Grifo, Separacion del Encastre"
                              title="Grifo, Separacion del Encastre"
                              min={0}
                              max={200}
                              prefix={<ToTopOutlined />}
                              onChange={handleTapSeparationChange}
                            />
                          </Form.Item>
                        </Col>
                      </>
                    )}
                </Row>
              </Form>

              {!showRightBarWidthInput(workSelected) &&
                !showRightBarHeightInput(workSelected) &&
                !showRightBarRadiusInput(workSelected) && (
                  <Text code>
                    Nada que mostrar. Continue <ArrowDownOutlined />
                  </Text>
                )}
            </div>
          )}

          {/* // Seleccionar esquinas o lados  */}
          {_worksCorners.length > 0 &&
            workSelected.type != WORKS_TYPES.ENCASTRE && (
              <div
                style={{ marginBottom: "16px" }}
                id="work-corner-select-section"
              >
                <dir style={{ marginBottom: "10px" }}>
                  3. Seleccione esquina o lado...
                </dir>

                <Row
                  gutter={[12, 8]}
                  justify="space-evenly"
                  style={{
                    marginBottom: "16px",
                    textAlign: "center !important",
                  }}
                >
                  {_worksCorners.map((item, index) => {
                    return (
                      <Col
                        key={index}
                        span={10}
                        offset={2}
                        className={
                          item.selected ? "gutter-row active" : "gutter-row"
                        }
                        onClick={() => {
                          handleWorkCornerClick(item, index);
                        }}
                      >
                        <ButtonSquareJobs
                          inputData={{
                            item: item,
                            cornerIndex: index,
                            img: item.img,
                            alt: item.alt,
                            title: item.title,
                            className: item.selected ? "active" : "",
                            worksCorners: _worksCorners,
                          }}
                        />
                      </Col>
                    );
                  })}
                </Row>
              </div>
            )}

          {_worksCorners.length > 0 && (
            <div style={{ marginBottom: "16px" }}>
              <Flex vertical gap="small" style={{ width: "100%" }}>
                <Button type="primary" onClick={handleSetWork}>
                  Establecer
                </Button>
              </Flex>

              <br />

              <hr
                style={{
                  marginBottom: "16px",
                  border: "none",
                  borderTop: "2px solid #dddddd",
                }}
              />

              {/* <dir style={{ marginBottom: "10px" }}>
                Guardar trabajo en la pieza
              </dir> */}
              <Flex gap="middle" align="start" vertical>
                <Flex justify={"flex-end"} align={"center"}>
                  <Button onClick={onCloseBtn}>Cerrar</Button>
                </Flex>
              </Flex>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SidebarRight;

SidebarRight.propTypes = {
  // sidebarRightOpened: PropTypes.bool,
  // setSidebarRightOpened: PropTypes.func,
};
