import { lazy, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocationMod } from "../helpers/location.hook";
import { useWindowsSizes } from "../helpers/widowsSizes.hook";
import { Stage } from "react-konva";

import RectUTemplate from "../components/rect-u.template";
import LineUTemplate from "../components/line-u.template";
import {
  U1_CT_M,
  U1_LINE_CT_M,
  U2_CT_M,
  U2_LINE_CT_M,
  U3_CT_M,
  U3_LINE_CT_M,
  U4_CT_M,
  U4_LINE_CT_M,
} from "../mocks/u-ct.mock";

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const ctType = params.get("t");
console.log("🚀 ~ ctType:", ctType);

export default function UShapedPage(props) {
  const [pageTitle, setPageTitle] = useState(props?.title || "Encimeras U");
  const tParam = useLocationMod("t");
  console.log("🚀 ~ UShapedPage ~ tParam:", tParam);

  const [partsData, setPartsData] = useState([]);
  const [linesData, setLinesData] = useState([]);

  const titleSelect = {
    u1: props.title + " - 1",
    u2: props.title + " - 2",
    u3: props.title + " - 3",
    u4: props.title + " - 4",
  };

  const handleTitle = () => {
    setPageTitle(titleSelect[tParam] ? titleSelect[tParam] : titleSelect["u1"]);
  };

  const selectingData = (shape) => {
    const shapeType = {
      u1: () => {
        setPartsData(U1_CT_M.partsData);
        setLinesData(U1_LINE_CT_M.linesData);
      },
      u2: () => {
        setPartsData(U2_CT_M.partsData);
        setLinesData(U2_LINE_CT_M.linesData);
      },
      u3: () => {
        setPartsData(U3_CT_M.partsData);
        setLinesData(U3_LINE_CT_M.linesData);
      },
      u4: () => {
        setPartsData(U4_CT_M.partsData);
        setLinesData(U4_LINE_CT_M.linesData);
      },
    };

    shapeType[shape]();
  };

  // useEffect(() => {
  //   handleTitle();
  // }, [tParam]);

  useEffect(() => {
    handleTitle();

    selectingData(tParam);
  }, [tParam]);

  const stageWidth = useWindowsSizes().stageWidth;
  const stageHeight = useWindowsSizes().stageHeight;

  return (
    <>
      <h2>{pageTitle}</h2>

      <Stage width={stageWidth} height={stageHeight} draggable>
        {partsData.map((item) => (
          <RectUTemplate itemData={item} key={item.id} />
        ))}
        {linesData.map((item) => (
          <LineUTemplate itemData={item} key={item.id} />
        ))}
      </Stage>
    </>
  );
}

UShapedPage.propTypes = {
  title: PropTypes.node,
  shape: PropTypes.node,
};
