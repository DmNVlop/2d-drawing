import "./sidebar-right.css";

import PropTypes from "prop-types";

import { Button, Col, Row } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import ButtonSquare from "./Simple-Componentes/button-square";

import BUTTON_SQUARE_WORKS from "../const/button-square-works.const";

function SidebarRight({ sidebarRightOpened, setSidebarRightOpened }) {
  const _BUTTON_SQUARE_WORKS = BUTTON_SQUARE_WORKS;
  const handleCloseSidebarRight = (event) => {
    event.preventDefault();
    setSidebarRightOpened(false);
  };

  useEffect(() => {}, [sidebarRightOpened]);

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
          <Row gutter={[8, 8]}>
            {_BUTTON_SQUARE_WORKS.map((item, index) => {
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
    </>
  );
}

export default SidebarRight;

SidebarRight.propTypes = {
  sidebarRightOpened: PropTypes.bool,
  setSidebarRightOpened: PropTypes.func,
};
