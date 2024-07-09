import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useCustomURLHandler } from "../helpers/location.hook";
import { useWindowsSizes } from "../helpers/widowsSizes.hook";
import { Group, Layer, Stage } from "react-konva";

import RectUTemplateU1 from "../components/rect-u1.template";
import LineUTemplate from "../components/line-u.template";
import { useNavigate } from "react-router-dom";
import { useCountertopContext } from "../context/ct-context";
import { GLOBAL_CT_M } from "../mocks/global-ct.mock";
import { SHAPE_TYPES } from "../mocks/SHAPE_TYPES.const";
import RectUTemplateU2 from "../components/rect-u2.template";
import RectUTemplateU3 from "../components/rect-u3.template";
import RectUTemplateU4 from "../components/rect-u4.template";
import WorksSelectorCNCWorks from "../components/CNC-Works/works-selector";

export default function UShapedPage(props) {
  const { title } = props;

  const navigate = useNavigate();
  const { ATTRIB_SETTED, tParamUrl } = useCustomURLHandler();

  if (!tParamUrl) {
    navigate("/countertop/u-shaped?t=u1");
  }

  const {
    countertops,
    getPartsDataFromPieceCtx,
    onSetSelectedPieceCtx,
    setSidebarRightOpenedCtx,
  } = useCountertopContext();

  const [pageTitle, setPageTitle] = useState(title || "Encimeras U");

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

  const handleClickOnSelectPieceNull = () => {
    onSetSelectedPieceCtx(null);
  };

  useEffect(() => {
    handleTitle();
  }, [tParamUrl]);

  const stageWidth = useWindowsSizes().stageWidth;
  const stageHeight = useWindowsSizes().stageHeight;

  return (
    <>
      <h2>{pageTitle}</h2>

      <Stage
        width={stageWidth}
        height={stageHeight}
        draggable
        scaleX={countertops[ATTRIB_SETTED]?.rootConfig?.scaleX || 1}
        scaleY={countertops[ATTRIB_SETTED]?.rootConfig?.scaleY || 1}
        onClick={handleClickOnSelectPieceNull}
        rotation={0}
      >
        <Layer>
          {getPartsDataFromPieceCtx(ATTRIB_SETTED).map((item, index) => {
            return (
              <Group
                key={index}
                x={GLOBAL_CT_M.xGlobalLayer}
                y={GLOBAL_CT_M.yGlobalLayer}
              >
                {ATTRIB_SETTED == SHAPE_TYPES.UShaped_u1 && (
                  <RectUTemplateU1
                    itemData={item}
                    key={item.id}
                    getPartsDataFromPieceCtx={getPartsDataFromPieceCtx(
                      ATTRIB_SETTED
                    )}
                    onSetSelectedPieceCtx={onSetSelectedPieceCtx}
                    setSidebarRightOpenedCtx={setSidebarRightOpenedCtx}
                  />
                )}

                {ATTRIB_SETTED == SHAPE_TYPES.UShaped_u2 && (
                  <RectUTemplateU2
                    itemData={item}
                    key={item.id}
                    getPartsDataFromPieceCtx={getPartsDataFromPieceCtx(
                      ATTRIB_SETTED
                    )}
                    onSetSelectedPieceCtx={onSetSelectedPieceCtx}
                    setSidebarRightOpenedCtx={setSidebarRightOpenedCtx}
                  />
                )}

                {ATTRIB_SETTED == SHAPE_TYPES.UShaped_u3 && (
                  <RectUTemplateU3
                    itemData={item}
                    key={item.id}
                    getPartsDataFromPieceCtx={getPartsDataFromPieceCtx(
                      ATTRIB_SETTED
                    )}
                    onSetSelectedPieceCtx={onSetSelectedPieceCtx}
                    setSidebarRightOpenedCtx={setSidebarRightOpenedCtx}
                  />
                )}

                {ATTRIB_SETTED == SHAPE_TYPES.UShaped_u4 && (
                  <RectUTemplateU4
                    itemData={item}
                    key={item.id}
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
            <LineUTemplate
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
    </>
  );
}

UShapedPage.propTypes = {
  title: PropTypes.node,
};
