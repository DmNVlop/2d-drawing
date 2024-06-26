import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Group, Layer, Stage } from "react-konva";

import { useCustomURLHandler, useLocationMod } from "../helpers/location.hook";
import { useWindowsSizes } from "../helpers/widowsSizes.hook";
import {
  L1_CT_M,
  L1_LINE_CT_M,
  L2_CT_M,
  L2_LINE_CT_M,
} from "../mocks/l-ct.mock";
import LineLTemplate from "../components/line-l.template";
import { useNavigate } from "react-router-dom";
import { SHAPE_TYPES } from "../mocks/SHAPE_TYPES.const";
import { useCountertopContext } from "../context/ct-context";
import { GLOBAL_CT_M } from "../mocks/global-ct.mock";
import RectLTemplateL1 from "../components/rect-l1.template";
import RectLTemplateL2 from "../components/rect-l2.template";

export default function LShapedPage(props) {
  const navigate = useNavigate();
  const tParamUrl = useLocationMod("t");
  if (!tParamUrl) {
    navigate("/countertop/l-shaped?t=l1");
  }

  const { title } = props;
  const {
    countertops,
    getPartsDataFromPieceCtx,
    getLinesDataFromPieceCtx,
    setPartsCtx,
    setLinesCtx,
    onSetSelectedPieceCtx,
    onSetNumberOfPieceCtx,
  } = useCountertopContext();

  const [pageTitle, setPageTitle] = useState(title || "Encimeras L");

  const { ATTRIB_SETTED } = useCustomURLHandler();

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

  useEffect(() => {
    handleTitle();

    onSetSelectedPieceCtx(null);
    onSetNumberOfPieceCtx(countertops[ATTRIB_SETTED]?.partsData.length || null);
  }, [tParamUrl]);

  const stageWidth = useWindowsSizes().stageWidth;
  const stageHeight = useWindowsSizes().stageHeight;

  return (
    <>
      <h2>{pageTitle}</h2>

      <Stage width={stageWidth} height={stageHeight} draggable>
        <Layer>
          {getPartsDataFromPieceCtx(ATTRIB_SETTED).map((item, index) => {
            const groupDataKey = `groupP-${item.id}-${index}`;
            return (
              <Group
                key={groupDataKey}
                x={GLOBAL_CT_M.xGlobalLayer}
                y={GLOBAL_CT_M.yGlobalLayer}
              >
                {ATTRIB_SETTED == SHAPE_TYPES.LShaped_l1 && (
                  <RectLTemplateL1
                    itemData={item}
                    getPartsDataFromPieceCtx={getPartsDataFromPieceCtx(
                      ATTRIB_SETTED
                    )}
                  />
                )}

                {ATTRIB_SETTED == SHAPE_TYPES.LShaped_l2 && (
                  <RectLTemplateL2
                    itemData={item}
                    getPartsDataFromPieceCtx={getPartsDataFromPieceCtx(
                      ATTRIB_SETTED
                    )}
                  />
                )}
              </Group>
            );
          })}

          <Group x={GLOBAL_CT_M.xGlobalLayer} y={GLOBAL_CT_M.yGlobalLayer}>
            <LineLTemplate
              attrib={ATTRIB_SETTED}
              getPartsDataFromPieceCtx={getPartsDataFromPieceCtx(ATTRIB_SETTED)}
            />
          </Group>

          {/* {getLinesDataFromPieceCtx(ATTRIB_SETTED).map((item, index) => {
            const groupLineKey = `groupL-${item.id}-${index}`;
            return (
              <Group
                key={index}
                x={GLOBAL_CT_M.xGlobalLayer}
                y={GLOBAL_CT_M.yGlobalLayer}
              >
                <LineLTemplate itemData={item} key={item.id} />
              </Group>
            );
          })} */}
        </Layer>
      </Stage>
    </>
  );
}

LShapedPage.propTypes = {
  title: PropTypes.node,
  shape: PropTypes.node,
};
