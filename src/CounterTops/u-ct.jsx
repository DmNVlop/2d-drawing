import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Layer, Stage } from "react-konva";

import { setWoody } from "../../handlers/woody";

import CounterTop from "../shared/counter-top";
import {
  RECT_DATA_INIT_U_1,
  RECT_DATA_INIT_U_2,
  RECT_DATA_INIT_U_3,
  RECT_DATA_INIT_U_4,
} from "../Utils/RECT_DATA_INIT_U";
import {
  UctDataRotation_L1,
  UctDataRotation_L2,
  UctDataRotation_L3,
  UctDataRotation_L4,
} from "./U_CT_DATA_ROTATION";

export default function Uct() {
  const titlePage = "Encimera en U";
  const [rectDataContextU, setRectDataContextU] = useState(RECT_DATA_INIT_U_1);
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
    setRectDataContextU(value);
    setStateSetted(stateNumber);
  };

  // Handle Click
  // const handleClickbtn = (directionRotation, event) => {
  //   setRectDataContextU((prev) => {
  //     const dataRotation = {
  //       origin: { rotation: 0, xGroup: 0, yGroup: 0 },
  //       counterclockwise: { rotation: 90, xGroup: 0 + 80, yGroup: 0 },
  //       againstclockwise: { rotation: 90, xGroup: (prev?.width*SCREEN_MULIPLY) + (prev?.height*SCREEN_MULIPLY) + 80, yGroup: 0 },
  //     };
  //     return { ...prev, ...dataRotation[directionRotation] };
  //   });
  // };

  // Handle Rotation
  const handleRotation = (directionRotation, arrayPosition) => {
    setRectDataContextU((prev) => {
      const arrayDataCopy = [...prev];
      const tempData = arrayDataCopy[arrayPosition];

      const dataRotation = () => {
        if (stateSetted == 1) {
          return UctDataRotation_L1(
            arrayDataCopy,
            directionRotation,
            arrayPosition
          );
        }
        if (stateSetted == 2) {
          return UctDataRotation_L2(
            arrayDataCopy,
            directionRotation,
            arrayPosition
          );
        }
        if (stateSetted == 3) {
          return UctDataRotation_L3(
            arrayDataCopy,
            directionRotation,
            arrayPosition
          );
        }
        if (stateSetted == 4) {
          return UctDataRotation_L4(
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
    setRectDataContextU((prev) => {
      const tempArray = [...prev];
      tempArray[arrayPos] = newValue;
      selectHandleRotation();
      return tempArray;
    });
  };

  const selectHandleRotation = () => {
    if (stateSetted == 1) {
      handleRotation("againstclockwise", 0);
      handleRotation("origin", 1);
      handleRotation("counterclockwise", 2);
    }
    if (stateSetted == 2) {
      handleRotation("againstclockwise", 0);
      handleRotation("origin", 1);
      handleRotation("counterclockwise", 2);
    }
    if (stateSetted == 3) {
      handleRotation("againstclockwise", 0);
      handleRotation("origin", 1);
      handleRotation("counterclockwise", 2);
    }
    if (stateSetted == 4) {
      handleRotation("againstclockwise", 0);
      handleRotation("origin", 1);
      handleRotation("counterclockwise", 2);
    }
  };

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
                data: rectDataContextU,
                stateSetted,
                ct: "U",
              })
            }
          >
            <img src="/images/guardar.jpg" alt="Guardar" title="Guardar" />
          </Link>
        </div>

        <div className="data-sec">
          <Link onClick={() => handleClick(RECT_DATA_INIT_U_1, 1)}>
            <img
              src="/images/U_4.png"
              alt="Encimera U Modelo 1"
              title="Encimera U Modelo 1"
            />
          </Link>
          <Link onClick={() => handleClick(RECT_DATA_INIT_U_2, 2)}>
            <img
              src="/images/U_1.png"
              alt="Encimera U Modelo 2"
              title="Encimera U Modelo 2"
            />
          </Link>
          <Link onClick={() => handleClick(RECT_DATA_INIT_U_3, 3)}>
            <img
              src="/images/U_2.png"
              alt="Encimera U Modelo 3"
              title="Encimera U Modelo 3"
            />
          </Link>
          <Link onClick={() => handleClick(RECT_DATA_INIT_U_4, 4)}>
            <img
              src="/images/U_3.png"
              alt="Encimera U Modelo 4"
              title="Encimera U Modelo 4"
            />
          </Link>
        </div>
      </header>

      {/* <div className="btns">
        <div
          className="button_slide slide_right"
          onClick={() => handleClick(RECT_DATA_INIT_U_1, 1)}
        >
          <img src="" alt="myImage" />
          Modelo 1
        </div>

        <div
          className="button_slide slide_right"
          onClick={() => handleClick(RECT_DATA_INIT_U_2, 2)}
        >
          <img src="" alt="myImage" />
          Modelo 2
        </div>

        <div
          className="button_slide slide_right"
          onClick={() => handleClick(RECT_DATA_INIT_U_3, 3)}
        >
          <img src="" alt="myImage" />
          Modelo 3
        </div>

        <div
          className="button_slide slide_right"
          onClick={() => handleClick(RECT_DATA_INIT_U_4, 4)}
        >
          <img src="" alt="myImage" />
          Modelo 4
        </div>
      </div> */}

      <section id="countertop">
        <Stage width={window.innerWidth - 20} height={window.innerHeight - 200}>
          <Layer draggable>
            {/* Countertopss */}
            <CounterTop
              rectDataIn={rectDataContextU[2]}
              arrayPos={2}
              forReturnData={forReturnData}
            />

            <CounterTop
              rectDataIn={rectDataContextU[1]}
              arrayPos={1}
              forReturnData={forReturnData}
            />

            <CounterTop
              rectDataIn={rectDataContextU[0]}
              arrayPos={0}
              forReturnData={forReturnData}
            />
          </Layer>
        </Stage>
      </section>
    </>
  );
}
