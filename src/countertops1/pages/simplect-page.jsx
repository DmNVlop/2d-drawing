import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { Layer, Stage } from "react-konva";

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
    let selectedPiece = countertops?.selectedPiece || null;
    const shapeType = {
      simple: () => {
        setCountertops((prev) => {
          let tempPrev = { ...prev };
          tempPrev.shapeType = SIMPLE_CT_M.shapeType; // countertops?.shapeType ||
          tempPrev.partsData = SIMPLE_CT_M.partsData; // countertops?.partsData ||
          tempPrev.linesData = SIMPLE_LINE_CT_M.linesData; // countertops?.linesData ||
          tempPrev.selectedPiece = selectedPiece;
          return tempPrev;
        });
      },
      square: () => {
        setCountertops((prev) => {
          let tempPrev = { ...prev };
          tempPrev.shapeType = SQUARE_CT_M.shapeType;
          tempPrev.partsData = SQUARE_CT_M.partsData;
          tempPrev.linesData = SQUARE_LINE_CT_M.linesData;
          tempPrev.selectedPiece = selectedPiece;
          return tempPrev;
        });
      },
      circle: () => {
        setCountertops((prev) => {
          let tempPrev = { ...prev };
          tempPrev.shapeType = CIRCLE_CT_M.shapeType;
          tempPrev.partsData = CIRCLE_CT_M.partsData;
          tempPrev.linesData = CIRCLE_LINE_CT_M.linesData;
          tempPrev.selectedPiece = selectedPiece;
          return tempPrev;
        });
      },
    };

    shapeType[shape]();
  };

  const setRealSizes = (realSizes, index) => {
    setCountertops((prev) => {
      const t = { ...prev };
      t.partsData[index].realWidth = realSizes.width;
      t.partsData[index].realHeight = realSizes.height;
      return t;
    });
  };

  useMemo(() => {
    selectingData(props?.shape || "simple");
  }, [location]);

  useEffect(() => {
    // console.log("🚀 ~ useEffect ~ countertops:", countertops?.partsData);
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
        {partsData.map((item, index) => {
          return (
            <Layer
              key={index}
              x={GLOBAL_CT_M.xGlobalLayer}
              y={GLOBAL_CT_M.yGlobalLayer}
            >
              <RectTemplate
                itemData={item}
                key={index}
                id={index}
                setRealSizes={setRealSizes}
              />
            </Layer>
          );
        })}

        {linesData.map((item, index) => {
          if (item.direction === DIRECTION_TYPES.HORIZONTAL) {
            return (
              <Layer
                key={index}
                x={GLOBAL_CT_M.xGlobalLayer}
                y={GLOBAL_CT_M.yGlobalLayer}
              >
                <LineTemplateHorizontal
                  itemData={item}
                  key={index}
                  id={index}
                />
              </Layer>
            );
          }

          if (item.direction === DIRECTION_TYPES.VERTICAL) {
            return (
              <Layer
                key={index}
                x={GLOBAL_CT_M.xGlobalLayer}
                y={GLOBAL_CT_M.yGlobalLayer}
              >
                <LineTemplateVertical itemData={item} key={index} id={index} />
              </Layer>
            );
          }
        })}

        {partsData.map((item) => {
          if (Array.isArray(item?.works) && item?.works?.length > 0) {
            return item?.works.map((work, idx) => (
              <Layer key={idx}>
                <WorksSelectorCNCWorks
                  workData={work}
                  key={idx}
                  id={idx}
                  pieceSelected={item}
                />
              </Layer>
            ));
          }
        })}
      </Stage>
    </>
  );
}

SimpleCTPage.propTypes = {
  title: PropTypes.node,
  shape: PropTypes.node,
};
