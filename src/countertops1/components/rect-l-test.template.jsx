import { Layer, Path, Stage } from "react-konva";

export default function RectLTemplateTest() {
  return (
    <>
      <h2>HOLA</h2>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Path
            data="M0,0h600v200H100z"
            fill="blue"
            stroke="black"
            strokeWidth={2}
            draggable
          />
        </Layer>
      </Stage>
    </>
  );
}
