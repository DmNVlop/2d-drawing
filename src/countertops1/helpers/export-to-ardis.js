import { WORKS_TYPES } from "../mocks/WORKS.types";

export const getTheStateAndOrganizeThePieces = () => {};

export const getXMLbyJSON = (jsonData) => {
  console.log("🚀 ~ getXMLbyJSON ~ jsonData:", jsonData);
  if (!jsonData || jsonData?.pieces?.length === 0) return;

  // const reOrderCornerPosition = (cornerPosition) => {
  //   return cornerPosition.reverse();
  // };

  let xml =
    '<?xml version="1.0" encoding="utf-8"?>\n<ArdisOptimizerProject ID="' +
    jsonData.clientData.clientName +
    "_" +
    Date.now() +
    '" Version="6.5.0" format="1.1.1">\n\t<PartCollection>\n';

  jsonData.pieces.forEach((piece, index) => {
    xml += `\t\t<PartFile ID="${piece.shapeType}" format="1.1.1">\n\t\t\t<PartList>\n`;

    piece.partsData.forEach((part, partIndex) => {
      xml += `\t\t\t\t<Part Key="${partIndex + 1}">\n`;
      xml += `\t\t\t\t\t<PartMat>MDF</PartMat>\n`;
      xml += `\t\t\t\t\t<PartD>1</PartD>\n`;
      xml += `\t\t\t\t\t<PartL>${part.width}</PartL>\n`;
      xml += `\t\t\t\t\t<PartW>${part.height}</PartW>\n`;
      xml += `\t\t\t\t\t<PartQty>1</PartQty>\n`;
      xml += `\t\t\t\t\t<PartDraw>`;

      part.works.forEach((work, workIndex) => {
        work.cornerPosition = work.cornerPosition.reverse();
        if (work.type === WORKS_TYPES.CCCHAFLAN) {
          // CHAFLAN
          // <Draw>
          //   <FUNCTNAME>LINE</FUNCTNAME>
          //   <X>320</X>
          //   <Y>0</Y>
          //   <LW>1</LW>
          //   <LENGTH>0</LENGTH>
          //   <WIDTH>130</WIDTH>
          //   <QUADRANT>1</QUADRANT>
          //   <Z1>19</Z1>
          //   <Z2>19</Z2>
          //   <ID>1</ID>
          //   <TOOL>MILL</TOOL>
          //   <PARAM>T=CHAFLAN</PARAM>
          //   <OPSIDE>2</OPSIDE>
          // </Draw>;
          xml += `<Draw><FUNCTNAME>LINE</FUNCTNAME><X>${
            work.width
          }</X><Y>0</Y><LW>1</LW><LENGTH>0</LENGTH><WIDTH>${
            work.height
          }</WIDTH><QUADRANT>${
            work.cornerPosition.indexOf(1) + 1
          }</QUADRANT><Z1>19</Z1><Z2>19</Z2><ID>${
            workIndex + 1
          }</ID><TOOL>MILL</TOOL><PARAM>T=&quot;${
            work.type
          }&quot;</PARAM><OPSIDE>2</OPSIDE></Draw>\n`;
        }

        if (work.type === WORKS_TYPES.CCFALESC) {
          // FALSA ESCUADRA
          // <Draw>
          //   <FUNCTNAME>LINE</FUNCTNAME>
          //   <X>0</X>
          //   <Y>LPY</Y>
          //   <LW>1</LW>
          //   <LENGTH>230</LENGTH>
          //   <WIDTH>0</WIDTH>
          //   <QUADRANT>1</QUADRANT>
          //   <Z1>19</Z1>
          //   <Z2>19</Z2>
          //   <ID>1</ID>
          //   <TOOL>MILL</TOOL>
          //   <PARAM>T=CHAFLAN</PARAM>
          //   <OPSIDE>2</OPSIDE>
          // </Draw>;
          xml += `<Draw><FUNCTNAME>LINE</FUNCTNAME><X>0</X><Y>LPY</Y><LW>1</LW><LENGTH>${
            work.width
          }</LENGTH><WIDTH>0</WIDTH><QUADRANT>${
            work.cornerPosition.indexOf(1) + 1
          }</QUADRANT><Z1>19</Z1><Z2>19</Z2><ID>${
            workIndex + 1
          }</ID><TOOL>MILL</TOOL><PARAM>T=&quot;${
            work.type
          }&quot;</PARAM><OPSIDE>2</OPSIDE></Draw>\n`;
        }

        if (work.type === WORKS_TYPES.CCRECIN) {
          // RECTO INTERIOR
          // <Draw>
          // <FUNCTNAME>LINE</FUNCTNAME><X>0</X>
          // <Y>100</Y><LW>1</LW><LENGTH>280</LENGTH>
          // <WIDTH>100</WIDTH><QUADRANT>1</QUADRANT>
          // <Z1>19</Z1><Z2>19</Z2><ID>1</ID>
          // <TOOL>MILL</TOOL><PARAM>T=&quot;CHAFLAN&quot;</PARAM>
          // <SEQ>1</SEQ><OPSIDE>2</OPSIDE>
          // </Draw>
          // <Draw><FUNCTNAME>LINE</FUNCTNAME><X>280</X><Y>100</Y><LW>1</LW><LENGTH>280</LENGTH><WIDTH>0</WIDTH><QUADRANT>1</QUADRANT><Z1>19</Z1><Z2>19</Z2><ID>1</ID><TOOL>MILL</TOOL><PARAM>T=&quot;CHAFLAN&quot;</PARAM><SEQ>2</SEQ><OPSIDE>2</OPSIDE></Draw>
          [1, 2].forEach((item) => {
            xml += `<Draw><FUNCTNAME>LINE</FUNCTNAME><X>${
              item === 1 ? 0 : work.width
            }</X><Y>${work.height}</Y><LW>1</LW><LENGTH>${
              work.width
            }</LENGTH><WIDTH>${item === 1 ? work.height : 0}</WIDTH><QUADRANT>${
              work.cornerPosition.indexOf(1) + 1
            }</QUADRANT><Z1>19</Z1><Z2>19</Z2><ID>${
              workIndex + 1
            }</ID><TOOL>MILL</TOOL><PARAM>T=&quot;${
              work.type
            }&quot;</PARAM><SEQ>${item}</SEQ><OPSIDE>2</OPSIDE></Draw>\n`;
          });
        }
        // <Draw>
        //   <FUNCTNAME>ARC</FUNCTNAME>
        //   <X>0</X><Y>200</Y><LW>1</LW>
        //   <LENGTH>200</LENGTH>
        //   <WIDTH>0</WIDTH>
        //   <RADIUS>200</RADIUS>
        //   <DIR>2</DIR>
        //   <QUADRANT>4</QUADRANT>
        //   <Z1>19</Z1><Z2>19</Z2>
        //   <ID>1</ID><TOOL>MILL</TOOL>
        //   <PARAM>T</PARAM><SEQ>1</SEQ>
        //   <OPSIDE>2</OPSIDE>
        // </Draw>
        // <Draw><FUNCTNAME>ARC</FUNCTNAME><X>200</X><Y>0</Y><LW>1</LW><LENGTH>0</LENGTH><WIDTH>200</WIDTH><RADIUS>200</RADIUS><DIR>2</DIR><QUADRANT>3</QUADRANT><Z1>19</Z1><Z2>19</Z2><ID>2</ID><TOOL>MILL</TOOL><PARAM>T</PARAM><SEQ>2</SEQ><OPSIDE>2</OPSIDE></Draw><Draw><FUNCTNAME>ARC</FUNCTNAME><X>0</X><Y>200</Y><LW>1</LW><LENGTH>200</LENGTH><WIDTH>0</WIDTH><RADIUS>200</RADIUS><DIR>2</DIR><QUADRANT>2</QUADRANT><Z1>19</Z1><Z2>19</Z2><ID>3</ID><TOOL>MILL</TOOL><PARAM>T</PARAM><SEQ>3</SEQ><OPSIDE>2</OPSIDE></Draw><Draw><FUNCTNAME>ARC</FUNCTNAME><X>200</X><Y>0</Y><LW>1</LW><LENGTH>0</LENGTH><WIDTH>200</WIDTH><RADIUS>200</RADIUS><DIR>2</DIR><QUADRANT>1</QUADRANT><Z1>19</Z1><Z2>19</Z2><ID>3</ID><TOOL>MILL</TOOL><PARAM>T</PARAM><SEQ>3</SEQ><OPSIDE>2</OPSIDE></Draw>
      });
      xml += `\t\t\t\t\t</PartDraw>\n`;
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
