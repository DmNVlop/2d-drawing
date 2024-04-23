import { useState } from "react";
import { Stage, Layer, Rect } from "react-konva";
import { Link } from "react-router-dom";

const titlePage = "Drawer1";

function Drawer1() {
  const [color, setColor] = useState("gray");
  const [dimensions, setDimensions] = useState({ width: 100, height: 50 });
  const [corners, setCorners] = useState([0, 0, 0, 0]);

  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };

  const handleChangeDimensions = (dimension, event) => {
    setDimensions({ ...dimensions, [dimension]: event.target.value });
  };

  const handleCorners = (event) => {
    setCorners([event.target.value, 0, 0, 0]);
  };

  return (
    <>
      <header id="header">
        <h2>{titlePage}</h2>
        <Link to="/">Go Home Budy</Link>
      </header>

      <div>
        <input type="color" value={color} onChange={handleChangeColor} />
        <input
          type="number"
          value={dimensions.width}
          onChange={(event) => handleChangeDimensions("width", event)}
          placeholder="Width"
        />
        <input
          type="number"
          value={dimensions.height}
          onChange={(event) => handleChangeDimensions("height", event)}
          placeholder="Height"
        />
        <input
          type="number"
          value={corners[0]}
          onChange={(event) => handleCorners(event)}
          placeholder="Corner"
        />
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Rect
              x={20}
              y={20}
              width={dimensions.width}
              height={dimensions.height}
              fill={color}
              stroke={"black"}
              strokeWidth={"1"}
              cornerRadius={corners}
              draggable
            />
            {/* <Rect
              x={20 + dimensions.width}
              y={20}
              width={dimensions.width}
              height={dimensions.height}
              fill={color}
              stroke={'black'}
              strokeWidth={'1'}
              draggable
            /> */}
          </Layer>
        </Stage>
      </div>
    </>
  );
}

export default Drawer1;
