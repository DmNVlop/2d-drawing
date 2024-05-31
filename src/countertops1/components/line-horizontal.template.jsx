import { Layer, Line, Text } from "react-konva";
import PropTypes from "prop-types";
import { GLOBAL_CT_M } from "../mocks/global-ct.mock";

export default function LineTemplateHorizontal(props) {
  const rotation = props?.itemData?.rotation || 0;
  const lengthBase = props?.itemData?.length || 0;
  const textBase = props?.itemData?.text || "";
  const xRefBase = props?.itemData?.xRef || 0;
  const yRefBase = props?.itemData?.yRef || 0;
  const levelAdjust = props?.itemData?.level == 1 ? 20 : 60;

  const textX = xRefBase + lengthBase / 2 - 10;  // 
  const textY = props?.itemData?.level == 1 ? yRefBase - 36 : yRefBase - 76;

  return (
    <Layer x={GLOBAL_CT_M.xGlobalLayer} y={GLOBAL_CT_M.yGlobalLayer}>
      <Line
        points={[
          xRefBase,
          yRefBase - levelAdjust,
          xRefBase + lengthBase,
          yRefBase - levelAdjust,
        ]}
        fill="black"
        stroke="black"
        strokeWidth={1}
      />
      <Line
        points={[
          xRefBase,
          yRefBase - levelAdjust + 10,
          xRefBase,
          yRefBase - levelAdjust - 10,
        ]}
        fill="black"
        stroke="black"
        strokeWidth={1}
      />
      <Line
        points={[
          xRefBase + lengthBase,
          yRefBase - levelAdjust + 10,
          xRefBase + lengthBase,
          yRefBase - levelAdjust - 10,
        ]}
        fill="black"
        stroke="black"
        strokeWidth={1}
      />
      <Text
        x={textX}
        y={textY}
        text={textBase}
        rotation={rotation}
        fontSize={16}
      />
    </Layer>
  );
}

LineTemplateHorizontal.propTypes = {
  itemData: PropTypes.object,
  id: PropTypes.number,
};
