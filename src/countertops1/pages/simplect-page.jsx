import PropTypes from "prop-types";
import { Group, Layer, Stage } from "react-konva";

import { useCountertopContext } from "../context/ct-context";
import { useWindowsSizes } from "../helpers/widowsSizes.hook";

import RectTemplate from "../components/rect.template";
import LineTemplateVertical from "../components/line-vertical.template";
import LineTemplateHorizontal from "../components/line-horizontal.template";

import WorksSelectorCNCWorks from "../components/CNC-Works/works-selector";
import { GLOBAL_CT_M } from "../mocks/global-ct.mock";
import { useCustomURLHandler } from "../helpers/location.hook";
import ZoomStageComponent from "../components/Simple-Componentes/zoom-stage";
import useHandleZoomWheel from "../components/Rect-Helpers/zoomHelper";
import { Checkbox, Col, Row } from "antd";
import { SHAPE_TYPES } from "./../mocks/SHAPE_TYPES.const";
import RotationButtonsComponent from "../components/Simple-Componentes/rotation-buttons";

export default function SimpleCTPage(props) {
  const { title, shape } = props;

  const {
    countertops,
    getPartsDataFromPieceCtx,
    setScaleOnRootConfigCtx,
    setSelectedToArdisCtx,
    onSetSelectedPieceCtx,
  } = useCountertopContext();

  const { ATTRIB_SETTED } = useCustomURLHandler();

  const stageWidth = useWindowsSizes().stageWidth;
  const stageHeight = useWindowsSizes().stageHeight;

  const handleClickOnSelectPieceNull = () => {
    onSetSelectedPieceCtx(null);
  };

  const onChangeExportToArdis = (e) => {
    setSelectedToArdisCtx(e.target.checked);
  };

  return (
    <section id="simple-ct-page">
      <Row gutter={[8]} align="middle" justify="flex-start">
        <Col className="guttter-row">
          <h2>{title}</h2>
        </Col>

        <Col className="guttter-row" style={{ height: "40px" }}>
          <figure className="ct-figure-on-title">
            {ATTRIB_SETTED == SHAPE_TYPES.SIMPLE && (
              <img src="/images/jobs/simple.png" alt={title} />
            )}

            {ATTRIB_SETTED == SHAPE_TYPES.SQUARE && (
              <img src="/images/jobs/square.png" alt={title} />
            )}

            {ATTRIB_SETTED == SHAPE_TYPES.CIRCLE && (
              <img src="/images/jobs/circle.png" alt={title} />
            )}
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
      </Row>

      <Stage
        width={stageWidth}
        height={stageHeight}
        draggable
        scaleX={countertops[ATTRIB_SETTED]?.rootConfig?.scaleX || 1}
        scaleY={countertops[ATTRIB_SETTED]?.rootConfig?.scaleY || 1}
        onClick={handleClickOnSelectPieceNull}
        onWheel={(e) =>
          useHandleZoomWheel(
            e,
            countertops,
            ATTRIB_SETTED,
            setScaleOnRootConfigCtx
          )
        }
        rotation={countertops[ATTRIB_SETTED]?.rootConfig?.rotationStage || 0}
        offsetX={countertops[ATTRIB_SETTED]?.rootConfig?.offsetXStage || 0}
        offsetY={countertops[ATTRIB_SETTED]?.rootConfig?.offsetYStage || 0}
      >
        <Layer>
          {getPartsDataFromPieceCtx(ATTRIB_SETTED).map((item, index) => {
            const groupKey = `groupP-${item.id}-${index}`;
            return (
              <Group key={groupKey}>
                <Group
                  x={GLOBAL_CT_M.xGlobalLayer}
                  y={GLOBAL_CT_M.yGlobalLayer}
                >
                  <RectTemplate itemData={item} />
                </Group>

                <Group
                  x={GLOBAL_CT_M.xGlobalLayer}
                  y={GLOBAL_CT_M.yGlobalLayer}
                >
                  <LineTemplateHorizontal itemData={item} />
                </Group>

                <Group
                  x={GLOBAL_CT_M.xGlobalLayer}
                  y={GLOBAL_CT_M.yGlobalLayer}
                >
                  <LineTemplateVertical itemData={item} />
                </Group>
              </Group>
            );
          })}

          {getPartsDataFromPieceCtx(ATTRIB_SETTED).map((item) => {
            if (Array.isArray(item?.works) && item?.works?.length > 0) {
              return item?.works.map((work, idx) => {
                const workKey = `groupP-${idx}`;
                return (
                  <Group key={workKey}>
                    <WorksSelectorCNCWorks
                      workData={work}
                      pieceSelected={item}
                    />
                  </Group>
                );
              });
            }
          })}
        </Layer>
      </Stage>

      <ZoomStageComponent />

      <RotationButtonsComponent />
    </section>
  );
}

SimpleCTPage.propTypes = {
  title: PropTypes.node,
  shape: PropTypes.node,
};
