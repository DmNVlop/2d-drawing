import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Group, Layer, Stage } from "react-konva";

import { useCountertopContext } from "../context/ct-context";
import { useWindowsSizes } from "../helpers/widowsSizes.hook";

import RectTemplate from "../components/rect.template";
import LineTemplateVertical from "../components/line-vertical.template";
import LineTemplateHorizontal from "../components/line-horizontal.template";

import { SIMPLE_CT_M, SIMPLE_LINE_CT_M } from "../mocks/simple-ct.mock";
import { SQUARE_CT_M, SQUARE_LINE_CT_M } from "../mocks/square-ct.mock";
import { CIRCLE_CT_M, CIRCLE_LINE_CT_M } from "../mocks/circle-ct.mock";
import { useLocation } from "react-router-dom";
import { DIRECTION_TYPES } from "../mocks/LINES_CONST";
import WorksSelectorCNCWorks from "../components/CNC-Works/works-selector";
import { GLOBAL_CT_M } from "../mocks/global-ct.mock";

export default function SimpleCTPage(props) {
  const { countertops, setCountertops } = useCountertopContext();

  const [partsData, setPartsData] = useState([]);
  const [linesData, setLinesData] = useState([]);

  // let selectedPiece = null;

  const location = useLocation();

  const selectingData = (shape) => {
    console.log("🚀 ~ selectingData ~ shape:", shape);
    console.log("🚀 ~ selectingData ~ countertops:", countertops?.partsData);
    let selectedPiece = countertops?.selectedPiece || null;
    const shapeType = {
      simple: () => {
        setCountertops({
          shapeType: SIMPLE_CT_M.shapeType, // countertops?.shapeType ||
          partsData: SIMPLE_CT_M.partsData, // countertops?.partsData ||
          linesData: SIMPLE_LINE_CT_M.linesData, // countertops?.linesData ||
          selectedPiece: selectedPiece,
        });
      },
      square: () => {
        setCountertops({
          shapeType: SQUARE_CT_M.shapeType,
          partsData: SQUARE_CT_M.partsData,
          linesData: SQUARE_LINE_CT_M.linesData,
          selectedPiece: selectedPiece,
        });
      },
      circle: () => {
        setCountertops({
          shapeType: CIRCLE_CT_M.shapeType,
          partsData: CIRCLE_CT_M.partsData,
          linesData: CIRCLE_LINE_CT_M.linesData,
          selectedPiece: selectedPiece,
        });
      },
    };

    shapeType[shape]();
  };

  useEffect(() => {
    console.log(
      "🚀 ~ SimpleCTPage ~ SIMPLE_CT_M.partsData:",
      SIMPLE_CT_M.partsData
    );
    console.log(
      "🚀 ~ SimpleCTPage ~ SQUARE_CT_M.partsData:",
      SQUARE_CT_M.partsData
    );
    console.log(
      "🚀 ~ SimpleCTPage ~ CIRCLE_CT_M.partsData:",
      CIRCLE_CT_M.partsData
    );
  }, [SIMPLE_CT_M.partsData, SQUARE_CT_M.partsData, CIRCLE_CT_M.partsData]);

  useEffect(() => {
    console.log("🚀 ~ SimpleCTPage ~ location.pathname:", location.pathname);
    selectingData(props?.shape || "simple");
  }, [location.pathname]);

  // useEffect(() => {
  //   // console.log("🚀 ~ SimpleCTPage ~ countertops:", countertops);
  // }, [countertops]);

  useEffect(() => {
    if (countertops) {
      setPartsData(countertops.partsData);
      setLinesData(countertops.linesData);
    }
  }, [countertops?.partsData, countertops?.linesData]);

  // const elementRefWidth = elementRef?.elementRef?.width || 0;
  // const elementRefMarginTop = elementRef?.elementRef?.marginTop || 0;

  // const tempWidth = window.innerWidth - elementRefWidth - 50;
  // const tempHeight = window.innerHeight - elementRefMarginTop - 50;

  // const stageWidth = tempWidth < 400 ? 400 : tempWidth;
  // const stageHeight = tempHeight < 400 ? 400 : tempHeight;

  const stageWidth = useWindowsSizes().stageWidth;
  const stageHeight = useWindowsSizes().stageHeight;

  return (
    <>
      <h2>{props.title}</h2>

      <Stage width={stageWidth} height={stageHeight} draggable>
        <Layer>
          {partsData.map((item, index) => {
            return (
              <Group
                key={index}
                x={GLOBAL_CT_M.xGlobalLayer}
                y={GLOBAL_CT_M.yGlobalLayer}
              >
                <RectTemplate
                  itemData={item}
                  key={index}
                  id={index}
                  // setRealSizes={setRealSizes}
                />
              </Group>
            );
          })}

          {linesData.map((item, index) => {
            if (item.direction === DIRECTION_TYPES.HORIZONTAL) {
              return (
                <Group
                  key={index}
                  x={GLOBAL_CT_M.xGlobalLayer}
                  y={GLOBAL_CT_M.yGlobalLayer}
                >
                  <LineTemplateHorizontal
                    itemData={item}
                    key={index}
                    id={index}
                  />
                </Group>
              );
            }

            if (item.direction === DIRECTION_TYPES.VERTICAL) {
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
          })}

          {partsData.map((item) => {
            if (Array.isArray(item?.works) && item?.works?.length > 0) {
              return item?.works.map((work, idx) => (
                <Group key={idx}>
                  <WorksSelectorCNCWorks
                    workData={work}
                    key={idx}
                    id={idx}
                    pieceSelected={item}
                  />
                </Group>
              ));
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
