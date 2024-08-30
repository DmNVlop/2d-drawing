// Calcular angulo de inclinacion sobre la pendiente de un recta
export const calculateAngle = (x1, y1, x2, y2) => {
  const deltaY = y2 - y1;
  const deltaX = x2 - x1;
  const angleInRadians = Math.atan2(deltaY, deltaX);
  const angleInDegrees = angleInRadians * (180 / Math.PI);
  return { degrees: angleInDegrees, radians: angleInRadians };
};

// Calcular hipotenusa con lado adyacente
export const calculateHipotenusAdjacent = (catAdjacent, angle) =>
  catAdjacent / Math.cos(angle);

// Calcular hipotenusa con lado opuesto
export const calculateHipotenusOpposite = (catOpposite, angle) =>
  catOpposite / Math.sin(angle);

// Convertir grados a radianes
export const convertToRadians = (angle) => {
  return angle * (Math.PI / 180);
};

// Convertir radianes a grados
export const convertToDegrees = (radians) => {
  return radians * (180 / Math.PI);
};

// // Calcular pendiente de un recta
// export const calculateSlope = (x1, y1, x2, y2) => {
//   const x1Num = parseFloat(x1);
//   const y1Num = parseFloat(y1);
//   const x2Num = parseFloat(x2);
//   const y2Num = parseFloat(y2);
//   if (!isNaN(x1Num) && !isNaN(y1Num) && !isNaN(x2Num) && !isNaN(y2Num)) {
//     return (y2Num - y1Num) / (x2Num - x1Num);
//   }
//   return null;
// };

// // Calcular chaflán en el TOP de la pieza 1
// export const calculateChaflanOnCornerP1 = (w1, w2, node) => {
//   if (w1 === w2 || (w1 > w2 && node === 1) || (w2 > w1 && node === 2)) {
//     return 0;
//   }
//   return Math.abs(w1 - w2);
// };

// // Función para Calcular angulo entre dos pendientes, con una de ellas Infinita
// export const calculateAngleBetweenLinesMInfinity = (m) => {
//   const slopeNum = parseFloat(m);
//   if (!isNaN(slopeNum)) {
//     const radians = Math.atan(slopeNum);
//     const degrees = radians * (180 / Math.PI);
//     const angleBetweenLines = 90 - degrees;
//     return angleBetweenLines;
//   }
//   return null;
// };

// // Función para Calcular angulo entre dos pendientes
// export const calculateAngleBetweenLines = (m1, m2) => {
//   if (m1 == Infinity) {
//     return {
//       degrees: calculateAngleBetweenLinesMInfinity(m2),
//       radians: convertToRadians(calculateAngleBetweenLinesMInfinity(m2)),
//     };
//   }
//   if (m2 == Infinity) {
//     return {
//       degrees: calculateAngleBetweenLinesMInfinity(m1),
//       radians: convertToRadians(calculateAngleBetweenLinesMInfinity(m1)),
//     };
//   }

//   const m1Num = parseFloat(m1);
//   const m2Num = parseFloat(m2);
//   if (!isNaN(m1Num) && !isNaN(m2Num)) {
//     const radians = Math.atan(Math.abs((m1Num - m2Num) / (1 + m1Num * m2Num)));
//     const degrees = radians * (180 / Math.PI);
//     return { degrees, radians };
//   }
//   return null;
// };

// // Función para Calcular desplazamiento del punto centro Arco
// export const calcularDesplazamientoDelCentroDelArc = (radius, angle) => {
//   return radius / Math.tan(convertToRadians(angle));
// };

// // Función para Calcular desplazamiento del punto inicial del cateto antes de iniciar el Arco
// export const distanciaADesplazarAntesDeArco = (
//   catetoOpuesto,
//   anguloEntreLineas
// ) => {
//   return catetoOpuesto / Math.tan(convertToRadians(anguloEntreLineas / 2));
// };
