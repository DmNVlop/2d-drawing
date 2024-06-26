import { useState } from "react";
import PropTypes from "prop-types";

import { CountertopContext, ElementRefContext } from "./ct-context";
import { useCustomURLHandler } from "../helpers/location.hook";
import { temp_init_state } from "./ct-context-initial-state";

export default function CountetopContextProvider({ children }) {
  const [countertops, setCountertops] = useState(temp_init_state);
  const [elementRef, setElementRef] = useState(null);

  const { ATTRIB_SETTED } = useCustomURLHandler();

  const getIdCtx = () => {
    return Math.round(Math.random() * 10000);
  };

  // GETTER
  const getSelectedPieceCtx = () => {
    return countertops?.selectedPiece || null;
  };

  const getSelectedPieceValueCtx = () => {
    return countertops?.selectedPiece?.value
      ? countertops.selectedPiece.value - 1
      : null;
  };

  const getNumberOfPartsCtx = (pieceType) => {
    return countertops[pieceType]?.partsData?.length > 0
      ? countertops[pieceType].partsData.length
      : null;
  };

  const getPartsDataFromPieceCtx = (pieceType) => {
    return countertops[pieceType]?.partsData || [];
  };

  const getLinesDataFromPieceCtx = (pieceType) => {
    return countertops[pieceType]?.linesData || [];
  };

  // PIECES CONTROL
  const onSetSelectedPieceCtx = (piece) => {
    setCountertops((prevState) => ({
      ...prevState,
      selectedPiece: piece,
    }));
  };

  const onSetNumberOfPieceCtx = (noPiece) => {
    setCountertops((prevState) => ({
      ...prevState,
      numberOfPiece: noPiece,
    }));
  };

  // Función para actualizar un objeto específico en partsData
  const onUpdatePartDataCtx = (index, newPartData) => {
    if (countertops[ATTRIB_SETTED]) {
      setCountertops((prevState) => {
        const updatedPartsData = [...prevState[ATTRIB_SETTED].partsData];
        updatedPartsData[index] = newPartData;

        return {
          ...prevState,
          [ATTRIB_SETTED]: {
            ...prevState[ATTRIB_SETTED],
            partsData: updatedPartsData,
          },
        };
      });
    }
  };

  // Función para actualizar un objeto específico en partsData
  const onUpdateLineDataCtx = (index, newLineData) => {
    setCountertops((prevState) => {
      const updatedLinesData = [...prevState[ATTRIB_SETTED].linesData];
      updatedLinesData[index] = newLineData;

      return {
        ...prevState,
        [ATTRIB_SETTED]: {
          ...prevState[ATTRIB_SETTED],
          linesData: updatedLinesData,
        },
      };
    });
  };

  //
  const setOpacityOnPiecesCtx = (indexPart = null) => {
    const opacitySelected = 1;
    const opacityStd = 0.8;
    const opacityLow = 0.4;

    if (!countertops[ATTRIB_SETTED]) {
      return;
    }

    setCountertops((prevState) => {
      let newState = { ...prevState };
      console.log("🚀 ~ setCountertops ~ newState:", newState);
      console.log("🚀 ~ setOpacityOnPiecesCtx ~ indexPart:", indexPart);

      if (indexPart == null) {
        newState[ATTRIB_SETTED].partsData = newState[
          ATTRIB_SETTED
        ].partsData.map((part) => ({
          ...part,
          opacity: opacityStd,
        }));
      } else {
        newState[ATTRIB_SETTED].partsData = newState[
          ATTRIB_SETTED
        ].partsData.map((part) => ({
          ...part,
          opacity: opacityLow,
        }));

        newState[ATTRIB_SETTED].partsData[indexPart].opacity = opacitySelected;
      }

      return newState;
    });
  };

  // TO ALL STATE
  const setConfigCtx = (newConfig = {}) => {
    setCountertops((prevState) => ({
      ...prevState,
      [ATTRIB_SETTED]: {
        ...prevState[ATTRIB_SETTED],
        rootConfig: newConfig,
      },
    }));
  };

  const setPartsCtx = (newParts = []) => {
    setCountertops((prevState) => ({
      ...prevState,
      [ATTRIB_SETTED]: {
        ...prevState[ATTRIB_SETTED],
        partsData: newParts,
      },
    }));
  };

  const setLinesCtx = (newLines = []) => {
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
  const updateCornersCtx = (
    corners = [0, 0, 0, 0],
    indexPart = null,
    typeOfUpdate = "SINGLE"
  ) => {
    if (countertops[ATTRIB_SETTED] && indexPart != null) {
      setCountertops((prevState) => {
        const updatedPartsData = [...prevState[ATTRIB_SETTED].partsData];
        updatedPartsData[indexPart].cornerRadius = corners;

        return {
          ...prevState,
          [ATTRIB_SETTED]: {
            ...prevState[ATTRIB_SETTED],
            partsData: updatedPartsData,
          },
        };
      });
    }
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
        getSelectedPieceValueCtx,
        getSelectedPieceCtx,
        getNumberOfPartsCtx,
        getPartsDataFromPieceCtx,
        getLinesDataFromPieceCtx,
        setCountertops,
        updateCornersCtx,
        updateWorkInPieceCtx,
        deleteWorkInPieceCtx,
        deleteAllWorksInPieceCtx,
        getIdCtx,
        setConfigCtx,
        setPartsCtx,
        setLinesCtx,
        setOpacityOnPiecesCtx,
        onSetSelectedPieceCtx,
        onSetNumberOfPieceCtx,
        onUpdatePartDataCtx,
        onUpdateLineDataCtx,
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
