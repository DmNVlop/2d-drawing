import { useState } from "react";
import PropTypes from "prop-types";
import { useCustomURLHandler } from "../helpers/location.hook";
import { useWindowsSizes } from "../helpers/widowsSizes.hook";
import { Group, Layer, Stage, Text } from "react-konva";
import { useCountertopContext } from "../context/ct-context";
import { GLOBAL_CT_M } from "../mocks/global-ct.mock";
import ZoomStageComponent from "../components/Simple-Componentes/zoom-stage";
import useHandleZoomWheel from "../components/Rect-Helpers/zoomHelper";
import { Checkbox, Col, Row } from "antd";
import RotationButtonsComponent from "../components/Simple-Componentes/rotation-buttons";
import ActionButtonsLeftSidebar from "../components/Simple-Componentes/action-buttons-left-sidebar";

export default function CustomShapePage(props) {
  const { title } = props;

  const { ATTRIB_SETTED } = useCustomURLHandler();
  console.log("🚀 ~ CustomShapePage ~ ATTRIB_SETTED:", ATTRIB_SETTED);

  const {
    countertops,
    getPartsDataFromPieceCtx,
    onSetSelectedPieceCtx,
    setScaleOnRootConfigCtx,
    setSelectedToArdisCtx,
  } = useCountertopContext();

  const [pageTitle, setPageTitle] = useState(title || "Encimera Personalizada");

  const handleClickOnSelectPieceNull = () => {
    onSetSelectedPieceCtx(null);
  };

  const onChangeExportToArdis = (e) => {
    setSelectedToArdisCtx(e.target.checked);
  };

  const stageWidth = useWindowsSizes().stageWidth;
  const stageHeight = useWindowsSizes().stageHeight;

  return (
    <section id="custom-shape-page">
      <Row gutter={[8]} align="middle" justify="flex-start">
        <Col className="guttter-row">
          <h2>{pageTitle}</h2>
        </Col>

        <Col className="guttter-row" style={{ height: "40px" }}>
          <figure className="ct-figure-on-title">
            <img src="/images/jobs/custom-shape.png" alt={pageTitle} />
          </figure>
        </Col>

        <Col className="guttter-row" style={{ marginLeft: "24px" }}>
          <Checkbox
            onChange={onChangeExportToArdis}
            checked={countertops[ATTRIB_SETTED].selectedToArdis || false}
          >
            Exportar a ARDIS Optimizer
          </Checkbox>
        </Col>

        <Col className="guttter-row" style={{ marginLeft: "3em" }}>
          <ActionButtonsLeftSidebar />
        </Col>
      </Row>

      <Stage
        width={stageWidth}
        height={stageHeight}
        draggable
        scaleX={countertops[ATTRIB_SETTED]?.rootConfig?.scaleX || 1}
        scaleY={countertops[ATTRIB_SETTED]?.rootConfig?.scaleY || 1}
        rotation={countertops[ATTRIB_SETTED]?.rootConfig?.rotationStage || 0}
        offsetX={countertops[ATTRIB_SETTED]?.rootConfig?.offsetXStage || 0}
        offsetY={countertops[ATTRIB_SETTED]?.rootConfig?.offsetYStage || 0}
        onWheel={(e) =>
          useHandleZoomWheel(
            e,
            countertops,
            ATTRIB_SETTED,
            setScaleOnRootConfigCtx
          )
        }
        onClick={handleClickOnSelectPieceNull}
      >
        <Layer>
          <Text x={30} y={30} text={"En Construcción... " + pageTitle} />
        </Layer>
      </Stage>

      <ZoomStageComponent />

      <RotationButtonsComponent />
    </section>
  );
}

CustomShapePage.propTypes = {
  title: PropTypes.node,
};
