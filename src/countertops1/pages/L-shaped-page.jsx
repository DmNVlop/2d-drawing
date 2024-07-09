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
import WorksSelectorCNCWorks from "../components/CNC-Works/works-selector";

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
    onSetSelectedPieceCtx,
    setSidebarRightOpenedCtx,
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

  const handleClickOnSelectPieceNull = () => {
    onSetSelectedPieceCtx(null);
  };

  useEffect(() => {
    handleTitle();
  }, [tParamUrl]);

  const stageWidth = useWindowsSizes().stageWidth;
  const stageHeight = useWindowsSizes().stageHeight;

  return (
    <section id="l-shaped-page">
      <h2>{pageTitle}</h2>

      <Stage
        width={stageWidth}
        height={stageHeight}
        draggable
        scaleX={countertops[ATTRIB_SETTED]?.rootConfig?.scaleX || 1}
        scaleY={countertops[ATTRIB_SETTED]?.rootConfig?.scaleY || 1}
        onClick={handleClickOnSelectPieceNull}
      >
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
                    onSetSelectedPieceCtx={onSetSelectedPieceCtx}
                    setSidebarRightOpenedCtx={setSidebarRightOpenedCtx}
                  />
                )}

                {ATTRIB_SETTED == SHAPE_TYPES.LShaped_l2 && (
                  <RectLTemplateL2
                    itemData={item}
                    getPartsDataFromPieceCtx={getPartsDataFromPieceCtx(
                      ATTRIB_SETTED
                    )}
                    onSetSelectedPieceCtx={onSetSelectedPieceCtx}
                    setSidebarRightOpenedCtx={setSidebarRightOpenedCtx}
                  />
                )}
              </Group>
            );
          })}

          <Group x={GLOBAL_CT_M.xGlobalLayer} y={GLOBAL_CT_M.yGlobalLayer}>
            <LineLTemplate
              ATTRIB_SETTED={ATTRIB_SETTED}
              getPartsDataFromPieceCtx={getPartsDataFromPieceCtx(ATTRIB_SETTED)}
            />
          </Group>

          {getPartsDataFromPieceCtx(ATTRIB_SETTED).map((item, indexPiece) => {
            if (Array.isArray(item?.works) && item?.works?.length > 0) {
              return item?.works.map((work, indexWork) => {
                const workKey = `groupP-${indexWork}`;
                return (
                  <Group key={workKey}>
                    <WorksSelectorCNCWorks
                      workData={work}
                      pieceSelected={item}
                      indexPiece={indexPiece}
                    />
                  </Group>
                );
              });
            }
          })}
        </Layer>
      </Stage>
    </section>
  );
}

LShapedPage.propTypes = {
  title: PropTypes.node,
  shape: PropTypes.node,
};
