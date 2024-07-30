export const getTheStateAndOrganizeThePieces = () => {};

export const getXMLbyJSON = (jsonData) => {
  console.log("🚀 ~ getXMLbyJSON ~ jsonData:", jsonData);
  if (!jsonData || jsonData?.pieces?.length === 0) return;

  let xml =
    '<?xml version="1.0" encoding="utf-8"?>\n<ArdisOptimizerProject ID="' +
    jsonData.clientData.clientName +
    "_" +
    Date.now() +
    '" Version="6.5.0" format="1.1.1">\n\t<PartCollection>\n';

  jsonData.pieces.forEach((piece, index) => {
    xml += `\t\t<PartFile ID="${piece.shapeType}" format="1.1.1">\n\t\t\t<PartList>\n`;

    piece.partsData.forEach((part, partIndex) => {
      // <PartMat>M/BLANCO SOFT-19,25</PartMat>
      // 			<PartL>800</PartL>
      // 			<PartW>580</PartW>
      // 			<PartQty>2</PartQty>
      // 			<PartRef>costado</PartRef>

      xml += `\t\t\t\t<Part Key="${partIndex + 1}">\n`;
      //   Object.keys(part).forEach((clave) => {
      xml += `\t\t\t\t\t<PartMat>MDF</PartMat>\n`;
      xml += `\t\t\t\t\t<PartL>${part.width}</PartL>\n`;
      xml += `\t\t\t\t\t<PartW>${part.height}</PartW>\n`;
      xml += `\t\t\t\t\t<PartQty>1</PartQty>\n`;
      //   });
      xml += "\t\t\t\t</Part>\n";
    });

    xml +=
      "\t\t\t</PartList>\n\t\t\t<VariableList/>\n\t\t\t<PartFileProperties>\n\t\t\t\t<PartFName>" +
      piece.shapeType +
      "</PartFName>\n\t\t\t\t<PartFRef>" +
      piece.shapeType +
      "</PartFRef>\n\t\t\t</PartFileProperties>\n\t\t</PartFile>\n";
  });

  xml += "\t</PartCollection>\n</ArdisOptimizerProject>";

  return xml;
};
