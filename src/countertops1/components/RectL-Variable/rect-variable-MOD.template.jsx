import { Group, Line, Rect, Shape } from "react-konva";

// PRINCIPAL COMPONENT
function RectVariableMOD() {
  return (
    <Group>
      <Line
          points={[50, 50, 450, 50, 550, 250, 150, 250]}
          closed
          stroke="black"
          fill="lightblue"
        />
    </Group>
  );
}

export default RectVariableMOD;
