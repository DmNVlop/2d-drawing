import "./sidebar-right.css";

import PropTypes from "prop-types";

import { Button, Col, Flex, Input, Row } from "antd";
import {
  CloseOutlined,
  ColumnHeightOutlined,
  ColumnWidthOutlined,
  RadiusSettingOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import ButtonSquare from "./Simple-Componentes/button-square";
import BUTTON_SQUARE_WORKS from "../mocks/WORKS_BUTTOMS.data";
import { WORKS_CORNERS } from "../mocks/WORKS_CORNERS.data";
import { useCountertopContext } from "../context/ct-context";
import { setWorksOnSelectRightBar } from "./CNC-Works/woks-calcs-logic";

function SidebarRight({ sidebarRightOpened, setSidebarRightOpened }) {
  const _WORKS_CORNERS = WORKS_CORNERS;

  const { countertops, updateCornersCtx } = useCountertopContext();

  const [_buttomSquareWorks, setButtomSquareWorks] =
    useState(BUTTON_SQUARE_WORKS);

  const [_worksCorners, setWorksCorners] = useState([]);

  const handleCloseSidebarRight = (event) => {
    event.preventDefault();
    setSidebarRightOpened(false);
  };

  const SetSelectedItems = (itemArray, index) => {
    itemArray = itemArray.map((item) => {
      item.selected = false;
      return item;
    });
    itemArray[index].selected = true;

    return itemArray;
  };

  const handleWorkClick = (item, index) => {
    setButtomSquareWorks((prev) => {
      let tempWorksClean = [...prev];
      return SetSelectedItems(tempWorksClean, index);
    });

    setWorksCorners(() => {
      const _work = _buttomSquareWorks.find(
        (item) => item.selected === true
      ).work;

      return _WORKS_CORNERS[_work].corners || [];
    });
  };

  const handleWorkCornerClick = (item, index) => {
    setWorksCorners((prev) => {
      let tempWorksCorners = [...prev];
      return SetSelectedItems(tempWorksCorners, index);
    });

    const _indexPiece = countertops?.selectedPiece?.value - 1 || 0;
    const _piece = countertops?.partsData[_indexPiece];
    const t = setWorksOnSelectRightBar(
      item,
      countertops?.selectedPiece,
      _piece
    );
    console.log("🚀 ~ handleWorkCornerClick ~ t:", t);

    updateCornersCtx(t.corners, _indexPiece, "SINGLE");
    updateCornersCtx(t.cornersProduction, _indexPiece, "PROD");
  };

  return (
    <>
      <div
        id="sidebar-right"
        className={sidebarRightOpened ? "" : "close-sidebar-right"}
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

        {/* BUTTOINS FEATURES */}
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
                  onClick={() => {
                    handleWorkClick(item, index);
                  }}
                >
                  <ButtonSquare
                    inputData={{
                      url: (e) => {
                        e.preventDefault();
                      },
                      img: item.img,
                      alt: item.alt,
                      title: item.title,
                    }}
                  />
                </Col>
              );
            })}
          </Row>

          {/* // Seleccionar esquinas o lados  */}
          {_worksCorners.length > 0 && (
            <div
              style={{ marginBottom: "16px" }}
              id="work-corner-select-section"
            >
              <dir style={{ marginBottom: "10px" }}>
                2. Seleccione esquina o lado...
              </dir>

              <Row gutter={[8, 8]}>
                {_worksCorners.map((item, index) => {
                  return (
                    <Col
                      span={12}
                      key={index}
                      className={
                        item.selected ? "gutter-row active" : "gutter-row"
                      }
                      onClick={() => {
                        handleWorkCornerClick(item, index);
                      }}
                    >
                      <ButtonSquare
                        inputData={{
                          url: (e) => {
                            e.preventDefault();
                          },
                          img: item.img,
                          alt: item.alt,
                          title: item.title,
                          className: item.selected ? "active" : "",
                        }}
                      />

                      {/* <Checkbox value="0">Fondo IZQ</Checkbox> */}
                    </Col>
                  );
                })}
              </Row>
            </div>
          )}

          {/* Seleccion de medidas */}
          {_worksCorners.length > 0 && (
            <div style={{ marginBottom: "16px" }}>
              <dir style={{ marginBottom: "10px" }}>
                3. Seleccione medidas...
              </dir>
              <Row gutter={[8, 8]}>
                <Col span={12}>
                  <Input placeholder="Largo" prefix={<ColumnWidthOutlined />} />
                </Col>
                <Col span={12}>
                  <Input
                    placeholder="Fondo"
                    prefix={<ColumnHeightOutlined />}
                  />
                </Col>
                <Col span={12}>
                  <Input
                    placeholder="Radio"
                    prefix={<RadiusSettingOutlined />}
                  />
                </Col>
              </Row>
            </div>
          )}

          {_worksCorners.length > 0 && (
            <div style={{ marginBottom: "16px" }}>
              <dir style={{ marginBottom: "10px" }}>4. Guardar trabajo</dir>
              <Flex gap="middle" align="start" vertical>
                <Flex justify={"flex-end"} align={"center"}>
                  <Button type="primary">Guardar</Button>
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
  sidebarRightOpened: PropTypes.bool,
  setSidebarRightOpened: PropTypes.func,
};
