import { useEffect, useState } from "react";
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
import { DIRECTION } from "../mocks/LINES.const";
import WorksSelectorCNCWorks from "../components/CNC-Works/works-selector";
import { GLOBAL_CT_M } from "../mocks/global-ct.mock";
import { useLocationMod } from "../helpers/location.hook";

export default function SimpleCTPage(props) {
  const { countertops, setCountertops, setParts, setLines } =
    useCountertopContext();

  const [partsData, setPartsData] = useState([]);
  const [linesData, setLinesData] = useState([]);

  const location = useLocation();
  const shapeNameUrl = location.pathname.substring(1); // Esto te dará 'simple', 'double' o 'triple'
  const url_shape = shapeNameUrl.split("/").pop();
  const tParamUrl = useLocationMod("t");
  const ATTRIB_SETTED = tParamUrl ? url_shape + "_" + tParamUrl : url_shape;

  const selectingData = (shape) => {
    let selectedPiece = countertops?.selectedPiece || null;
    const shapeType = {
      simple: () => {
        setCountertops((prevState) => ({
          ...prevState,
          shapeType: SIMPLE_CT_M.shapeType, // countertops?.shapeType ||
          partsData: SIMPLE_CT_M.partsData, // countertops?.partsData ||
          linesData: SIMPLE_LINE_CT_M.linesData, // countertops?.linesData ||
          selectedPiece: selectedPiece,
          [ATTRIB_SETTED]: {
            ...prevState[ATTRIB_SETTED],
            shapeType: SIMPLE_CT_M.shapeType, // countertops?.shapeType ||
            partsData: SIMPLE_CT_M.partsData, // countertops?.partsData ||
            linesData: SIMPLE_LINE_CT_M.linesData, // countertops?.linesData ||
            selectedPiece: selectedPiece,
          },
        }));
      },
      square: () => {
        setCountertops((prevState) => ({
          ...prevState,
          shapeType: SQUARE_CT_M.shapeType,
          partsData: SQUARE_CT_M.partsData,
          linesData: SQUARE_LINE_CT_M.linesData,
          selectedPiece: selectedPiece,
          [ATTRIB_SETTED]: {
            ...prevState[ATTRIB_SETTED],
            shapeType: SQUARE_CT_M.shapeType, // countertops?.shapeType ||
            partsData: SQUARE_CT_M.partsData, // countertops?.partsData ||
            linesData: SQUARE_LINE_CT_M.linesData, // countertops?.linesData ||
            selectedPiece: selectedPiece,
          },
        }));
      },
      circle: () => {
        setCountertops((prevState) => ({
          ...prevState,
          shapeType: CIRCLE_CT_M.shapeType,
          partsData: CIRCLE_CT_M.partsData,
          linesData: CIRCLE_LINE_CT_M.linesData,
          selectedPiece: selectedPiece,
          [ATTRIB_SETTED]: {
            ...prevState[ATTRIB_SETTED],
            shapeType: CIRCLE_CT_M.shapeType, // countertops?.shapeType ||
            partsData: CIRCLE_CT_M.partsData, // countertops?.partsData ||
            linesData: CIRCLE_LINE_CT_M.linesData, // countertops?.linesData ||
            selectedPiece: selectedPiece,
          },
        }));
      },
    };

    shapeType[shape]();
  };

  useEffect(() => {
    selectingData(props?.shape || "simple");
  }, [location.pathname]);

  useEffect(() => {
    if (countertops) {
      setPartsData(countertops.partsData);
      setLinesData(countertops.linesData);
    }
  }, [countertops]);

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
            if (item.direction === DIRECTION.HORIZONTAL) {
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
