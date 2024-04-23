import { Stage } from "react-konva";
import PropTypes from "prop-types";

import RectTemplate from "../components/rect.template";
import LineTemplate from "../components/line.template";

import { SIMPLE_CT_M, SIMPLE_LINE_CT_M } from "../mocks/simple-ct.mock";
import { SQUARE_CT_M, SQUARE_LINE_CT_M } from "../mocks/square-ct.mock";
import { CIRCLE_CT_M, CIRCLE_LINE_CT_M } from "../mocks/circle-ct.mock";
import { useEffect, useState } from "react";
import { useWindowsSizes } from "../helpers/widowsSizes.hook";

export default function SimpleCTPage(props) {
  const [partsData, setPartsData] = useState([]);
  const [linesData, setLinesData] = useState([]);

  // const elementRef = useElementRefContext();

  const selectingData = (shape) => {
    const shapeType = {
      simple: () => {
        setPartsData(SIMPLE_CT_M.partsData);
        setLinesData(SIMPLE_LINE_CT_M.linesData);
      },
      square: () => {
        setPartsData(SQUARE_CT_M.partsData);
        setLinesData(SQUARE_LINE_CT_M.linesData);
      },
      circle: () => {
        setPartsData(CIRCLE_CT_M.partsData);
        setLinesData(CIRCLE_LINE_CT_M.linesData);
      },
    };

    shapeType[shape]();
  };

  useEffect(() => {
    selectingData(props?.shape || "simple");
  });

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
        {partsData.map((item) => (
          <RectTemplate itemData={item} key={item.id} />
        ))}
        {linesData.map((item) => (
          <LineTemplate itemData={item} key={item.id} />
        ))}
      </Stage>
    </>
  );
}

SimpleCTPage.propTypes = {
  title: PropTypes.node,
  shape: PropTypes.node,
};
