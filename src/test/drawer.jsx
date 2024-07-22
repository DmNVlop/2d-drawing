import { Layer, Rect, Stage } from "react-konva";
import { Link } from "react-router-dom";

const titlePage = "Drawer";

const image = new Image();
image.src ="/images/patron-roble_hickory.jpg";

function Drawer() {
  return (
    <>
      <header id="header">
        <h2>{titlePage}</h2>
        <Link to="/">Go Home Budy</Link>
      </header>

      <div>
        <Stage
          width={window.innerWidth - 100}
          height={window.innerHeight - 100}
        >
          <Layer draggable>
            <Rect
              x={20}
              y={20}
              width={150}
              height={300}
              stroke={"black"}
              strokeWidth={"0.5"}
              cornerRadius={[0, 0, 20, 20]}
              fillPatternImage={image}
              fillPatternRepeat="repeat"
              fillPatternScaleX={0.6}
              fillPatternScaleY={0.3}
            />
            <Rect
              x={170}
              // x={150}
              y={20}
              width={500}
              height={150}
              stroke={"black"}
              strokeWidth={"0.5"}
              cornerRadius={[0, 75, 75, 0]}
              // cornerRadius={[0, 20, 20, 20]}
              fillPatternImage={image}
              fillPatternRepeat="repeat"
              fillPatternScaleX={0.6}
              fillPatternScaleY={0.3}
            />
          </Layer>
        </Stage>
      </div>
    </>
  );
}

export default Drawer;
