import { Layer, Stage } from "react-konva";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { setWoody } from "../../handlers/woody";

import CounterTop from "../shared/counter-top";
import {
  RECT_DATA_INIT_L_1,
  RECT_DATA_INIT_L_2,
} from "../Utils/RECT_DATA_INIT_L";
import { LctDataRotation_L1, LctDataRotation_L2 } from "./L_CT_DATA_ROTATION";

export default function Lct() {

  const titlePage = "Encimera en L";
  const [rectDataContextL, setRectDataContextL] = useState(RECT_DATA_INIT_L_1);
  const [stateSetted, setStateSetted] = useState(1);


  const handleSetWoody = async (params) => {
    try {
      const result = await setWoody(params);
      if (result) {
        console.log("Se ha guardado correctamente", result);
      }
    } catch (error) {
      console.log("Error conectando a Woody");
    }
  };

  const handleClick = (value, stateNumber) => {
    setRectDataContextL(value);
    setStateSetted(stateNumber);
  };

  // Handle Rotation
  const handleRotation = (directionRotation, arrayPosition) => {
    setRectDataContextL((prev) => {
      const arrayDataCopy = [...prev];

      const dataRotation = () => {
        if (stateSetted == 1) {
          return LctDataRotation_L1(
            arrayDataCopy,
            directionRotation,
            arrayPosition
          );
        }
        if (stateSetted == 2) {
          return LctDataRotation_L2(
            arrayDataCopy,
            directionRotation,
            arrayPosition
          );
        }
      };

      arrayDataCopy[arrayPosition] = {
        ...prev[arrayPosition],
        ...dataRotation(),
      };
      return arrayDataCopy;
    });
  };

  const forReturnData = (newValue, arrayPos) => {
    setRectDataContextL((prev) => {
      const tempArray = [...prev];
      tempArray[arrayPos] = newValue;
      selectHandleRotation();
      return tempArray;
    });
  };

  function selectHandleRotation() {
    if (stateSetted == 1) {
      handleRotation("againstclockwise", 0);
      handleRotation("origin", 1);
    }
    if (stateSetted == 2) {
      handleRotation("againstclockwise", 0);
      handleRotation("origin", 1);
    }
  }

  // useMemo(() => {
  //   selectHandleRotation();
  // }, [stateSetted]);

  useEffect(() => {
    selectHandleRotation();
  }, [stateSetted]);
  // setStateSetted(1);

  return (
    <>
      <header id="header">
        <div className="h-first-sec">
          <div>
            <h2>{titlePage}</h2>
            <div className="title-sec">Seleccione una variante...</div>
          </div>
          <Link to="/">
            <img src="/images/home.jpg" alt="Ir a Inicio" title="Ir a Inicio" />
          </Link>
          <Link
            onClick={() =>
              handleSetWoody({
                data: rectDataContextL,
                stateSetted,
                ct: "L",
              })
            }
          >
            <img src="/images/guardar.jpg" alt="Guardar" title="Guardar" />
          </Link>
        </div>

        <div className="data-sec">
          <Link onClick={() => handleClick(RECT_DATA_INIT_L_1, 1)}>
            <img
              src="/images/L_2.png"
              alt="Encimera L Modelo 1"
              title="Encimera L Modelo 1"
            />
          </Link>
          <Link onClick={() => handleClick(RECT_DATA_INIT_L_2, 2)}>
            <img
              src="/images/L_1.png"
              alt="Encimera L Modelo 2"
              title="Encimera L Modelo 2"
            />
          </Link>
        </div>
      </header>

      {/* <div className="btns">
        <div
          className="button_slide slide_right"
          onClick={() => handleClick(RECT_DATA_INIT_L_1, 1)}
        >
          <img src="" alt="myImage" />
          Modelo 1
        </div>
        <div
          className="button_slide slide_right"
          onClick={() => handleClick(RECT_DATA_INIT_L_2, 2)}
        >
          <img src="" alt="myImage" />
          Modelo 2
        </div>
      </div> */}

      <section id="countertop">
        <Stage width={window.innerWidth - 20} height={window.innerHeight - 200}>
          <Layer
            x={rectDataContextL[0].xLayer}
            y={rectDataContextL[0].yLayer}
            draggable
          >
            {/* Countertopss */}
            <CounterTop
              rectDataIn={rectDataContextL[0]}
              arrayPos={0}
              forReturnData={forReturnData}
            />
            <CounterTop
              rectDataIn={rectDataContextL[1]}
              arrayPos={1}
              forReturnData={forReturnData}
            />
          </Layer>
        </Stage>
      </section>
    </>
  );
}
