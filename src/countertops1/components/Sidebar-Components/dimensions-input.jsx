import { Button, Col, InputNumber, Row, Select, Space, Typography } from "antd";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import { SHAPE_TYPES } from "../../mocks/SHAPE_TYPES.const";
import { NO_PIEZAS } from "../../mocks/NO_PARTS.const";
import { useCustomURLHandler } from "../../helpers/location.hook";

function DimensionsInput(props) {
  const {
    inputValueLargo1,
    inputValueAncho1,
    setInputValueLargo1,
    setInputValueAncho1,
    inputValueLargo2,
    inputValueAncho2,
    setInputValueLargo2,
    setInputValueAncho2,
    inputValueLargo3,
    inputValueAncho3,
    setInputValueLargo3,
    setInputValueAncho3,
    // onSelectPiezaParent,
    countertops,
    getSelectedPieceCtx,
    onSetSelectedPieceCtx,
    getSelectedPieceValueCtx,
    getNumberOfPartsCtx,
    onUpdatePartDataCtx,
    updateCornersCtx,
    // onSetNumberOfPieceCtx,
  } = props;

  const _NO_PIEZAS = NO_PIEZAS;

  const { ATTRIB_SETTED } = useCustomURLHandler();

  const selectPieceRef = useRef(null);

  const input1SizeWidthRef = useRef(null);
  const input1SizeHeightRef = useRef(null);
  const input2SizeWidthRef = useRef(null);
  const input2SizeHeightRef = useRef(null);
  const input3SizeWidthRef = useRef(null);
  const input3SizeHeightRef = useRef(null);

  const [localWidth1, setLocalWidth1] = useState(inputValueLargo1);
  const [localHeight1, setLocalHeight1] = useState(inputValueAncho1);
  const [localWidth2, setLocalWidth2] = useState(inputValueLargo2);
  const [localHeight2, setLocalHeight2] = useState(inputValueAncho2);
  const [localWidth3, setLocalWidth3] = useState(inputValueLargo3);
  const [localHeight3, setLocalHeight3] = useState(inputValueAncho3);

  const [numeroPiezas, setNumeroPiezas] = useState([]);
  const [piezaSelected, setPiezaSelected] = useState(null);

  const onChangeLargo = (newValue, noPiece) => {
    const setterActionsOn = {
      P1: (nV) => setLocalWidth1(nV),
      P2: (nV) => setLocalWidth2(nV),
      P3: (nV) => setLocalWidth3(nV),
    };
    // setLocalWidth(newValue);
    if (
      countertops[ATTRIB_SETTED]?.shapeType == SHAPE_TYPES.SQUARE ||
      countertops[ATTRIB_SETTED]?.shapeType == SHAPE_TYPES.CIRCLE
    ) {
      setLocalHeight1(newValue);
    }
    setterActionsOn[noPiece](newValue);
  };

  const onChangeAncho = (newValue, noPiece) => {
    const setterActionsOn = {
      P1: (nV) => setLocalHeight1(nV),
      P2: (nV) => setLocalHeight2(nV),
      P3: (nV) => setLocalHeight3(nV),
    };
    // setLocalHeight(newValue);
    if (
      countertops[ATTRIB_SETTED]?.shapeType == SHAPE_TYPES.SQUARE ||
      countertops[ATTRIB_SETTED]?.shapeType == SHAPE_TYPES.CIRCLE
    ) {
      setLocalWidth1(newValue);
    }
    setterActionsOn[noPiece](newValue);
  };

  const onSelectPieza = (value) => {
    // if (!value || value == 7) {
    //   onSetSelectedPieceCtx(null);
    //   return null;
    // }

    if (value != piezaSelected?.value) {
      const pS = numeroPiezas.find((item) => {
        return item.value === value;
      });

      onSetSelectedPieceCtx(pS);

      selectPieceRef.current.blur();
    }
  };

  const handleSetSizesHelper = (index) => {
    if (index == 0) {
      const tempP1 = { ...countertops[ATTRIB_SETTED]?.partsData[index] };
      tempP1.width = localWidth1;
      tempP1.height = localHeight1;
      return tempP1;
    }
    if (index == 1) {
      const tempP2 = { ...countertops[ATTRIB_SETTED]?.partsData[index] };
      tempP2.width = localWidth2;
      tempP2.height = localHeight2;
      return tempP2;
    }
    if (index == 2) {
      const tempP3 = { ...countertops[ATTRIB_SETTED]?.partsData[index] };
      tempP3.width = localWidth3;
      tempP3.height = localHeight3;
      return tempP3;
    }
  };

  const handleSetSizes = (event = null) => {
    if (event) {
      event.preventDefault();
    }

    if (
      getNumberOfPartsCtx(ATTRIB_SETTED) > 0 &&
      localWidth1 > 0 &&
      localHeight1 > 0
    ) {
      if (countertops[ATTRIB_SETTED]?.shapeType == SHAPE_TYPES.CIRCLE) {
        const cornerSize = localWidth1 / 2;
        updateCornersCtx(
          [cornerSize, cornerSize, cornerSize, cornerSize],
          getSelectedPieceValueCtx()
        );
      }
      onUpdatePartDataCtx(0, handleSetSizesHelper(0));
    }

    if (
      getNumberOfPartsCtx(ATTRIB_SETTED) > 1 &&
      localWidth2 > 0 &&
      localHeight2 > 0
    ) {
      onUpdatePartDataCtx(1, handleSetSizesHelper(1));
    }

    if (
      getNumberOfPartsCtx(ATTRIB_SETTED) > 2 &&
      localWidth3 > 0 &&
      localHeight3 > 0
    ) {
      onUpdatePartDataCtx(2, handleSetSizesHelper(2));
    }
  };

  const onClearPieza = () => {
    onSetSelectedPieceCtx(null);
  };

  const onKeyUpHandle = (event, inputRef, sendData = false) => {
    event.preventDefault();

    if ((event.key === "Enter" || event.keyCode === 13) && !sendData) {
      inputRef.current.focus();
      inputRef.current.select();
    }

    if ((event.key === "Enter" || event.keyCode === 13) && sendData) {
      handleSetSizes(event);
      inputRef.current.focus();
      inputRef.current.select();
      // input1SizeHeightRef.current.blur();
    }
  };

  const onClickHandle = (event, inputRef, numberPieceToActive) => {
    if (getSelectedPieceValueCtx() != numberPieceToActive - 1) {
      onSelectPieza(numberPieceToActive);
    }

    inputRef.current.select();
  };

  const setDimensions = () => {
    setLocalWidth1(inputValueLargo1);
    setLocalHeight1(inputValueAncho1);
    setLocalWidth2(inputValueLargo2);
    setLocalHeight2(inputValueAncho2);
    setLocalWidth3(inputValueLargo3);
    setLocalHeight3(inputValueAncho3);
  };

  useEffect(() => {
    if (
      countertops?.numberOfPiece > 0 &&
      countertops[ATTRIB_SETTED]?.partsData?.length > 0
    ) {
      setNumeroPiezas(() => {
        return _NO_PIEZAS.filter((item) => {
          return item.value <= countertops[ATTRIB_SETTED]?.partsData?.length;
        });
      });
    } else {
      setNumeroPiezas(null);
    }
  }, [countertops?.numberOfPiece]);

  useEffect(() => {
    setDimensions();
    getSelectedPieceCtx()
      ? setPiezaSelected(getSelectedPieceCtx())
      : setPiezaSelected(null);
  }, [countertops?.selectedPiece]);

  useEffect(() => {
    setDimensions();
  }, [
    inputValueLargo1,
    inputValueAncho1,
    inputValueLargo2,
    inputValueAncho2,
    inputValueLargo3,
    inputValueAncho3,
  ]);

  useEffect(() => {
    setDimensions();
  }, []);

  // *** Return VIEW ****
  return (
    <>
      {/*  SIZES CONTROLS */}
      <section id="ct-sizes-input-component" className="ct-sizes-controls">
        <Typography.Title level={4} style={{ marginBottom: 10 }}>
          Dimensiones
          {piezaSelected && <i> ({piezaSelected?.label})</i>}
        </Typography.Title>

        <Space direction="vertical" style={{ width: "100%" }}>
          <Row justify="space-between" align="middle">
            <Col span={8} align="right" style={{ paddingRight: "8px" }}>
              <h5 title="Seleccionar pieza a trabajar">Seleccione -&gt;</h5>
            </Col>

            <Col span={12}>
              <Select
                style={{ width: "100%" }}
                allowClear
                ref={selectPieceRef}
                placeholder="Piezas"
                options={numeroPiezas}
                value={piezaSelected}
                title="Seleccionar pieza a trabajar"
                onSelect={(value) => onSelectPieza(value)}
                onClear={() => onClearPieza()}
                disabled={!numeroPiezas}
              />
            </Col>
            <Col span={4}>
              {!piezaSelected && (
                <img
                  title="Seleccionar pieza a trabajar"
                  className="img-select-hand"
                  src="/images/hand.gif"
                  alt="Empiece por aquí"
                  width="32"
                  height="32"
                />
              )}
            </Col>
          </Row>

          {/* <Row justify="space-between" align="middle">
            <Col span={6}>
              <span>Largo</span>
            </Col>
            <Col span={16}>
              <InputNumber
                ref={inputSizeWidthRef}
                min={100}
                max={3600}
                disabled={!piezaSelected}
                style={{ width: "100%" }}
                onChange={onChangeLargo}
                value={localWidth}
                onKeyUp={(e) => onKeyUpHandle(e, inputSizeHeightRef)}
                onClick={(e) => onClickHandle(e, inputSizeWidthRef)}
              />
            </Col>
          </Row> */}

          {/* INPUTS PIEZA 1 */}
          {/* <h5>Pieza 1</h5> */}
          {getNumberOfPartsCtx(ATTRIB_SETTED) > 0 && (
            <Row gutter={[8, 8]} justify="space-between" align="middle">
              {/* <Col span={8}>
              <span>Ancho</span>
            </Col> */}

              <Col className="gutter-row" span={8}>
                <InputNumber
                  ref={input1SizeWidthRef}
                  id={"input1SizeWidthRef"}
                  min={100}
                  max={3600}
                  // disabled={!(getSelectedPieceValueCtx() === 0)}
                  readOnly={!(getSelectedPieceValueCtx() === 0)}
                  style={{ width: "100%" }}
                  onChange={(event) => onChangeLargo(event, "P1")}
                  placeholder="Largo P1"
                  value={localWidth1}
                  onKeyUp={(e) => onKeyUpHandle(e, input1SizeHeightRef)}
                  onClick={(e) => onClickHandle(e, input1SizeWidthRef, 1)}
                />
              </Col>

              {/* {getSelectedPieceValueCtx() != 0 && (
                <Col className="gutter-row" span={8}>
                  <label
                    htmlFor={"input1SizeWidthRef"}
                    onClick={() => onSelectPieza(1)}
                  >
                    {localWidth1}
                  </label>
                </Col>
              )} */}

              <Col className="gutter-row" span={8}>
                <InputNumber
                  ref={input1SizeHeightRef}
                  min={100}
                  max={2800}
                  // disabled={!(getSelectedPieceValueCtx() === 0)}
                  readOnly={!(getSelectedPieceValueCtx() === 0)}
                  style={{ width: "100%" }}
                  onChange={(event) => onChangeAncho(event, "P1")}
                  placeholder="Ancho P1"
                  value={localHeight1}
                  onKeyUp={(e) => onKeyUpHandle(e, input1SizeWidthRef, true)}
                  onClick={(e) => onClickHandle(e, input1SizeHeightRef, 1)}
                />
              </Col>

              <Col className="gutter-row" span={8}>
                <Button
                  style={{ width: "100%" }}
                  disabled={!(getSelectedPieceValueCtx() === 0)}
                  type="primary"
                  onClick={(event) => handleSetSizes(event)}
                >
                  Pieza 1
                </Button>
              </Col>
            </Row>
          )}

          {/* INPUTS PIEZA 2 */}
          {/* <h5>Pieza 2</h5> */}
          {getNumberOfPartsCtx(ATTRIB_SETTED) > 1 && (
            <Row gutter={[8, 8]} justify="space-between" align="middle">
              {/* <Col span={8}>
              <span>Ancho</span>
            </Col> */}

              <Col className="gutter-row" span={8}>
                <InputNumber
                  ref={input2SizeWidthRef}
                  min={100}
                  max={3600}
                  // disabled={getSelectedPieceValueCtx() != 1}
                  readOnly={getSelectedPieceValueCtx() != 1}
                  style={{ width: "100%" }}
                  onChange={(event) => onChangeLargo(event, "P2")}
                  placeholder="Largo P2"
                  value={localWidth2}
                  onKeyUp={(e) => onKeyUpHandle(e, input2SizeHeightRef)}
                  onClick={(e) => onClickHandle(e, input2SizeWidthRef, 2)}
                />
              </Col>

              {/* {getSelectedPieceValueCtx() != 1 && (
                <Col className="gutter-row" span={8}>
                  <label
                    htmlFor={"input2SizeWidthRef"}
                    onClick={() => onSelectPieza(2)}
                  >
                    {localWidth2}
                  </label>
                </Col>
              )} */}

              <Col className="gutter-row" span={8}>
                <InputNumber
                  ref={input2SizeHeightRef}
                  min={100}
                  max={2800}
                  // disabled={getSelectedPieceValueCtx() != 1}
                  readOnly={getSelectedPieceValueCtx() != 1}
                  style={{ width: "100%" }}
                  onChange={(event) => onChangeAncho(event, "P2")}
                  placeholder="Ancho P2"
                  value={localHeight2}
                  onKeyUp={(e) => onKeyUpHandle(e, input2SizeWidthRef, true)}
                  onClick={(e) => onClickHandle(e, input2SizeHeightRef, 2)}
                />
              </Col>

              <Col className="gutter-row" span={8}>
                <Button
                  style={{ width: "100%" }}
                  disabled={getSelectedPieceValueCtx() != 1}
                  type="primary"
                  onClick={(event) => handleSetSizes(event)}
                >
                  Pieza 2
                </Button>
              </Col>
            </Row>
          )}

          {/* INPUTS PIEZA 3 */}
          {/* <h5>Pieza 3</h5> */}
          {getNumberOfPartsCtx(ATTRIB_SETTED) > 2 && (
            <Row gutter={[8, 8]} justify="space-between" align="middle">
              {/* <Col span={8}>
              <span>Ancho</span>
            </Col> */}

              <Col className="gutter-row" span={8}>
                <InputNumber
                  ref={input3SizeWidthRef}
                  min={100}
                  max={3600}
                  // disabled={getSelectedPieceValueCtx() != 2}
                  readOnly={getSelectedPieceValueCtx() != 2}
                  style={{ width: "100%" }}
                  onChange={(event) => onChangeLargo(event, "P3")}
                  placeholder="Largo P3"
                  value={localWidth3}
                  onKeyUp={(e) => onKeyUpHandle(e, input3SizeHeightRef)}
                  onClick={(e) => onClickHandle(e, input3SizeWidthRef, 3)}
                />
              </Col>

              {/* {getSelectedPieceValueCtx() != 2 && (
                <Col className="gutter-row" span={8}>
                  <label
                    htmlFor={"input3SizeWidthRef"}
                    onClick={() => onSelectPieza(3)}
                  >
                    {localWidth2}
                  </label>
                </Col>
              )} */}

              <Col className="gutter-row" span={8}>
                <InputNumber
                  ref={input3SizeHeightRef}
                  min={100}
                  max={2800}
                  // disabled={getSelectedPieceValueCtx() != 2}
                  readOnly={getSelectedPieceValueCtx() != 2}
                  style={{ width: "100%" }}
                  onChange={(event) => onChangeAncho(event, "P3")}
                  placeholder="Ancho P3"
                  value={localHeight3}
                  onKeyUp={(e) => onKeyUpHandle(e, input3SizeWidthRef, true)}
                  onClick={(e) => onClickHandle(e, input3SizeHeightRef, 3)}
                />
              </Col>

              <Col className="gutter-row" span={8}>
                <Button
                  style={{ width: "100%" }}
                  disabled={getSelectedPieceValueCtx() != 2}
                  type="primary"
                  onClick={(event) => handleSetSizes(event)}
                >
                  Pieza 3
                </Button>
              </Col>
            </Row>
          )}

          {/* <Row justify="center" align="middle">
            <Col span={16} offset={8}>
              <Button
                style={{ width: "100%" }}
                type="primary"
                onClick={(event) => handleSetSizes(event)}
              >
                Establecer
              </Button>
            </Col>
          </Row> */}
        </Space>
      </section>
    </>
  );
}
export default DimensionsInput;

DimensionsInput.propTypes = {
  inputValueAncho1: PropTypes.number,
  inputValueLargo1: PropTypes.number,
  setInputValueAncho1: PropTypes.func,
  setInputValueLargo1: PropTypes.func,
  inputValueAncho2: PropTypes.number,
  inputValueLargo2: PropTypes.number,
  setInputValueAncho2: PropTypes.func,
  setInputValueLargo2: PropTypes.func,
  inputValueAncho3: PropTypes.number,
  inputValueLargo3: PropTypes.number,
  setInputValueAncho3: PropTypes.func,
  setInputValueLargo3: PropTypes.func,
  onSelectPiezaParent: PropTypes.func,
  countertops: PropTypes.object,
  getSelectedPieceCtx: PropTypes.func,
  onSetSelectedPieceCtx: PropTypes.func,
  onSetNumberOfPieceCtx: PropTypes.func,
  getNumberOfPartsCtx: PropTypes.func,
  onUpdatePartDataCtx: PropTypes.func,
};
