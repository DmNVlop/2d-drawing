import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Arc, Layer, Line, Rect, Stage, Text } from "react-konva";

import CounterTop from "../shared/counter-top";
import { setWoody } from "../../handlers/woody";

import { RECT_DATA_INIT } from "../Utils/RECT_DATA_INIT";

import { INPUTS_CORNERS_VAL } from "../Utils/INPUT_VALIDATIONS";

//import { INPUTS_CORNERS_VAL } from "../Utils/INPUT_VALIDATIONS";

const titlePage = "Encimera Simple";

function SimpleCT() {
  const [rectDataContext, setRectDataContext] = useState(RECT_DATA_INIT);

  const handleSetWoody = async (params) => {
    try {
      const result = await setWoody(params);
      if (result) {
        console.log("👌 Se ha guardado correctamente", result);
      }
    } catch (error) {
      console.log("⚠️ Error conectando a Woody");
    }
  };

  //-----------------------------
  // Handle KeyDown Enter
  const inputRefs = useRef([]);
  const handleKeyDown = (event, index) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const nextInput = inputRefs.current[index + 1];
      if (nextInput) {
        nextInput.focus();
      } else {
        inputRefs.current[0].focus();
      }
    }
  };
  const handleFocus = (event) => {
    event.target.select();
  };

  // Handle Dimensions
  /*
  const handleChangeDimensions = (dimension, event) => {
    setRectDataContext({
      ...rectDataContext,
      [dimension]: parseInt(event.target.value),
    });
  };
  */

  // const handleChangeDimensions = (dimension, event) => {
  //   if (
  //     (event.target.value <= INPUTS_DIMENTIONS_W.max && dimension == "width") ||
  //     (event.target.value <= INPUTS_DIMENTIONS_H.max && dimension == "height")
  //   ) {
  //     setRectDataContext({
  //       ...rectDataContext,
  //       [dimension]: parseInt(event.target.value),
  //     });
  //   }
  // };

  // Handle Corners
  const handleChangeCorners = (event) => {
    if (!event.target.value) return;

    const refCorner = {
      TL: 0,
      TR: 1,
      BR: 2,
      BL: 3,
    };
    const pos = refCorner[event.target.name];

    const newArray = [...rectDataContext];
    let newCorner = newArray[0].cornerRadius;
    newCorner[pos] = parseInt(event.target.value);
    newArray[0].cornerRadius = newCorner;

    setRectDataContext([...newArray]);
  };

  // Handle Click
  // const handleRotation = (directionRotation, event) => {
  //   setRectDataContext((prev) => {
  //     const tempData = prev;
  //     const dataRotation = {
  //       origin: () => {
  //         tempData.textData[0].visible = true;
  //         tempData.textData[1].visible = true;
  //         tempData.textData[2].visible = true;
  //         tempData.textData[3].visible = true;
  //         return {
  //           rotation: 0,
  //           xGroup: 0,
  //           yGroup: 0,
  //         };
  //       },
  //       counterclockwise: () => {
  //         tempData.textData[0].visible = false;
  //         tempData.textData[1].visible = true;
  //         tempData.textData[2].visible = true;
  //         tempData.textData[3].visible = true;
  //         return {
  //           rotation: 90,
  //           xGroup: 0 + 80,
  //           yGroup: 0,
  //         };
  //       },
  //       againstclockwise: () => {
  //         tempData.textData[0].visible = true;
  //         tempData.textData[1].visible = true;
  //         tempData.textData[2].visible = false;
  //         tempData.textData[3].visible = true;
  //         return {
  //           rotation: 90,
  //           xGroup:
  //             rectDataContext?.width * SCREEN_MULIPLY +
  //             rectDataContext?.height * SCREEN_MULIPLY +
  //             80,
  //           yGroup: 0,
  //         };
  //       },
  //     };
  //     const dataTemp = { ...tempData, ...dataRotation[directionRotation]() };
  //     return dataTemp;
  //   });
  // };

  const forReturnData = (newValue, arrayPos) => {
    setRectDataContext((prev) => {
      const tempArray = [...prev];
      tempArray[arrayPos] = newValue;
      return tempArray;
    });
  };

  const rectNew = useRef();
  let imageUsed = null;

  // useEffect(() => {
  //   if (rectNew) {
  //     const img = () => {
  //       const image = new Image();
  //       image.onload = () => {
  //         imageUsed = image;
  //       };
  //       image.src = "/images/patron-de-tablero-de-madera.png";
  //     };
  //   }
  // }, []);

  return (
    <>
      <header id="header">
        <div className="h-first-sec">
          <div>
            <h2>{titlePage}</h2>
            {/* <div className="title-sec">Seleccione una variante...</div> */}
          </div>
          <Link to="/">
            <img src="/images/home.jpg" alt="Ir a Inicio" title="Ir a Inicio" />
          </Link>
          <Link
            onClick={() =>
              handleSetWoody({
                data: rectDataContext,
                stateSetted: null,
                ct: "S",
              })
            }
          >
            <img src="/images/guardar.jpg" alt="Guardar" title="Guardar" />
          </Link>
        </div>

        {/* <div className="data-sec">
          <Link to="/simple">
            <img
              src="/images/S.png"
              alt="Encimera Simple"
              title="Encimera Simple"
            />
          </Link>
          <Link to="/lct">
            <img src="/images/L_0.png" alt="Encimera L" title="Encimera L" />
          </Link>
          <Link to="/uct">
            <img src="/images/U_0.png" alt="Encimera U" title="Encimera U" />
          </Link>
        </div>

        <Link
          onClick={() =>
            handleSetWoody({
              data: rectDataContext,
            })
          }
        >
          Guardar
        </Link> */}
      </header>

      <section id="simple-data">
        {/* <div className="input-field">
          <label to="width">Ancho</label>
          <input
            type="number"
            value={rectDataContext.width}
            onChange={(event) => handleChangeDimensions("width", event)}
            placeholder="Width"
            min={INPUTS_DIMENTIONS_W.min}
            max={INPUTS_DIMENTIONS_W.max}
            step={1}
            title={`Los valor debe estar entre ${INPUTS_DIMENTIONS_W.min} y ${INPUTS_DIMENTIONS_W.max}`}
            name={"width"}
            ref={(el) => (inputRefs.current[0] = el)}
            onKeyDown={(event) => handleKeyDown(event, 0)}
            onFocus={handleFocus}
          />
        </div>
        <div className="input-field">
          <label to="height">Alto</label>
          <input
            type="number"
            value={rectDataContext.height}
            onChange={(event) => handleChangeDimensions("height", event)}
            placeholder="Height"
            min={INPUTS_DIMENTIONS_H.min}
            max={INPUTS_DIMENTIONS_H.max}
            step={1}
            title={`Los valor debe estar entre ${INPUTS_DIMENTIONS_H.min} y ${INPUTS_DIMENTIONS_H.max}`}
            name="height"
            ref={(el) => (inputRefs.current[1] = el)}
            onKeyDown={(event) => handleKeyDown(event, 1)}
            onFocus={handleFocus}
          />
        </div> */}

        <div className="input-field">
          <label to="TL">Arriba Izq</label>
          <input
            type="number"
            value={rectDataContext[0]?.cornerRadius[0] || 0}
            onChange={(event) => handleChangeCorners(event)}
            placeholder="Arr Izq"
            min={INPUTS_CORNERS_VAL.min}
            max={INPUTS_CORNERS_VAL.max}
            name="TL"
            ref={(el) => (inputRefs.current[0] = el)}
            onKeyDown={(event) => handleKeyDown(event, 0)}
            onFocus={handleFocus}
          />
        </div>

        <div className="input-field">
          <label to="TR">Arriba Der</label>
          <input
            type="number"
            value={rectDataContext[0]?.cornerRadius[1] || 0}
            onChange={(event) => handleChangeCorners(event)}
            placeholder="Arr Der"
            min={INPUTS_CORNERS_VAL.min}
            max={INPUTS_CORNERS_VAL.max}
            name="TR"
            ref={(el) => (inputRefs.current[1] = el)}
            onKeyDown={(event) => handleKeyDown(event, 1)}
            onFocus={handleFocus}
          />
        </div>

        <div className="input-field">
          <label to="BL">Abajo Izq</label>
          <input
            type="number"
            value={rectDataContext[0]?.cornerRadius[3] || 0}
            onChange={(event) => handleChangeCorners(event)}
            placeholder="Ab Izq"
            min={INPUTS_CORNERS_VAL.min}
            max={INPUTS_CORNERS_VAL.max}
            name="BL"
            ref={(el) => (inputRefs.current[2] = el)}
            onKeyDown={(event) => handleKeyDown(event, 2)}
            onFocus={handleFocus}
          />
        </div>

        <div className="input-field">
          <label to="BR">Abajo Der</label>
          <input
            type="number"
            value={rectDataContext[0]?.cornerRadius[2] || 0}
            onChange={(event) => handleChangeCorners(event)}
            placeholder="Ab Der"
            min={INPUTS_CORNERS_VAL.min}
            max={INPUTS_CORNERS_VAL.max}
            name="BR"
            ref={(el) => (inputRefs.current[3] = el)}
            onKeyDown={(event) => handleKeyDown(event, 3)}
            onFocus={handleFocus}
          />
        </div>

        {/* <button type="button" >Bordes</button> */}
      </section>

      {/* <button
        type="button"
        onClick={(event) => handleRotation("counterclockwise", event)}
      >
        BTN 90
      </button>
      <button
        type="button"
        onClick={(event) => handleRotation("origin", event)}
      >
        BTN 0
      </button>
      <button
        type="button"
        onClick={(event) => handleRotation("againstclockwise", event)}
      >
        BTN -90
      </button> */}
      <section id="countertop">
        <Stage
          width={window.innerWidth - 20}
          height={window.innerHeight - 160}
          draggable
        >
          <Layer x={30} y={80}>
            {/* Countertopss */}
            {/* <CounterTop
              rectDataIn={rectDataContext[0]}
              arrayPos={0}
              forReturnData={forReturnData}
            /> */}

            {/* <Rect x={20} y={20} width={100} height={100} fill="red" />
            <Arc
              x={20} // La misma x que el Rect
              y={20} // La misma y que el Rect
              innerRadius={0}
              outerRadius={40} // Radio del arco
              angle={90} // Ángulo del arco
              fill="white"
              rotation={0} // Rotación del arco
            /> */}

            {/* <Rect x={20} y={20} width={100} height={100} fill="red" />
            <Arc
              x={20} // La misma x que el Rect
              y={120} // y del Rect + altura del Rect
              innerRadius={0}
              outerRadius={20} // Radio del arco
              angle={90} // Ángulo del arco
              fill="yellow" // Color de fondo del Stage
              rotation={180} // Rotación del arco
            />
            <Line
              points={[120, 20, 120, 40, 140, 40]} // Puntos para dibujar la línea
              fill="yellow"
              stroke="black" // Color de fondo del Stage
              strokeWidth={20} // Ancho de la línea
            /> */}

            <Rect
              ref={rectNew}
              x={0}
              y={0}
              width={500}
              height={500}
              fill="#c7aa89"
              fillPriority={"pattern"}
              fillPatternImage={imageUsed}
              fillPatternRepeat="repeat"
              cornerRadius={[100, 0, 0, 0]}
            />
            <Line
              points={[400, 0, 500, 100, 500, 0]} // Puntos para dibujar la línea
              fill="white"
              // stroke="black" // Color de fondo del Stage
              // strokeWidth={1} // Ancho de la línea
              closed={true}
            />
          </Layer>
          <Layer x={30} y={80}>
            <Line
              points={[520, 0, 520, 500]} // Puntos para dibujar la línea
              fill="black"
              stroke="black" // Color de fondo del Stage
              strokeWidth={1} // Ancho de la línea
              // closed={true}
            />
            <Line
              points={[510, 0, 530, 0]} // Puntos para dibujar la línea
              fill="black"
              stroke="black" // Color de fondo del Stage
              strokeWidth={1} // Ancho de la línea
              // closed={true}
            />
            <Line
              points={[510, 500, 530, 500]} // Puntos para dibujar la línea
              fill="black"
              stroke="black" // Color de fondo del Stage
              strokeWidth={1} // Ancho de la línea
              // closed={true}
            />
            <Text x={540} y={240} text="500" rotation={90} fontSize={16} />

            <Line
              points={[560, 0, 560, 100]} // Puntos para dibujar la línea
              fill="black"
              stroke="black" // Color de fondo del Stage
              strokeWidth={1} // Ancho de la línea
              // closed={true}
            />
            <Line
              points={[550, 0, 570, 0]} // Puntos para dibujar la línea
              fill="black"
              stroke="black" // Color de fondo del Stage
              strokeWidth={1} // Ancho de la línea
              // closed={true}
            />
            <Line
              points={[550, 100, 570, 100]} // Puntos para dibujar la línea
              fill="black"
              stroke="black" // Color de fondo del Stage
              strokeWidth={1} // Ancho de la línea
              // closed={true}
            />
            <Text x={580} y={40} text="100" rotation={90} fontSize={16} />

            <Line
              points={[560, 100, 560, 500]} // Puntos para dibujar la línea
              fill="black"
              stroke="black" // Color de fondo del Stage
              strokeWidth={1} // Ancho de la línea
              // closed={true}
            />
            <Line
              points={[550, 100, 570, 100]} // Puntos para dibujar la línea
              fill="black"
              stroke="black" // Color de fondo del Stage
              strokeWidth={1} // Ancho de la línea
              // closed={true}
            />
            <Line
              points={[550, 500, 570, 500]} // Puntos para dibujar la línea
              fill="black"
              stroke="black" // Color de fondo del Stage
              strokeWidth={1} // Ancho de la línea
              // closed={true}
            />
            <Text x={580} y={290} text="400" rotation={90} fontSize={16} />
          </Layer>

          <Layer x={30} y={80} name="Indications Top">
            <Line
              points={[0, -20, 500, -20]} // Puntos para dibujar la línea
              fill="black"
              stroke="black" // Color de fondo del Stage
              strokeWidth={1} // Ancho de la línea
              // closed={true}
            />
            <Line
              points={[0, -10, 0, -30]} // Puntos para dibujar la línea
              fill="black"
              stroke="black" // Color de fondo del Stage
              strokeWidth={1} // Ancho de la línea
              // closed={true}
            />
            <Line
              points={[500, -10, 500, -30]} // Puntos para dibujar la línea
              fill="black"
              stroke="black" // Color de fondo del Stage
              strokeWidth={1} // Ancho de la línea
              // closed={true}
            />
            <Text x={240} y={-40} text="500" rotation={0} fontSize={16} />

            <Line
              points={[560, 0, 560, 100]} // Puntos para dibujar la línea
              fill="black"
              stroke="black" // Color de fondo del Stage
              strokeWidth={1} // Ancho de la línea
              // closed={true}
            />
            <Line
              points={[550, 0, 570, 0]} // Puntos para dibujar la línea
              fill="black"
              stroke="black" // Color de fondo del Stage
              strokeWidth={1} // Ancho de la línea
              // closed={true}
            />
            <Line
              points={[550, 100, 570, 100]} // Puntos para dibujar la línea
              fill="black"
              stroke="black" // Color de fondo del Stage
              strokeWidth={1} // Ancho de la línea
              // closed={true}
            />
            <Text x={580} y={40} text="100" rotation={90} fontSize={16} />

            <Line
              points={[560, 100, 560, 500]} // Puntos para dibujar la línea
              fill="black"
              stroke="black" // Color de fondo del Stage
              strokeWidth={1} // Ancho de la línea
              // closed={true}
            />
            <Line
              points={[550, 100, 570, 100]} // Puntos para dibujar la línea
              fill="black"
              stroke="black" // Color de fondo del Stage
              strokeWidth={1} // Ancho de la línea
              // closed={true}
            />
            <Line
              points={[550, 500, 570, 500]} // Puntos para dibujar la línea
              fill="black"
              stroke="black" // Color de fondo del Stage
              strokeWidth={1} // Ancho de la línea
              // closed={true}
            />
            <Text x={580} y={290} text="400" rotation={90} fontSize={16} />
          </Layer>
        </Stage>
      </section>
    </>
  );
}

// SimpleCT.propTypes = {
//   dataD: PropTypes.shape({
//     width: PropTypes.number,
//     height: PropTypes.number,
//     rotation: PropTypes.number,
//   }),
// };

export default SimpleCT;
