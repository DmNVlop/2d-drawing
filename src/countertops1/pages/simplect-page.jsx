import { useEffect } from "react";
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

export default function SimpleCTPage(props) {
  const {
    countertops,
    // setCountertops,
    getPartsDataFromPieceCtx,
    // onSetSelectedPieceCtx,
    // onSetNumberOfPieceCtx,
  } = useCountertopContext();

  const { location, ATTRIB_SETTED } = useCustomURLHandler();

  // useEffect(() => {
  //   onSetSelectedPieceCtx(null);

  //   onSetNumberOfPieceCtx(countertops[ATTRIB_SETTED]?.partsData.length || null);
  // }, [location.pathname]);

  const stageWidth = useWindowsSizes().stageWidth;
  const stageHeight = useWindowsSizes().stageHeight;

  return (
    <>
      <h2>{props.title}</h2>

      <Stage width={stageWidth} height={stageHeight} draggable>
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
    </>
  );
}

SimpleCTPage.propTypes = {
  title: PropTypes.node,
  shape: PropTypes.node,
};
