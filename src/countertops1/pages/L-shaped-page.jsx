import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Layer, Stage } from "react-konva";

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
import { useLocation, useNavigate } from "react-router-dom";
import { SHAPE_TYPES } from "../mocks/SHAPE_TYPES.const";
import { useCountertopContext } from "../context/ct-context";

export default function LShapedPage(props) {
  const navigate = useNavigate();
  const tParamUrl = useLocationMod("t");
  if (!tParamUrl) {
    navigate("/countertop/l-shaped?t=l1");
  }

  const { title } = props;
  const { setParts, setLines } = useCountertopContext();

  const [pageTitle, setPageTitle] = useState(title || "Encimeras L");

  const location = useLocation();
  const shapeNameUrl = location.pathname.substring(1); // Esto te dará 'simple', 'double' o 'triple'
  const url_shape = shapeNameUrl.split("/").pop();

  const ATTRIB_SETTED = tParamUrl ? url_shape + "_" + tParamUrl : url_shape;

  const [partsData, setPartsData] = useState([]);
  const [linesData, setLinesData] = useState([]);

  const titleSelect = {
    l1: title + " - 1",
    l2: title + " - 2",
  };

  const handleTitle = () => {
    setPageTitle(
      titleSelect[tParamUrl] ? titleSelect[tParamUrl] : titleSelect["l1"]
    );
  };

  const selectingData = () => {
    const shapeType = {
      [SHAPE_TYPES.LShaped_l1]: () => {
        setPartsData(L1_CT_M.partsData);
        setLinesData(L1_LINE_CT_M.linesData);
        setParts(L1_CT_M.partsData);
        setLines(L1_LINE_CT_M.linesData);
      },
      [SHAPE_TYPES.LShaped_l2]: () => {
        setPartsData(L2_CT_M.partsData);
        setLinesData(L2_LINE_CT_M.linesData);
        setParts(L2_CT_M.partsData);
        setLines(L2_LINE_CT_M.linesData);
      },
    };

    if (shapeType[ATTRIB_SETTED]) {
      shapeType[ATTRIB_SETTED]();
    }
  };

  useEffect(() => {
    handleTitle();
    selectingData(tParamUrl);
  }, [tParamUrl]);

  const stageWidth = useWindowsSizes().stageWidth;
  const stageHeight = useWindowsSizes().stageHeight;

  return (
    <>
      <h2>{pageTitle}</h2>

      <Stage width={stageWidth} height={stageHeight} draggable>
        <Layer>
          {partsData.map((item) => (
            <RectLTemplate itemData={item} key={item.id} />
          ))}
          {linesData.map((item) => (
            <LineLTemplate itemData={item} key={item.id} />
          ))}
        </Layer>
      </Stage>
    </>
  );
}

LShapedPage.propTypes = {
  title: PropTypes.node,
  shape: PropTypes.node,
};
