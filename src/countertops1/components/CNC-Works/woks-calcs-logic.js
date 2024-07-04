export const setCcredinSizes = (selectedWork, pieceSelected, itemPieceData) => {
  console.log("🚀 ~ setCcredinSizes ~ itemPieceData:", itemPieceData);
  console.log("🚀 ~ setCcredinSizes ~ pieceSelected:", pieceSelected);
  console.log("🚀 ~ setCcredinSizes ~ selectedWork:", selectedWork);
  const code = selectedWork?.code || {};

  let dataCorners = {
    corners: itemPieceData.cornerRadiusProduction,
    // cornersProduction: itemPieceData.cornerRadiusProduction,
  };

  // CCREDIN de 2 y 4 LADOS
  if (
    code == "ccred2lados-IZQ" ||
    code == "ccred2lados-DER" ||
    code == "ccred4lados"
  ) {
    // const realHeight = itemPieceData?.realHeight;
    const height = itemPieceData?.height;

    if (code == "ccred2lados-IZQ") {
      dataCorners.corners = [height / 2, 0, 0, height / 2];
      // dataCorners.cornersProduction = [height / 2, 0, 0, height / 2];
    }

    if (code == "ccred2lados-DER") {
      dataCorners.corners = [0, height / 2, height / 2, 0];
      // dataCorners.cornersProduction = [0, height / 2, height / 2, 0];
    }

    if (code == "ccred4lados") {
      // const _halfRealHeight = height / 2;
      const _halfHeight = height / 2;
      dataCorners.corners = [
        _halfHeight,
        _halfHeight,
        _halfHeight,
        _halfHeight,
      ];
      // dataCorners.cornersProduction = [
      //   _halfHeight,
      //   _halfHeight,
      //   _halfHeight,
      //   _halfHeight,
      // ];
    }

    return dataCorners;
  }
};
