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
import { Col, Row } from "antd";
import { SHAPE_TYPES } from "./../mocks/SHAPE_TYPES.const";

export default function SimpleCTPage(props) {
  const { title, shape } = props;

  const {
    countertops,
    getPartsDataFromPieceCtx,
    setScaleOnRootConfigCtx,
    onSetSelectedPieceCtx,
  } = useCountertopContext();

  const { ATTRIB_SETTED } = useCustomURLHandler();

  const stageWidth = useWindowsSizes().stageWidth;
  const stageHeight = useWindowsSizes().stageHeight;

  const handleClickOnSelectPieceNull = () => {
    onSetSelectedPieceCtx(null);
  };

  return (
    <section id="simple-ct-page">
      <Row gutter={[8]} align="middle" justify="flex-start">
        <Col className="guttter-row">
          <h2>{title}</h2>
        </Col>

        <Col className="guttter-row" style={{ height: "40px" }}>
          <figure className="ct-figure-on-title">
            {shape == SHAPE_TYPES.SIMPLE && (
              <img src="/images/jobs/simple.png" alt={title} />
            )}

            {shape == SHAPE_TYPES.SQUARE && (
              <img src="/images/jobs/square.png" alt={title} />
            )}

            {shape == SHAPE_TYPES.CIRCLE && (
              <img src="/images/jobs/circle.png" alt={title} />
            )}
          </figure>
        </Col>
      </Row>

      <Stage
        width={stageWidth}
        height={stageHeight}
        draggable
        scaleX={countertops[ATTRIB_SETTED]?.rootConfig?.scaleX || 1}
        scaleY={countertops[ATTRIB_SETTED]?.rootConfig?.scaleY || 1}
        onClick={handleClickOnSelectPieceNull}
        rotation={0}
        onWheel={(e) =>
          useHandleZoomWheel(
            e,
            countertops,
            ATTRIB_SETTED,
            setScaleOnRootConfigCtx
          )
        }
        // rotation={90}
        // rotation={-90}
        // rotation={180}
        offsetX={0} // 0
        offsetY={0} // 0

        // offsetX={0} // 90
        // offsetY={countertops[ATTRIB_SETTED]?.partsData[0]?.height + GLOBAL_CT_M.xGlobalLayer * 2} // 90

        // offsetX={
        //   countertops[ATTRIB_SETTED]?.partsData[0]?.width +
        //   GLOBAL_CT_M.xGlobalLayer * 2
        // } // -90
        // offsetY={0} // -90

        // offsetX={
        //   countertops[ATTRIB_SETTED]?.partsData[0]?.width +
        //   GLOBAL_CT_M.xGlobalLayer * 2
        // } // -180
        // offsetY={
        //   countertops[ATTRIB_SETTED]?.partsData[0]?.height +
        //   GLOBAL_CT_M.yGlobalLayer * 2
        // } // -180
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

          {/* {getLinesDataFromPieceCtx(ATTRIB_SETTED).map((item, index) => {
            if (item.direction === DIRECTION.HORIZONTAL) {
              return (
                <Group
                  key={index}
                  x={GLOBAL_CT_M.xGlobalLayer}
                  y={GLOBAL_CT_M.yGlobalLayer}
                >
                  <LineTemplateHorizontal itemData={item} key={item.id} />
                </Group>
              );
            }

            if (item.direction === DIRECTION.VERTICAL) {
              return (
                <Group
                  key={index}
                  x={GLOBAL_CT_M.xGlobalLayer}
                  y={GLOBAL_CT_M.yGlobalLayer}
                >
                  <LineTemplateVertical
                    itemData={item}
                    key={index}
                    id={index}
                  />
                </Group>
              );
            }
          })} */}

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
    </section>
  );
}

SimpleCTPage.propTypes = {
  title: PropTypes.node,
  shape: PropTypes.node,
};
