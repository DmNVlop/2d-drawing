import { Col, InputNumber, Row, Select, Space, Typography } from "antd";
import { useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";

import { SHAPE_TYPES } from "../../mocks/SHAPE_TYPES";
import { NO_PIEZAS } from "../../mocks/NO_PARTS.data";

function DimensionsInput({
  inputValueAncho,
  inputValueLargo,
  setInputValueAncho,
  setInputValueLargo,
  onSelectPiezaParent,
  countertops,
}) {
  const _NO_PIEZAS = NO_PIEZAS;

  const inputSizeWidthRef = useRef(null);
  const inputSizeHeightRef = useRef(null);

  const [numeroPiezas, setNumeroPiezas] = useState([]);
  const [piezaSelected, setPiezaSelected] = useState(null);

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

  const onClearPieza = () => {
    setPiezaSelected(null);

    setInputValueLargo(null);
    setInputValueAncho(null);
    onSelectPiezaParent(null);
  };

  const onKeyUpHandle = (event, inputRef) => {
    if (event.key === "Enter") {
      inputRef.current.focus();
      inputRef.current.select();
    }
  };

  const onClickHandle = (event, inputRef) => {
    // inputRef.current.focus();
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

    // if (countertops?.shapeType) {
    //   disabledSliderLogic(countertops.shapeType);
    // }
  }, [location, countertops?.shapeType]);

  // *** Return VIEW ****
  return (
    <>
      {/*  SIZES CONTROLS */}
      <section className="ct-sizes-controls">
        <Typography.Title level={4} style={{ marginBottom: 10 }}>
          Dimensiones
          {piezaSelected && <i> ({piezaSelected?.label})</i>}
        </Typography.Title>

        <Space direction="vertical">
          <Row justify="space-between" align="middle">
            <Col span={8}>
              <span>No. Pieza</span>
            </Col>

            <Col span={14}>
              <Select
                style={{ width: 120 }}
                allowClear
                options={numeroPiezas}
                value={piezaSelected}
                onSelect={(value) => onSelectPieza(value)}
                onClear={() => onClearPieza()}
                disabled={!countertops?.partsData?.length}
              />
            </Col>
          </Row>

          <Row justify="space-between" align="middle">
            <Col span={8}>
              <span>Largo</span>
            </Col>
            <Col span={16}>
              <InputNumber
                ref={inputSizeWidthRef}
                min={100}
                max={3600}
                disabled={!piezaSelected}
                style={{ margin: "0 16px" }}
                onChange={onChangeLargo}
                value={inputValueLargo}
                onKeyUp={(e) => onKeyUpHandle(e, inputSizeHeightRef)}
                onClick={(e) => onClickHandle(e, inputSizeWidthRef)}
              />
            </Col>
          </Row>

          <Row justify="space-between" align="middle">
            <Col span={8}>
              <span>Ancho</span>
            </Col>

            <Col span={16}>
              <InputNumber
                ref={inputSizeHeightRef}
                min={100}
                max={2800}
                disabled={!piezaSelected}
                style={{ margin: "0 16px" }}
                onChange={onChangeAncho}
                value={inputValueAncho}
                onKeyUp={(e) => onKeyUpHandle(e, inputSizeWidthRef)}
                onClick={(e) => onClickHandle(e, inputSizeHeightRef)}
              />
            </Col>
          </Row>
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
