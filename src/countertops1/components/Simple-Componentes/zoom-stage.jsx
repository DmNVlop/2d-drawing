import { ZoomInOutlined, ZoomOutOutlined } from "@ant-design/icons";
import "./zoom-stage.style.css";
import { useEffect, useState } from "react";
import { useCountertopContext } from "../../context/ct-context";
import { useCustomURLHandler } from "../../helpers/location.hook";

function ZoomStageComponent() {
  const { countertops, setScaleOnRootConfigCtx } = useCountertopContext();

  const { ATTRIB_SETTED } = useCustomURLHandler();

  const scaleWidthX = countertops[ATTRIB_SETTED].rootConfig?.scaleX || 1;
  const scaleWidthY = countertops[ATTRIB_SETTED].rootConfig?.scaleY || 1;
  const scaleSeek = 0.1;

  const handleLeftBtnScale = () => {
    setScaleOnRootConfigCtx(scaleWidthX - scaleSeek, scaleWidthY - scaleSeek);
  };

  const handleRightBtnScale = () => {
    setScaleOnRootConfigCtx(scaleWidthX + scaleSeek, scaleWidthY + scaleSeek);
  };

  return (
    <div id="zoom-stage">
      <div className="zoom-btn-left" onClick={handleLeftBtnScale}>
        <ZoomOutOutlined className="zoom-btn-left-icon" />
      </div>
      <div className="zoom-btn-right" onClick={handleRightBtnScale}>
        <ZoomInOutlined className="zoom-btn-right-icon" />
      </div>
    </div>
  );
}
export default ZoomStageComponent;
