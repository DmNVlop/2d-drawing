import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Stage } from "react-konva";

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

export default function SimpleCTPage(props) {
  const { countertops, setCountertops } = useCountertopContext();

  const [partsData, setPartsData] = useState([]);
  const [linesData, setLinesData] = useState([]);

  const location = useLocation();

  const selectingData = (shape) => {
    const shapeType = {
      simple: () => {
        setCountertops({
          shapeType: SIMPLE_CT_M.shapeType,
          partsData: SIMPLE_CT_M.partsData,
          linesData: SIMPLE_LINE_CT_M.linesData,
        });
      },
      square: () => {
        setCountertops({
          shapeType: SQUARE_CT_M.shapeType,
          partsData: SQUARE_CT_M.partsData,
          linesData: SQUARE_LINE_CT_M.linesData,
        });
      },
      circle: () => {
        setCountertops({
          shapeType: CIRCLE_CT_M.shapeType,
          partsData: CIRCLE_CT_M.partsData,
          linesData: CIRCLE_LINE_CT_M.linesData,
        });
      },
    };

    shapeType[shape]();
  };

  const setRealSizes = (realSizes, index) => {
    // console.log("🚀 ~ setRealSizes ~ index:", index);
    // console.log("🚀 ~ setRealSizes ~ realSizes:", realSizes);
    // console.log("🚀 ~ setRealSizes ~ countertops.partsData:", countertops?.partsData[index]);
    
    setCountertops((prev) => {
      const t = { ...prev };
      t.partsData[index].realWidth = realSizes.width;
      t.partsData[index].realHeight = realSizes.height;
      return {
        ...prev,
        ...t,
      };
    });
  };

  useEffect(() => {
    selectingData(props?.shape || "simple");
  }, [location]);

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
        {partsData.map((item, index) => {
          return (
            <RectTemplate
              itemData={item}
              key={index}
              id={index}
              setRealSizes={setRealSizes}
            />
          );
        })}

        {linesData.map((item, index) => {
          if (item.direction === DIRECTION_TYPES.HORIZONTAL) {
            return (
              <LineTemplateHorizontal itemData={item} key={index} id={index} />
            );
          }

          if (item.direction === DIRECTION_TYPES.VERTIICAL) {
            return (
              <LineTemplateVertical itemData={item} key={index} id={index} />
            );
          }
        })}

        {partsData.map((item) => {
          if (Array.isArray(item?.works) && item?.works?.length > 0) {
            return item?.works.map((work, idx) => (
              <WorksSelectorCNCWorks workData={work} key={idx} id={idx} />
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
