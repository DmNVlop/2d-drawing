import { Layer, Line, Text } from "react-konva";
import PropTypes from "prop-types";
import { GLOBAL_CT_M } from "../mocks/global-ct.mock";

export default function LineTemplateHorizontal(props) {
  const { itemData } = props;

  const xRefBase = 0; // itemData.xRef || 0
  const yRefBase = 0; // itemData.yRef || 0
  const lengthBase = itemData.width || 0;
  const levelAdjust = 20; // itemData.level == 1 ? 20 : 60;

  const textBase = itemData.width || "";
  const textX = xRefBase + lengthBase / 2 - 10; //
  const textY = yRefBase - 34; // itemData.level == 1 ? yRefBase - 36 : yRefBase - 76;

  const rotation = 0; // itemData.rotation || 0;

  return (
    <>
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
        x={Number.isFinite(textX) ? textX : 0}
        y={Number.isFinite(textY) ? textY : 0}
        text={textBase}
        rotation={rotation}
        fontSize={16}
      />
    </>
  );
}

LineTemplateHorizontal.propTypes = {
  itemData: PropTypes.object,
};
