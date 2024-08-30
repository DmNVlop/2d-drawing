import {
  calculateAngle,
  calculateHipotenusOpposite,
  convertToRadians,
} from "./rect-variable-core-calcs";

let p1 = null;
let p2 = null;

export const setDataNodesCalc = (countertops, ATTRIB_SETTED) => {
  p1 = countertops[ATTRIB_SETTED]?.partsData[0];
  p2 = countertops[ATTRIB_SETTED]?.partsData[1];
};

// ----------------------------------
// PIECE 1
// #region Node 1, Piece 1
export const Node1Piece1 = () => {
  const p1_IsLarge = p1.width1 >= p1.width2;
  const n1xP1_init = 0;
  const n1yP1_init = p1_IsLarge ? p1.width1 : p1.width2;
  return { n1xP1_init, n1yP1_init, p1_IsLarge };
};

// #endregion Node 1, Piece 1

// ----------------------------------
// #region Node 2, Piece 1
export const Node2Piece1 = () => {
  const { p1_IsLarge } = Node1Piece1();
  const n2xP1_init = 0;
  const n2yP1_init = p1_IsLarge ? 0 : p1.width2 - p1.width1;
  return { n2xP1_init, n2yP1_init };
};
// #endregion Node 2, Piece 1

// ----------------------------------
// #region Node 3, Piece 1
export const Node3Piece1 = () => {
  const { p1_IsLarge } = Node1Piece1();
  const n3xP1_init = p1.height;
  const n3yP1_init = p1_IsLarge ? p1.width1 - p1.width2 : 0;
  return { n3xP1_init, n3yP1_init };
};
// #endregion Node 3, Piece 1

// ----------------------------------
// #region Node 4, Piece 1
export const Node4Piece1 = () => {
  const { p1_IsLarge } = Node1Piece1();
  const n4xP1_init = p1.height;
  const n4yP1_init = p1_IsLarge ? p1.width1 : p1.width2;
  return { n4xP1_init, n4yP1_init };
};
// #endregion Node 4, Piece 1

export const rotationAngleP2 = () => {
  const { n2xP1_init, n2yP1_init } = Node2Piece1();
  const { n3xP1_init, n3yP1_init } = Node3Piece1();
  return calculateAngle(n2xP1_init, n2yP1_init, n3xP1_init, n3yP1_init);
};

// ----------------------------------
// PIECE 2
// #region Node 1, Piece 2
export const Node1Piece2 = () => {
  const { n3xP1_init, n3yP1_init } = Node3Piece1();
  const n1xP2_init = n3xP1_init;
  const n1yP2_init = n3yP1_init;
  return { n1xP2_init, n1yP2_init };
};

// export const n1m1 = 1;

// export const n1m2 = 1;

// export const n1AnguloBetweenLines = calculateAngleBetweenLines(n1m1, n1m2);
// #endregion Node 1, Piece 2

// ----------------------------------
// #region Node 2, Piece 2
export const Node2Piece2 = () => {
  const { n1xP2_init, n1yP2_init } = Node1Piece2();
  const n2xP2_init =
    n1xP2_init + p2.width1 * Math.cos(rotationAngleP2().radians);
  const n2yP2_init =
    n1yP2_init + p2.width1 * Math.sin(rotationAngleP2().radians);
  return { n2xP2_init, n2yP2_init };
};

// export const n2m1 = calculateSlope(
//   x2,
//   y2,
//   x2 + p2.width1 * Math.cos(radians),
//   y2 + p2.width1 * Math.sin(radians)
// );

// export const n2m2 = calculateSlope(
//   x2 + p2.width1 * Math.cos(radians),
//   y2 + p2.width1 * Math.sin(radians),
//   x2 + p2.width2 * Math.cos(radians),
//   y2 + lengthHipotenus + p2.width2 * Math.sin(radians)
// );

// export const n2AnguloBetweenLines = calculateAngleBetweenLines(n2m1, n2m2);
// #endregion Node 2, Piece 2

// ----------------------------------
// #region Node 4, Piece 2
export const Node4Piece2 = () => {
  const { n1xP2_init, n1yP2_init } = Node1Piece2();
  const n1HipP2 = calculateHipotenusOpposite(
    p2.height,
    convertToRadians(90 - rotationAngleP2().degrees)
  );
  const n4xP2_init = n1xP2_init;
  const n4yP2_init = n1yP2_init + n1HipP2;
  return { n4xP2_init, n4yP2_init };
};

// export const n4m1 = 1;

// export const n4m2 = 1;

// export const n4AnguloBetweenLines = calculateAngleBetweenLines(n4m1, n4m2);
// #endregion Node 4, Piece 2

// ----------------------------------
// #region Node 3, Piece 2
export const Node3Piece2 = () => {
  const { n4xP2_init, n4yP2_init } = Node4Piece2();
  const n3xP2_init =
    n4xP2_init + p2.width2 * Math.cos(rotationAngleP2().radians);
  const n3yP2_init =
    n4yP2_init + p2.width2 * Math.sin(rotationAngleP2().radians);
  return { n3xP2_init, n3yP2_init };
};

// export const n3m1 = calculateSlope(
//   x2 + p2.width1 * Math.cos(radians),
//   y2 + p2.width1 * Math.sin(radians),
//   x2 + p2.width2 * Math.cos(radians),
//   y2 + lengthHipotenus + p2.width2 * Math.sin(radians)
// );

// export const n3m2 = calculateSlope(
//   x2 + p2.width2 * Math.cos(radians),
//   y2 + lengthHipotenus + p2.width2 * Math.sin(radians),
//   x2,
//   y2 + lengthHipotenus
// );

// export const n3AnguloBetweenLines = calculateAngleBetweenLines(n3m1, n3m2);

// export const n3x =
//   x2 +
//   p2.width2 * Math.cos(radians) -
//   calcularDesplazamientoDelCentroDelArc(
//     p2.corners[2],
//     p1.width1 > p1.width2 && p2.width1 - (p1.width1 - p1.width2) <= p2.width2
//       ? n3AnguloBetweenLines.degrees / 2
//       : (180 - n3AnguloBetweenLines.degrees) / 2
//   ) *
//     Math.cos(radians) -
//   p2.corners[2] * Math.cos(radians + Math.PI / 2);

// export const n3y =
//   y2 +
//   lengthHipotenus +
//   p2.width2 * Math.sin(radians) -
//   calcularDesplazamientoDelCentroDelArc(
//     p2.corners[2],
//     p1.width1 > p1.width2 && p2.width1 - (p1.width1 - p1.width2) <= p2.width2
//       ? n3AnguloBetweenLines.degrees / 2
//       : (180 - n3AnguloBetweenLines.degrees) / 2
//   ) *
//     Math.sin(radians) -
//   p2.corners[2] * Math.sin(radians + Math.PI / 2);

// export const n3Radius = p2.corners[2];

// export const n3StartAngle = -radians / 2;

// export const n3EndAngle =
//   convertToRadians(n3AnguloBetweenLines.degrees + angle - 90) +
//   convertToRadians(180 - n3AnguloBetweenLines.degrees);
// export const n3CounterCl = false;
// #endregion Node 3, Piece 2
