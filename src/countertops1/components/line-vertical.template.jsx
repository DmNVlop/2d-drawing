import { Layer, Line, Text } from "react-konva";
import PropTypes from "prop-types";
import { GLOBAL_CT_M } from "../mocks/global-ct.mock";

export default function LineTemplateVertical(props) {
  console.log("🚀 ~ LineTemplateVertical ~ props:", props);
  const rotation = props?.itemData?.rotation || 0;
  const lengthBase = props?.itemData?.length || 0;
  const xRefBase = props?.itemData?.xRef || 0;
  const yRefBase = props?.itemData?.yRef || 0;
  const levelAdjust = props?.itemData?.level == 1 ? 20 : 60;

  const textX = props?.itemData?.level == 1 ? xRefBase + 36 : xRefBase + 76;
  const textY = yRefBase + lengthBase / 2 - 10;

  return (
    <Layer x={GLOBAL_CT_M.xGlobalLayer} y={GLOBAL_CT_M.yGlobalLayer}>
      <Line
        points={[
          xRefBase + levelAdjust,
          yRefBase,
          xRefBase + levelAdjust,
          yRefBase + lengthBase,
        ]}
        fill="black"
        stroke="black"
        strokeWidth={1}
      />
      <Line
        points={[
          xRefBase + levelAdjust - 10,
          yRefBase,
          xRefBase + levelAdjust + 10,
          yRefBase,
        ]}
        fill="black"
        stroke="black"
        strokeWidth={1}
      />
      <Line
        points={[
          xRefBase + levelAdjust - 10,
          yRefBase + lengthBase,
          xRefBase + levelAdjust + 10,
          yRefBase + lengthBase,
        ]}
        fill="black"
        stroke="black"
        strokeWidth={1}
      />
      <Text
        x={textX}
        y={textY}
        text={lengthBase}
        rotation={rotation}
        fontSize={16}
      />
    </Layer>
  );
}

LineTemplateVertical.propTypes = {
  itemData: PropTypes.object,
  id: PropTypes.number,
};
