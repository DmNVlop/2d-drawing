import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocationMod } from "../helpers/location.hook";
import { useWindowsSizes } from "../helpers/widowsSizes.hook";
import { Layer, Stage } from "react-konva";

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
import { useLocation, useNavigate } from "react-router-dom";
import { useCountertopContext } from "../context/ct-context";
import { SHAPE_TYPES } from "../mocks/SHAPE_TYPES.const";

export default function UShapedPage(props) {
  const { title } = props;

  const navigate = useNavigate();
  const tParamUrl = useLocationMod("t");
  if (!tParamUrl) {
    navigate("/countertop/u-shaped?t=u1");
  }

  const { setParts, setLines } = useCountertopContext();

  const [pageTitle, setPageTitle] = useState(title || "Encimeras U");

  const location = useLocation();
  const shapeNameUrl = location.pathname.substring(1); // Esto te dará 'simple', 'double' o 'triple'
  const url_shape = shapeNameUrl.split("/").pop();
  const ATTRIB_SETTED = tParamUrl ? url_shape + "_" + tParamUrl : url_shape;

  const [partsData, setPartsData] = useState([]);
  const [linesData, setLinesData] = useState([]);

  const titleSelect = {
    u1: title + " - 1",
    u2: title + " - 2",
    u3: title + " - 3",
    u4: title + " - 4",
  };

  const handleTitle = () => {
    setPageTitle(
      titleSelect[tParamUrl] ? titleSelect[tParamUrl] : titleSelect["u1"]
    );
  };

  const selectingData = () => {
    const shapeType = {
      [SHAPE_TYPES.UShaped_u1]: () => {
        setPartsData(U1_CT_M.partsData);
        setLinesData(U1_LINE_CT_M.linesData);
        setParts(U1_CT_M.partsData);
        setLines(U1_LINE_CT_M.linesData);
      },
      [SHAPE_TYPES.UShaped_u2]: () => {
        setPartsData(U2_CT_M.partsData);
        setLinesData(U2_LINE_CT_M.linesData);
        setParts(U2_CT_M.partsData);
        setLines(U2_LINE_CT_M.linesData);
      },
      [SHAPE_TYPES.UShaped_u3]: () => {
        setPartsData(U3_CT_M.partsData);
        setLinesData(U3_LINE_CT_M.linesData);
        setParts(U3_CT_M.partsData);
        setLines(U3_LINE_CT_M.linesData);
      },
      [SHAPE_TYPES.UShaped_u4]: () => {
        setPartsData(U4_CT_M.partsData);
        setLinesData(U4_LINE_CT_M.linesData);
        setParts(U4_CT_M.partsData);
        setLines(U4_LINE_CT_M.linesData);
      },
    };

    if (shapeType[ATTRIB_SETTED]) {
      shapeType[ATTRIB_SETTED]();
    }
  };

  useEffect(() => {
    handleTitle();
    selectingData();
  }, [tParamUrl]);

  const stageWidth = useWindowsSizes().stageWidth;
  const stageHeight = useWindowsSizes().stageHeight;

  return (
    <>
      <h2>{pageTitle}</h2>

      <Stage width={stageWidth} height={stageHeight} draggable>
        <Layer>
          {partsData.map((item) => (
            <RectUTemplate itemData={item} key={item.id} />
          ))}
          {linesData.map((item) => (
            <LineUTemplate itemData={item} key={item.id} />
          ))}
        </Layer>
      </Stage>
    </>
  );
}

UShapedPage.propTypes = {
  title: PropTypes.node,
};
