import { useState } from "react";
import PropTypes from "prop-types";

import { CountertopContext, ElementRefContext } from "./ct-context";
import { useLocation } from "react-router-dom";
import { useLocationMod } from "../helpers/location.hook";
import { SIMPLE_CT_M, SIMPLE_LINE_CT_M } from "../mocks/simple-ct.mock";

const temp_init_state = {
  shapeType: null,
  partsData: SIMPLE_CT_M.partsData,
  linesData: SIMPLE_LINE_CT_M.linesData,
  selectedPiece: null,
  simple: {},
  square: {},
  circle: {},
  "l-shaped_l1": {},
  "l-shaped_l2": {},
  "u-shaped_u1": {},
  "u-shaped_u2": {},
  "u-shaped_u3": {},
  "u-shaped_u4": {},
};

export default function CountetopContextProvider({ children }) {
  const [countertops, setCountertops] = useState(temp_init_state);
  const [elementRef, setElementRef] = useState(null);

  const location = useLocation();
  const shapeNameUrl = location.pathname.substring(1); // Esto te dará 'simple', 'double' o 'triple'
  const url_shape = shapeNameUrl.split("/").pop();
  const tParamUrl = useLocationMod("t");
  const ATTRIB_SETTED = tParamUrl ? url_shape + "_" + tParamUrl : url_shape;

  const getIdCtx = () => {
    return Math.round(Math.random() * 10000);
  };

  const setConfig = (newConfig = {}) => {
    setCountertops((prevState) => ({
      ...prevState,
      [ATTRIB_SETTED]: {
        ...prevState[ATTRIB_SETTED],
        rootConfig: newConfig,
      },
    }));
  };

  const setParts = (newParts = []) => {
    setCountertops((prevState) => ({
      ...prevState,
      [ATTRIB_SETTED]: {
        ...prevState[ATTRIB_SETTED],
        partsData: newParts,
      },
    }));
  };

  const setLines = (newLines = []) => {
    setCountertops((prevState) => ({
      ...prevState,
      [ATTRIB_SETTED]: {
        ...prevState[ATTRIB_SETTED],
        linesData: newLines,
      },
    }));
  };

  /**
   * @description Function to update the corners, true sizes and production sizes
   *
   * @param {'[0,0,0,0]'} corners Array of numbers, ex: [0,0,0,0]
   * @param {number} indexPart Number entire, ex: 1
   * @param {[SINGLE | PROD]} typeOfUpdate An specific value, ex: [SINGLE | PROD]
   *
   * @author Damian Vidal
   */
  const updateCornersCtx = (corners, indexPart, typeOfUpdate) => {
    setCountertops((prev) => {
      const tempPrev = { ...prev };

      if (typeOfUpdate == "SINGLE") {
        tempPrev.partsData[indexPart].cornerRadius = corners;
      }

      if (typeOfUpdate == "PROD") {
        tempPrev.partsData[indexPart].cornerRadiusProduction = corners;
      }

      return tempPrev;
    });
  };

  const updateWorkInPieceCtx = (work, indexPart) => {
    // Validate if the object is right
    if (!work?.id) {
      console.log("⚠️ Atributo ID es requerido");
    }

    setCountertops((prev) => {
      const tempCountertops = { ...prev };
      tempCountertops.partsData[indexPart].works.push(work);
      return tempCountertops;
    });
  };

  const deleteWorkInPieceCtx = (indexWork, indexPart) => {
    setCountertops((prev) => {
      const tempCountertops = { ...prev };
      tempCountertops.partsData[indexPart].works.splice(indexWork, 1);
      return tempCountertops;
    });
  };

  const deleteAllWorksInPieceCtx = (indexPart) => {
    setCountertops((prev) => {
      const tempCountertops = { ...prev };
      tempCountertops.partsData[indexPart].works = [];
      return tempCountertops;
    });
  };

  return (
    <CountertopContext.Provider
      value={{
        countertops,
        setCountertops,
        updateCornersCtx,
        updateWorkInPieceCtx,
        deleteWorkInPieceCtx,
        deleteAllWorksInPieceCtx,
        getIdCtx,
        setConfig,
        setParts,
        setLines,
      }}
    >
      <ElementRefContext.Provider value={{ elementRef, setElementRef }}>
        {children}
      </ElementRefContext.Provider>
    </CountertopContext.Provider>
  );
}

CountetopContextProvider.propTypes = {
  children: PropTypes.node,
};
