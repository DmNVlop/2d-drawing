import { useState } from "react";
import PropTypes from "prop-types";

import { CountertopContext, ElementRefContext } from "./ct-context";

export default function CountetopContextProvider({ children }) {
  const [countertops, setCountertops] = useState(null);
  const [elementRef, setElementRef] = useState(null);

  const getIdCtx = () => {
    return Math.round(Math.random() * 10000);
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
