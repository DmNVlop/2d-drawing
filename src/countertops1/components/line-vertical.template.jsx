import { Line, Text } from "react-konva";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function LineTemplateVertical(props) {
  const { itemData } = props;

  const [rotation, setRotation] = useState(props?.itemData?.rotation || 0);
  const [lengthBase, setLengthBase] = useState(props?.itemData?.length || 0);
  const [textBase, setTextBase] = useState(props?.itemData?.text || "");
  const [xRefBase, setXRefBase] = useState(props?.itemData?.xRef || 0);
  const [yRefBase, setYRefBase] = useState(props?.itemData?.yRef || 0);
  const [levelAdjust, setLevelAdjust] = useState(
    props?.itemData?.level == 1 ? 20 : 60
  );

  const [textX, setTextX] = useState(
    props?.itemData?.level == 1 ? xRefBase + 36 : xRefBase + 76
  );
  const [textY, setTextY] = useState(yRefBase + lengthBase / 2 - 10);

  // const rotation = props?.itemData?.rotation || 0;
  // const lengthBase = props?.itemData?.length || 0;
  // const textBase = props?.itemData?.text || "";
  // const xRefBase = props?.itemData?.xRef || 0;
  // const yRefBase = props?.itemData?.yRef || 0;
  // const levelAdjust = props?.itemData?.level == 1 ? 20 : 60;

  // const textX = props?.itemData?.level == 1 ? xRefBase + 36 : xRefBase + 76;
  // const textY = yRefBase + lengthBase / 2 - 10;

  useEffect(() => {
    setRotation(props?.itemData?.rotation || 0);
    setLengthBase(props?.itemData?.length || 0);
    setTextBase(props?.itemData?.text || "");
    setXRefBase(props?.itemData?.xRef || 0);
    setYRefBase(props?.itemData?.yRef || 0);
    setLevelAdjust(props?.itemData?.level == 1 ? 20 : 60);

    setTextX(props?.itemData?.level == 1 ? props?.itemData?.xRef + 36 : props?.itemData?.xRef + 76);
    setTextY(props?.itemData?.yRef + props?.itemData?.length / 2 - 10);
  }, [props]);

  return (
    <>
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
        text={textBase}
        rotation={rotation}
        fontSize={16}
      />
    </>
  );
}

LineTemplateVertical.propTypes = {
  itemData: PropTypes.object,
  id: PropTypes.number,
};
