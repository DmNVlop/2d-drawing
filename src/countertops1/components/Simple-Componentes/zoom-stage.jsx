import { ZoomInOutlined, ZoomOutOutlined } from "@ant-design/icons";
import "./zoom-stage.style.css";

function ZoomStageComponent() {
  return (
    <div id="zoom-stage">
      <div className="zoom-btn-left">
        <ZoomOutOutlined className="zoom-btn-left-icon" />
      </div>
      <div className="zoom-btn-right">
        <ZoomInOutlined className="zoom-btn-right-icon" />
      </div>
    </div>
  );
}
export default ZoomStageComponent;
