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
    getLinesDataFromPieceCtx,
    onSetSelectedPieceCtx,
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
                  />
                )}
              </Group>
            );
          })}
          {getLinesDataFromPieceCtx(ATTRIB_SETTED).map((item, index) => {
            return (
              <Group
                key={index}
                x={GLOBAL_CT_M.xGlobalLayer}
                y={GLOBAL_CT_M.yGlobalLayer}
              >
                <LineUTemplate itemData={item} key={item.id} />
              </Group>
            );
          })}
        </Layer>
      </Stage>
    </>
  );
}

UShapedPage.propTypes = {
  title: PropTypes.node,
};
