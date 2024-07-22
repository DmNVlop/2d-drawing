import { ZoomInOutlined, ZoomOutOutlined } from "@ant-design/icons";
import "./zoom-stage.style.css";
import { useEffect, useState } from "react";
import { useCountertopContext } from "../../context/ct-context";
import { useCustomURLHandler } from "../../helpers/location.hook";
import { Tooltip } from "antd";

function ZoomStageComponent() {
  const { countertops, setScaleOnRootConfigCtx } = useCountertopContext();

  const { ATTRIB_SETTED } = useCustomURLHandler();

  const scaleWidthX = countertops[ATTRIB_SETTED].rootConfig?.scaleX || 1;
  const scaleWidthY = countertops[ATTRIB_SETTED].rootConfig?.scaleY || 1;
  const scaleSeek = 0.05;

  const handleLeftBtnScale = () => {
    setScaleOnRootConfigCtx(scaleWidthX - scaleSeek, scaleWidthY - scaleSeek);
  };

  const handleRightBtnScale = () => {
    setScaleOnRootConfigCtx(scaleWidthX + scaleSeek, scaleWidthY + scaleSeek);
  };

  return (
    <div id="zoom-stage">
      <Tooltip title="Disminuir Escala">
        <div className="zoom-btn-left" onClick={handleLeftBtnScale}>
          <ZoomOutOutlined className="zoom-btn-left-icon" />
        </div>
      </Tooltip>
      <Tooltip title="Aumentar Escala">
        <div className="zoom-btn-right" onClick={handleRightBtnScale}>
          <ZoomInOutlined className="zoom-btn-right-icon" />
        </div>
      </Tooltip>

      <Tooltip title="Valor de Escala">
        <div className="zoom-scale-info">
          <span className="text">{scaleWidthX.toFixed(2)}</span>
        </div>
      </Tooltip>
    </div>
  );
}
export default ZoomStageComponent;
