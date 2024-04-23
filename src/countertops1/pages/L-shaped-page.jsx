import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Stage } from "react-konva";

import { useLocationMod } from "../helpers/location.hook";
import { useWindowsSizes } from "../helpers/widowsSizes.hook";
import {
  L1_CT_M,
  L1_LINE_CT_M,
  L2_CT_M,
  L2_LINE_CT_M,
} from "../mocks/l-ct.mock";
import RectLTemplate from "../components/rect-l.template";
import LineLTemplate from "../components/line-l.template";

export default function LShapedPage(props) {
  const [pageTitle, setPageTitle] = useState(props?.title || "Encimeras L");
  const tParam = useLocationMod("t");

  const [partsData, setPartsData] = useState([]);
  const [linesData, setLinesData] = useState([]);

  const titleSelect = {
    l1: props.title + " - 1",
    l2: props.title + " - 2",
  };

  const handleTitle = () => {
    setPageTitle(titleSelect[tParam] ? titleSelect[tParam] : titleSelect["l1"]);
  };

  const selectingData = (shape) => {
    const shapeType = {
      l1: () => {
        setPartsData(L1_CT_M.partsData);
        setLinesData(L1_LINE_CT_M.linesData);
      },
      l2: () => {
        setPartsData(L2_CT_M.partsData);
        setLinesData(L2_LINE_CT_M.linesData);
      },
    };

    shapeType[shape]();
  };

  useEffect(() => {
    handleTitle();
  }, [tParam]);

  useEffect(() => {
    selectingData(tParam);
  }, [tParam]);

  const stageWidth = useWindowsSizes().stageWidth;
  const stageHeight = useWindowsSizes().stageHeight;

  return (
    <>
      <h2>{pageTitle}</h2>

      <Stage width={stageWidth} height={stageHeight} draggable>
        {partsData.map((item) => (
          <RectLTemplate itemData={item} key={item.id} />
        ))}
        {linesData.map((item) => (
          <LineLTemplate itemData={item} key={item.id} />
        ))}
      </Stage>
    </>
  );
}

LShapedPage.propTypes = {
  title: PropTypes.node,
  shape: PropTypes.node,
};
