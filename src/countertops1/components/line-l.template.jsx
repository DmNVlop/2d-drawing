import { Group, Line, Text } from "react-konva";
import PropTypes from "prop-types";

export default function LineLTemplate(props) {
  const { itemData, attrib, getPartsDataFromPieceCtx } = props;

  const xRefBase = itemData?.xRef || 0;
  const yRefBase = itemData?.yRef || 0;
  const lengthBase = itemData?.length || 0;
  const levelAdjust = itemData?.level == 1 ? 20 : 60;

  const textY = yRefBase + lengthBase / 2 - 10;
  const textX = itemData?.level == 1 ? xRefBase + 36 : xRefBase + 76;

  const rotation = itemData?.rotation || 0;

  return (
    <Group>
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
    </Group>
  );
}

LineLTemplate.propTypes = {
  itemData: PropTypes.object,
  attrib: PropTypes.string,
  getPartsDataFromPieceCtx: PropTypes.array,
};
