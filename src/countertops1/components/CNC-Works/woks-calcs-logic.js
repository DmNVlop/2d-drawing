export const setWorksOnSelectRightBar = (
  selectedWork,
  pieceSelected,
  itemPieceData
) => {
  const code = selectedWork?.code || {};

  // CCREDIN de 2 LADOS
  if (
    code == "ccred2lados-IZQ" ||
    code == "ccred2lados-DER" ||
    code == "ccred4lados"
  ) {
    let dataCorners = {
      corners: itemPieceData.cornerRadiusProduction,
      cornersProduction: itemPieceData.cornerRadiusProduction,
    };

    const realHeight = itemPieceData?.realHeight;
    const height = itemPieceData?.height;

    if (code == "ccred2lados-IZQ") {
      dataCorners.corners = [realHeight / 2, 0, 0, realHeight / 2];
      dataCorners.cornersProduction = [height / 2, 0, 0, height / 2];
    }

    if (code == "ccred2lados-DER") {
      dataCorners.corners = [0, realHeight / 2, realHeight / 2, 0];
      dataCorners.cornersProduction = [0, height / 2, height / 2, 0];
    }

    if (code == "ccred4lados") {
      const _halfRealHeight = realHeight / 2;
      const _halfHeight = height / 2;
      dataCorners.corners = [
        _halfRealHeight,
        _halfRealHeight,
        _halfRealHeight,
        _halfRealHeight,
      ];
      dataCorners.cornersProduction = [
        _halfHeight,
        _halfHeight,
        _halfHeight,
        _halfHeight,
      ];
    }

    return dataCorners;
  }
};
