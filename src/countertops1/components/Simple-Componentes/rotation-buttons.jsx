import { Button, Tooltip } from "antd";
import "./rotation-buttons.style.css";
import { RedoOutlined, UndoOutlined } from "@ant-design/icons";
import { useCountertopContext } from "../../context/ct-context";
import { useCustomURLHandler } from "../../helpers/location.hook";
import { GLOBAL_CT_M } from "../../mocks/global-ct.mock";
import { SHAPE_TYPES } from "../../mocks/SHAPE_TYPES.const";

function RotationButtonsComponent() {
  const {
    countertops,
    getPartsDataFromPieceCtx,
    setRotationStageOnRootConfigCtx,
    setOffsetStageOnRootConfigCtx,
  } = useCountertopContext();

  const { ATTRIB_SETTED } = useCustomURLHandler();

  //#region ROTATION CALCS
  let finalOffsetX = countertops[ATTRIB_SETTED].rootConfig?.offsetXStage;
  let finalOffsetY = countertops[ATTRIB_SETTED].rootConfig?.offsetYStage;

  //#region Calculo de Offset para 0 grados
  const calc00 = () => {
    finalOffsetX = 0;
    finalOffsetY = 0;
    setOffsetStageOnRootConfigCtx(finalOffsetX, finalOffsetY);
  };
  //#endregion

  //#region Calculo de Offset para -90 y 270 grados
  const calc90270 = () => {
    const shapeCalculationsX = {
      [SHAPE_TYPES.SIMPLE]: () =>
        countertops[ATTRIB_SETTED]?.partsData[0]?.width +
        GLOBAL_CT_M.xGlobalLayer * 2,
      [SHAPE_TYPES.SQUARE]: () =>
        countertops[ATTRIB_SETTED]?.partsData[0]?.width +
        GLOBAL_CT_M.xGlobalLayer * 2,
      [SHAPE_TYPES.CIRCLE]: () =>
        countertops[ATTRIB_SETTED]?.partsData[0]?.width +
        GLOBAL_CT_M.xGlobalLayer * 2,
      [SHAPE_TYPES.LShaped_l1]: () =>
        countertops[ATTRIB_SETTED]?.partsData[0]?.height +
        countertops[ATTRIB_SETTED]?.partsData[1]?.width +
        GLOBAL_CT_M.xGlobalLayer * 2,
      [SHAPE_TYPES.LShaped_l2]: () =>
        countertops[ATTRIB_SETTED]?.partsData[1]?.width +
        GLOBAL_CT_M.xGlobalLayer * 2,
      [SHAPE_TYPES.UShaped_u1]: () =>
        countertops[ATTRIB_SETTED]?.partsData[0]?.height +
        countertops[ATTRIB_SETTED]?.partsData[1]?.width +
        GLOBAL_CT_M.xGlobalLayer * 2,
      [SHAPE_TYPES.UShaped_u2]: () =>
        countertops[ATTRIB_SETTED]?.partsData[0]?.height +
        countertops[ATTRIB_SETTED]?.partsData[1]?.width +
        countertops[ATTRIB_SETTED]?.partsData[2]?.height +
        GLOBAL_CT_M.xGlobalLayer * 2,
      [SHAPE_TYPES.UShaped_u3]: () =>
        countertops[ATTRIB_SETTED]?.partsData[1]?.width +
        countertops[ATTRIB_SETTED]?.partsData[2]?.height +
        GLOBAL_CT_M.xGlobalLayer * 2,
      [SHAPE_TYPES.UShaped_u4]: () =>
        countertops[ATTRIB_SETTED]?.partsData[1]?.width +
        GLOBAL_CT_M.xGlobalLayer * 2,
    };

    if (shapeCalculationsX.hasOwnProperty(ATTRIB_SETTED)) {
      finalOffsetX = shapeCalculationsX[ATTRIB_SETTED]();
    } else {
      finalOffsetX = 0;
    }

    const shapeCalculationsY = {};

    if (shapeCalculationsY.hasOwnProperty(ATTRIB_SETTED)) {
      finalOffsetY = 0;
    } else {
      finalOffsetY = 0;
    }

    setOffsetStageOnRootConfigCtx(finalOffsetX, finalOffsetY);
  };
  //#endregion

  //#region Calculo de Offset para -180 y 180 grados
  const calc180180 = () => {
    const shapeCalculationsX = {
      [SHAPE_TYPES.SIMPLE]: () =>
        countertops[ATTRIB_SETTED]?.partsData[0]?.width +
        GLOBAL_CT_M.xGlobalLayer * 2,
      [SHAPE_TYPES.SQUARE]: () =>
        countertops[ATTRIB_SETTED]?.partsData[0]?.width +
        GLOBAL_CT_M.xGlobalLayer * 2,
      [SHAPE_TYPES.CIRCLE]: () =>
        countertops[ATTRIB_SETTED]?.partsData[0]?.width +
        GLOBAL_CT_M.xGlobalLayer * 2,
      [SHAPE_TYPES.LShaped_l1]: () =>
        countertops[ATTRIB_SETTED]?.partsData[0]?.height +
        countertops[ATTRIB_SETTED]?.partsData[1]?.width +
        GLOBAL_CT_M.xGlobalLayer * 2,
      [SHAPE_TYPES.LShaped_l2]: () =>
        countertops[ATTRIB_SETTED]?.partsData[1]?.width +
        GLOBAL_CT_M.xGlobalLayer * 2,
      [SHAPE_TYPES.UShaped_u1]: () =>
        countertops[ATTRIB_SETTED]?.partsData[0]?.height +
        countertops[ATTRIB_SETTED]?.partsData[1]?.width +
        GLOBAL_CT_M.xGlobalLayer * 2,
      [SHAPE_TYPES.UShaped_u2]: () =>
        countertops[ATTRIB_SETTED]?.partsData[0]?.height +
        countertops[ATTRIB_SETTED]?.partsData[1]?.width +
        countertops[ATTRIB_SETTED]?.partsData[2]?.height +
        GLOBAL_CT_M.xGlobalLayer * 2,
      [SHAPE_TYPES.UShaped_u3]: () =>
        countertops[ATTRIB_SETTED]?.partsData[1]?.width +
        countertops[ATTRIB_SETTED]?.partsData[2]?.height +
        GLOBAL_CT_M.xGlobalLayer * 2,
      [SHAPE_TYPES.UShaped_u4]: () =>
        countertops[ATTRIB_SETTED]?.partsData[1]?.width +
        GLOBAL_CT_M.xGlobalLayer * 2,
    };

    if (shapeCalculationsX.hasOwnProperty(ATTRIB_SETTED)) {
      finalOffsetX = shapeCalculationsX[ATTRIB_SETTED]();
    } else {
      finalOffsetX = 0;
    }

    const shapeCalculationsY = {
      [SHAPE_TYPES.SIMPLE]: () =>
        countertops[ATTRIB_SETTED]?.partsData[0]?.height +
        GLOBAL_CT_M.xGlobalLayer * 2,
      [SHAPE_TYPES.SQUARE]: () =>
        countertops[ATTRIB_SETTED]?.partsData[0]?.height +
        GLOBAL_CT_M.xGlobalLayer * 2,
      [SHAPE_TYPES.CIRCLE]: () =>
        countertops[ATTRIB_SETTED]?.partsData[0]?.height +
        GLOBAL_CT_M.xGlobalLayer * 2,
      [SHAPE_TYPES.LShaped_l1]: () =>
        countertops[ATTRIB_SETTED]?.partsData[0]?.width +
        GLOBAL_CT_M.xGlobalLayer * 2,
      [SHAPE_TYPES.LShaped_l2]: () =>
        countertops[ATTRIB_SETTED]?.partsData[0]?.width +
        countertops[ATTRIB_SETTED]?.partsData[1]?.height +
        GLOBAL_CT_M.xGlobalLayer * 2,
      [SHAPE_TYPES.UShaped_u1]: () => {
        const wP1 =
          countertops[ATTRIB_SETTED]?.partsData[0]?.width +
          GLOBAL_CT_M.xGlobalLayer * 2;
        const wP3 =
          countertops[ATTRIB_SETTED]?.partsData[2]?.width +
          countertops[ATTRIB_SETTED]?.partsData[1]?.height +
          GLOBAL_CT_M.xGlobalLayer * 2;
        return wP1 >= wP3 ? wP1 : wP3;
      },
      [SHAPE_TYPES.UShaped_u2]: () => {
        const wP1 =
          countertops[ATTRIB_SETTED]?.partsData[0]?.width +
          GLOBAL_CT_M.xGlobalLayer * 2;
        const wP3 =
          countertops[ATTRIB_SETTED]?.partsData[2]?.width +
          GLOBAL_CT_M.xGlobalLayer * 2;

        return wP1 >= wP3 ? wP1 : wP3;
      },
      [SHAPE_TYPES.UShaped_u3]: () => {
        const wP1 =
          countertops[ATTRIB_SETTED]?.partsData[0]?.width +
          countertops[ATTRIB_SETTED]?.partsData[1]?.height +
          GLOBAL_CT_M.xGlobalLayer * 2;
        const wP3 =
          countertops[ATTRIB_SETTED]?.partsData[2]?.width +
          GLOBAL_CT_M.xGlobalLayer * 2;

        return wP1 >= wP3 ? wP1 : wP3;
      },
      [SHAPE_TYPES.UShaped_u4]: () => {
        const wP1 =
          countertops[ATTRIB_SETTED]?.partsData[0]?.width +
          countertops[ATTRIB_SETTED]?.partsData[1]?.height +
          GLOBAL_CT_M.xGlobalLayer * 2;
        const wP3 =
          countertops[ATTRIB_SETTED]?.partsData[2]?.width +
          countertops[ATTRIB_SETTED]?.partsData[1]?.height +
          GLOBAL_CT_M.xGlobalLayer * 2;

        return wP1 >= wP3 ? wP1 : wP3;
      },
    };

    if (shapeCalculationsY.hasOwnProperty(ATTRIB_SETTED)) {
      finalOffsetY = shapeCalculationsY[ATTRIB_SETTED]();
    } else {
      finalOffsetY = 0;
    }

    setOffsetStageOnRootConfigCtx(finalOffsetX, finalOffsetY);
  };
  //#endregion

  //#region Calculo de Offset para -270 y 90 grados
  const calc27090 = () => {
    finalOffsetX = 0;

    const shapeCalculationsY = {
      [SHAPE_TYPES.SIMPLE]: () =>
        countertops[ATTRIB_SETTED]?.partsData[0]?.height +
        GLOBAL_CT_M.xGlobalLayer * 2,
      [SHAPE_TYPES.SQUARE]: () =>
        countertops[ATTRIB_SETTED]?.partsData[0]?.height +
        GLOBAL_CT_M.xGlobalLayer * 2,
      [SHAPE_TYPES.CIRCLE]: () =>
        countertops[ATTRIB_SETTED]?.partsData[0]?.height +
        GLOBAL_CT_M.xGlobalLayer * 2,
      [SHAPE_TYPES.LShaped_l1]: () =>
        countertops[ATTRIB_SETTED]?.partsData[0]?.width +
        GLOBAL_CT_M.xGlobalLayer * 2,
      [SHAPE_TYPES.LShaped_l2]: () =>
        countertops[ATTRIB_SETTED]?.partsData[0]?.width +
        countertops[ATTRIB_SETTED]?.partsData[1]?.height +
        GLOBAL_CT_M.xGlobalLayer * 2,
      [SHAPE_TYPES.UShaped_u1]: () => {
        const wP1 =
          countertops[ATTRIB_SETTED]?.partsData[0]?.width +
          GLOBAL_CT_M.xGlobalLayer * 2;
        const wP3 =
          countertops[ATTRIB_SETTED]?.partsData[2]?.width +
          countertops[ATTRIB_SETTED]?.partsData[1]?.height +
          GLOBAL_CT_M.xGlobalLayer * 2;
        return wP1 >= wP3 ? wP1 : wP3;
      },
      [SHAPE_TYPES.UShaped_u2]: () => {
        const wP1 =
          countertops[ATTRIB_SETTED]?.partsData[0]?.width +
          GLOBAL_CT_M.xGlobalLayer * 2;
        const wP3 =
          countertops[ATTRIB_SETTED]?.partsData[2]?.width +
          GLOBAL_CT_M.xGlobalLayer * 2;

        return wP1 >= wP3 ? wP1 : wP3;
      },
      [SHAPE_TYPES.UShaped_u3]: () => {
        const wP1 =
          countertops[ATTRIB_SETTED]?.partsData[0]?.width +
          countertops[ATTRIB_SETTED]?.partsData[1]?.height +
          GLOBAL_CT_M.xGlobalLayer * 2;
        const wP3 =
          countertops[ATTRIB_SETTED]?.partsData[2]?.width +
          GLOBAL_CT_M.xGlobalLayer * 2;

        return wP1 >= wP3 ? wP1 : wP3;
      },
      [SHAPE_TYPES.UShaped_u4]: () => {
        const wP1 =
          countertops[ATTRIB_SETTED]?.partsData[0]?.width +
          countertops[ATTRIB_SETTED]?.partsData[1]?.height +
          GLOBAL_CT_M.xGlobalLayer * 2;
        const wP3 =
          countertops[ATTRIB_SETTED]?.partsData[2]?.width +
          countertops[ATTRIB_SETTED]?.partsData[1]?.height +
          GLOBAL_CT_M.xGlobalLayer * 2;

        return wP1 >= wP3 ? wP1 : wP3;
      },
    };

    if (shapeCalculationsY.hasOwnProperty(ATTRIB_SETTED)) {
      finalOffsetY = shapeCalculationsY[ATTRIB_SETTED]();
    } else {
      finalOffsetY = 0;
    }

    setOffsetStageOnRootConfigCtx(finalOffsetX, finalOffsetY);
  };
  //#endregion

  const handleRotationLeft = (e) => {
    const currentRotationSize =
      countertops[ATTRIB_SETTED].rootConfig?.rotationStage;
    const finalRotation =
      currentRotationSize - 90 <= -360 ? 0 : currentRotationSize - 90;
    setRotationStageOnRootConfigCtx(finalRotation);

    if (finalRotation === 0) {
      calc00();
    }

    if (finalRotation == -90) {
      calc90270();
    }

    if (finalRotation == -180) {
      calc180180();
    }

    if (finalRotation == -270) {
      calc27090();
    }
  };

  const handleRotationRight = (e) => {
    const currentRotationSize =
      countertops[ATTRIB_SETTED].rootConfig?.rotationStage;
    const finalRotation =
      currentRotationSize + 90 >= 360 ? 0 : currentRotationSize + 90;
    setRotationStageOnRootConfigCtx(finalRotation);

    if (finalRotation === 0) {
      calc00();
    }

    if (finalRotation == 90) {
      calc27090();
    }

    if (finalRotation == 180) {
      calc180180();
    }

    if (finalRotation == 270) {
      calc90270();
    }
  };

  const handleInfoRotation = () => {
    let textToReturn = "";
    if (
      countertops[ATTRIB_SETTED].rootConfig?.rotationStage == 90 ||
      countertops[ATTRIB_SETTED].rootConfig?.rotationStage == -270
    ) {
      textToReturn = "90";
    } else if (
      countertops[ATTRIB_SETTED].rootConfig?.rotationStage == 180 ||
      countertops[ATTRIB_SETTED].rootConfig?.rotationStage == -180
    ) {
      textToReturn = "180";
    } else if (
      countertops[ATTRIB_SETTED].rootConfig?.rotationStage == 270 ||
      countertops[ATTRIB_SETTED].rootConfig?.rotationStage == -90
    ) {
      textToReturn = "-90";
    } else {
      textToReturn = countertops[ATTRIB_SETTED].rootConfig?.rotationStage;
    }
    return textToReturn;
  };

  return (
    <div id="rotation-buttons">
      <div className="rotation-btn-left">
        <Tooltip title="Girar a la Izquierda">
          <Button
            size="large"
            icon={<UndoOutlined />}
            onClick={handleRotationLeft}
          />
        </Tooltip>
      </div>
      <div className="rotation-btn-right">
        <Tooltip title="Girar a la Derecha">
          <Button
            size="large"
            icon={<RedoOutlined />}
            onClick={handleRotationRight}
          />
        </Tooltip>
      </div>
      {handleInfoRotation() !== "" && (
        <Tooltip title="Posición de Giro, en Grados">
          <div className="rotation-btn-info">
            <span className="text">
              {handleInfoRotation()}
              <span>&deg;</span>
            </span>
          </div>
        </Tooltip>
      )}
    </div>
  );
}
export default RotationButtonsComponent;
