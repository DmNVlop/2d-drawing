import { Group, Rect, Shape } from "react-konva";

const INIT_WH = 80;
const COUNTERTOP_LOCALDATA = [
  {
    w1: 700,
    w2: 500,
    h: 240,
    corners: [20, 40, 60, 80],
  },
  {
    w1: 520,
    w2: 320,
    h: 240,
    corners: [20, 40, 60, 80],
  },
];

const calculateAngle = (x1, y1, x2, y2) => {
  const deltaY = y2 - y1;
  const deltaX = x2 - x1;
  const angleInRadians = Math.atan2(deltaY, deltaX);
  const angleInDegrees = angleInRadians * (180 / Math.PI);
  return angleInDegrees;
};

const calculateChaflanOnCornerP1 = (w1, w2, node) => {
  if (w1 === w2 || (w1 > w2 && node === 1) || (w2 > w1 && node === 2)) {
    return 0;
  }
  return Math.abs(w1 - w2);
};

const drawRoundedCorner = (context, x, y, radius, startAngle, endAngle) => {
  context.arc(x, y, radius, startAngle, endAngle);
};

// PRINCIPAL COMPONENT
function RectVariable() {
  const p1 = COUNTERTOP_LOCALDATA[0];
  const p2 = COUNTERTOP_LOCALDATA[1];

  const x1 = 0 + INIT_WH;
  const y1 = calculateChaflanOnCornerP1(p1.w1, p1.w2, 1) + INIT_WH;
  const x2 = p1.h + INIT_WH;
  const y2 = calculateChaflanOnCornerP1(p1.w1, p1.w2, 2) + INIT_WH;
  const angle = calculateAngle(x1, y1, x2, y2);
  const radians = angle * (Math.PI / 180); // Convertir a radianes

  return (
    <Group>
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          // Primer rectángulo con chaflán en la esquina superior derecha
          context.moveTo(x1, y1); // Izquierda arriba

          context.lineTo(
            x2, // - p1.corners[2],
            y2 // - p1.corners[2] * Math.sin(radians)
          ); // Derecha arriba
          // drawRoundedCorner(
          //   context,
          //   x2 - p1.corners[2],
          //   y2 - p1.corners[2] * Math.sin(radians),
          //   p1.corners[2],
          //   radians,
          //   radians + Math.PI / 2
          // );

          context.lineTo(
            x2,
            p1.w1 > p1.w2 ? p1.w1 + INIT_WH : p1.w2 + INIT_WH // - p1.corners[3]
          ); // Derecha abajo
          // drawRoundedCorner(
          //   context,
          //   x2,
          //   p1.w1 > p1.w2
          //     ? p1.w1 + INIT_WH - p1.corners[3]
          //     : p1.w2 + INIT_WH - p1.corners[3],
          //   p1.corners[3],
          //   Math.PI / 2,
          //   Math.PI
          // );

          context.lineTo(
            0 + INIT_WH, // + p1.corners[0],
            p1.w1 > p1.w2 ? p1.w1 + INIT_WH : p1.w2 + INIT_WH
          ); // Izquierda abajo
          // drawRoundedCorner(
          //   context,
          //   0 + INIT_WH + p1.corners[0],
          //   p1.w1 > p1.w2 ? p1.w1 + INIT_WH : p1.w2 + INIT_WH,
          //   p1.corners[0],
          //   Math.PI,
          //   (3 * Math.PI) / 2
          // );

          context.closePath();
          context.fillStrokeShape(shape);
        }}
        fill="red"
      />
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          // Segundo rectángulo con lados específicos
          context.moveTo(x2, y2); // Izquierda arriba
          context.lineTo(
            x2 + p2.w1 * Math.cos(radians),
            y2 + p2.w1 * Math.sin(radians)
          ); // Derecha arriba
          context.lineTo(
            x2 + p2.w2 * Math.cos(radians),
            y2 + p2.h + p2.w2 * Math.sin(radians)
          ); // Derecha abajo
          // drawRoundedCorner(
          //   context,
          //   x2 + p2.w2 * Math.cos(radians),
          //   y2 + p2.h + p2.w2 * Math.sin(radians),
          //   p2.corners[2],
          //   Math.PI / 2,
          //   Math.PI
          // );
          context.lineTo(x2, y2 + p2.h); // Izquierda abajo
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        fill="blue"
      />
    </Group>
  );
}

export default RectVariable;
