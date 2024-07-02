import { Line, Text } from "react-konva";
import PropTypes from "prop-types";
import { useCustomURLHandler } from "../helpers/location.hook";
import { useCountertopContext } from "../context/ct-context";

export default function LineTemplateHorizontal(props) {
  const { itemData } = props;
  const { countertops } = useCountertopContext();
  const { ATTRIB_SETTED } = useCustomURLHandler();

  const xRefBase = 0; // itemData.xRef || 0
  const yRefBase = 0; // itemData.yRef || 0
  const lengthBase = itemData.width || 0;
  const levelAdjust = 20; // itemData.level == 1 ? 20 : 60;

  const textBase = itemData.width || "";
  const xBase_multiplier =
    countertops[ATTRIB_SETTED]?.rootConfig?.scaleX <= 0.5 ? 26 : 36;
  const textX =
    xRefBase +
      lengthBase / 2 -
      10 / countertops[ATTRIB_SETTED]?.rootConfig?.scaleX || 1; //
  const textY =
    yRefBase -
      xBase_multiplier / countertops[ATTRIB_SETTED]?.rootConfig?.scaleX || 1; // itemData.level == 1 ? yRefBase - 36 : yRefBase - 76;

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
        strokeWidth={1 / countertops[ATTRIB_SETTED]?.rootConfig?.scaleX || 1}
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
        strokeWidth={1 / countertops[ATTRIB_SETTED]?.rootConfig?.scaleX || 1}
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
        strokeWidth={1 / countertops[ATTRIB_SETTED]?.rootConfig?.scaleX || 1}
      />
      <Text
        x={Number.isFinite(textX) ? textX : 0}
        y={Number.isFinite(textY) ? textY : 0}
        text={textBase}
        rotation={rotation}
        fontSize={16}
        scaleX={1 / countertops[ATTRIB_SETTED]?.rootConfig?.scaleX || 1}
        scaleY={1 / countertops[ATTRIB_SETTED]?.rootConfig?.scaleY || 1}
      />
    </>
  );
}

LineTemplateHorizontal.propTypes = {
  itemData: PropTypes.object,
};
