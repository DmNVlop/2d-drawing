import { Button, Col, InputNumber, Row, Select, Space, Typography } from "antd";
import { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";

import { SHAPE_TYPES } from "../../mocks/SHAPE_TYPES";
import { NO_PIEZAS } from "../../mocks/NO_PARTS.data";

function DimensionsInput({
  inputValueLargo,
  inputValueAncho,
  setInputValueLargo,
  setInputValueAncho,
  onSelectPiezaParent,
  countertops,
}) {
  const _NO_PIEZAS = NO_PIEZAS;

  const inputSizeWidthRef = useRef(null);
  const inputSizeHeightRef = useRef(null);

  const [localWidth, setLocalWidth] = useState(inputValueLargo);
  const [localHeight, setLocalHeight] = useState(inputValueAncho);

  const [numeroPiezas, setNumeroPiezas] = useState([]);
  const [piezaSelected, setPiezaSelected] = useState(null);

  const onChangeLargo = (newValue) => {
    setLocalWidth(newValue);
    if (
      countertops?.shapeType == SHAPE_TYPES.SQUARE ||
      countertops?.shapeType == SHAPE_TYPES.CIRCLE
    ) {
      setLocalHeight(newValue);
    }
  };

  const onChangeAncho = (newValue) => {
    setLocalHeight(newValue);
    if (
      countertops?.shapeType == SHAPE_TYPES.SQUARE ||
      countertops?.shapeType == SHAPE_TYPES.CIRCLE
    ) {
      setLocalWidth(newValue);
    }
  };

  const onSelectPieza = (value) => {
    const pS = numeroPiezas.find((item) => {
      return item.value === value;
    });

    if (value > 0) {
      setInputValueLargo(countertops.partsData[value - 1].width);
      setInputValueAncho(countertops.partsData[value - 1].height);
    }

    setPiezaSelected(pS);
    onSelectPiezaParent(pS);
  };

  const handleSetSizes = (event) => {
    event.preventDefault();

    if (localWidth && localHeight) {
      setInputValueLargo(localWidth);
      setInputValueAncho(localHeight);
    }
  };

  const onClearPieza = () => {
    setPiezaSelected(null);

    setInputValueLargo(null);
    setInputValueAncho(null);
    onSelectPiezaParent(null);
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
      inputSizeHeightRef.current.blur();
    }
  };

  const onClickHandle = (event, inputRef) => {
    inputRef.current.select();
  };

  useMemo(() => {
    if (countertops && countertops?.partsData?.length > 0) {
      setNumeroPiezas(() => {
        return _NO_PIEZAS.filter((item) => {
          return item.value <= countertops?.partsData?.length;
        });
      });
    }
  }, [location, countertops?.shapeType]);

  useEffect(() => {
    setLocalWidth(inputValueLargo);
    setLocalHeight(inputValueAncho);
  }, [inputValueLargo, inputValueAncho]);

  // *** Return VIEW ****
  return (
    <>
      {/*  SIZES CONTROLS */}
      <section className="ct-sizes-controls">
        <Typography.Title level={4} style={{ marginBottom: 10 }}>
          Dimensiones
          {piezaSelected && <i> ({piezaSelected?.label})</i>}
        </Typography.Title>

        <Space direction="vertical" style={{ width: "100%" }}>
          <Row justify="space-between" align="middle">
            <Col span={8}>
              <span title="Seleccionar pieza a trabajar">Seleccione...</span>
            </Col>

            <Col span={12}>
              <Select
                style={{ width: "100%" }}
                allowClear
                placeholder="Piezas"
                options={numeroPiezas}
                value={piezaSelected}
                title="Seleccionar pieza a trabajar"
                onSelect={(value) => onSelectPieza(value)}
                onClear={() => onClearPieza()}
                disabled={!countertops?.partsData?.length}
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

          <Row gutter={[8, 8]} justify="space-between" align="middle">
            {/* <Col span={8}>
              <span>Ancho</span>
            </Col> */}

            <Col className="gutter-row" span={8}>
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

            <Col className="gutter-row" span={8}>
              <InputNumber
                ref={inputSizeHeightRef}
                min={100}
                max={2800}
                disabled={!piezaSelected}
                style={{ width: "100%" }}
                onChange={onChangeAncho}
                value={localHeight}
                onKeyUp={(e) => onKeyUpHandle(e, inputSizeWidthRef, true)}
                onClick={(e) => onClickHandle(e, inputSizeHeightRef)}
              />
            </Col>

            <Col className="gutter-row" span={8}>
              <Button
                style={{ width: "100%" }}
                type="primary"
                onClick={(event) => handleSetSizes(event)}
              >
                Establecer
              </Button>
            </Col>
          </Row>

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
  inputValueAncho: PropTypes.number,
  inputValueLargo: PropTypes.number,
  setInputValueAncho: PropTypes.func,
  setInputValueLargo: PropTypes.func,
  onSelectPiezaParent: PropTypes.func,
  countertops: PropTypes.object,
};
