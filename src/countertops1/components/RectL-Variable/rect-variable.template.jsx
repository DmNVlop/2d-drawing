import { useEffect, useRef } from "react";
import { Group, Shape } from "react-konva";
import { useCustomURLHandler } from "../../helpers/location.hook";
import { useCountertopContext } from "../../context/ct-context";
import {
  Node1Piece1,
  Node1Piece2,
  Node2Piece1,
  Node2Piece2,
  Node3Piece1,
  Node3Piece2,
  Node4Piece1,
  Node4Piece2,
  setDataNodesCalc,
} from "./res/nodes-calcs";

// Función para dibujar una esquina redondeada
// const drawRoundedCorner = (context, x, y, radius, startAngle, endAngle) => {
//   context.arc(x, y, radius, startAngle, endAngle);
// };

const drawRoundedCorner = (
  context,
  x,
  y,
  radius,
  startAngle,
  endAngle,
  countercl = false
) => {
  context.arc(x, y, radius, startAngle, endAngle, countercl);
};

// PRINCIPAL COMPONENT
function RectVariable() {
  const RECT1 = useRef(null);
  const RECT2 = useRef(null);

  const { ATTRIB_SETTED } = useCustomURLHandler();
  const { countertops } = useCountertopContext();

  setDataNodesCalc(countertops, ATTRIB_SETTED);

  const { n1xP1_init, n1yP1_init } = Node1Piece1();
  const { n2xP1_init, n2yP1_init } = Node2Piece1();
  const { n3xP1_init, n3yP1_init } = Node3Piece1();
  const { n4xP1_init, n4yP1_init } = Node4Piece1();

  const { n1xP2_init, n1yP2_init } = Node1Piece2();
  const { n2xP2_init, n2yP2_init } = Node2Piece2();
  const { n3xP2_init, n3yP2_init } = Node3Piece2();
  const { n4xP2_init, n4yP2_init } = Node4Piece2();

  useEffect(() => {
    setDataNodesCalc(countertops, ATTRIB_SETTED);
    console.log("🚀 ~ useEffect ~ countertops:", countertops);
  }, [countertops, ATTRIB_SETTED]);

  // const opposedAngleP2 = 90 - angle;
  // const radians = convertToRadians(angle); // Convertir a radianes
  // const radiansOpuesto = convertToRadians(angleOpuesto); // Convertir a radianes

  // const x1 = 0 + INIT_WH;
  // const y1 = calculateChaflanOnCornerP1(p1.w1, p1.w2, 1) + INIT_WH;
  // const x2 = p1.h + INIT_WH;
  // const y2 = calculateChaflanOnCornerP1(p1.w1, p1.w2, 2) + INIT_WH;

  // const lengthHipotenus = p2.h / Math.sin(radiansOpuesto);

  return (
    <Group>
      <Group>
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();

            // Pieza 1 con chaflán en la derecha
            context.moveTo(n1xP1_init, n1yP1_init); // Izquierda abajo
            context.lineTo(n2xP1_init, n2yP1_init); // Izquierda arriba
            context.lineTo(n3xP1_init, n3yP1_init); // Derecha arriba
            context.lineTo(n4xP1_init, n4yP1_init); // Derecha abajo
            context.closePath();
            context.fillStrokeShape(shape);
          }}
          fill="red"
          opacity={1}
        />

        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            // Segundo rectángulo con lados específicos
            // Izquierda arriba
            context.moveTo(n1xP2_init, n1yP2_init);

            // Derecha arriba
            context.lineTo(n2xP2_init, n2yP2_init);

            // drawRoundedCorner(
            //   context,
            //   x2 +
            //     p2.w1 * Math.cos(radians) -
            //     calcularDesplazamientoDelCentroDelArc(
            //       p2.corners[1],
            //       p1.w1 > p1.w2 && p2.w1 - (p1.w1 - p1.w2) >= p2.w2
            //         ? n2AnguloBetweenLines.degrees / 2
            //         : (180 - n2AnguloBetweenLines.degrees) / 2
            //     ) *
            //       Math.cos(radians) +
            //     p2.corners[1] * Math.cos(radians + Math.PI / 2),
            //   y2 +
            //     p2.w1 * Math.sin(radians) -
            //     calcularDesplazamientoDelCentroDelArc(
            //       p2.corners[1],
            //       p1.w1 > p1.w2 && p2.w1 - (p1.w1 - p1.w2) >= p2.w2
            //         ? n2AnguloBetweenLines.degrees / 2
            //         : (180 - n2AnguloBetweenLines.degrees) / 2
            //     ) *
            //       Math.sin(radians) +
            //     p2.corners[1] * Math.sin(radians + Math.PI / 2),
            //   p2.corners[1],
            //   convertToRadians(angle - 90),
            //   p1.w1 > p1.w2 && p2.w1 - (p1.w1 - p1.w2) <= p2.w2
            //     ? convertToRadians(angle - 90) + n2AnguloBetweenLines.radians
            //     : convertToRadians(angle - 90) +
            //         convertToRadians(180 - n2AnguloBetweenLines.degrees)
            // );

            // Derecha abajo
            context.lineTo(n3xP2_init, n3yP2_init);

            // drawRoundedCorner(
            //   context,
            //   n3x,
            //   n3y,
            //   n3Radius,
            //   n3StartAngle,
            //   n3EndAngle,
            //   n3CounterCl
            // );
            // convertToRadians(n3AnguloBetweenLines.degrees + angle - 90),
            // convertToRadians(n3AnguloBetweenLines.degrees + angle - 90) +
            //   convertToRadians(180 - n3AnguloBetweenLines.degrees)

            // Izquierda abajo
            context.lineTo(n4xP2_init, n4yP2_init);

            context.closePath();
            context.fillStrokeShape(shape);
          }}
          fill="blue"
        />

        {/* <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(n3x, n3y);
            context.arc(
              n3x,
              n3y,
              n3Radius,
              n3StartAngle,
              n3EndAngle,
              n3CounterCl
            ); // Dibuja un arco
            context.closePath();
            context.fillStrokeShape(shape);
          }}
          fill="yellow"
          // stroke="black"
          // strokeWidth={1}
        /> */}

        {/* <Circle
          x={x2 + p2.w2 * Math.cos(radians)}
          y={y2 + lengthHipotenus + p2.w2 * Math.sin(radians)}
          radius={5}
          fill="black"
        /> */}
        {/* <Circle x={n3x} y={n3y} radius={5} fill="red" /> */}

        {/* <Arc
          x={
            x2 +
            p2.w1 * Math.cos(radians) -
            calcularDesplazamientoDelCentroDelArc(
              p2.corners[1],
              p1.w1 > p1.w2 && p2.w1 - (p1.w1 - p1.w2) >= p2.w2
                ? n2AnguloBetweenLines.degrees / 2
                : (180 - n2AnguloBetweenLines.degrees) / 2
            ) *
              Math.cos(radians) +
            p2.corners[1] * Math.cos(radians + Math.PI / 2)
          }
          y={
            y2 +
            p2.w1 * Math.sin(radians) -
            calcularDesplazamientoDelCentroDelArc(
              p2.corners[1],
              p1.w1 > p1.w2 && p2.w1 - (p1.w1 - p1.w2) >= p2.w2
                ? n2AnguloBetweenLines.degrees / 2
                : (180 - n2AnguloBetweenLines.degrees) / 2
            ) *
              Math.sin(radians) +
            p2.corners[1] * Math.sin(radians + Math.PI / 2)
          }
          innerRadius={p2.corners[1]}
          // outerRadius={45}
          angle={
            p1.w1 > p1.w2 && p2.w1 - (p1.w1 - p1.w2) <= p2.w2
              ? n2AnguloBetweenLines.degrees
              : 180 - n2AnguloBetweenLines.degrees
          }
          rotation={angle - 90}
          fill="darkblue"
          opacity={0.2}
        /> */}

        {/* <Arc
          x={
            x2 +
            p2.w2 * Math.cos(radians) -
            calcularDesplazamientoDelCentroDelArc(
              p2.corners[2],
              p1.w1 > p1.w2 && p2.w1 - (p1.w1 - p1.w2) <= p2.w2
                ? n3AnguloBetweenLines.degrees / 2
                : (180 - n3AnguloBetweenLines.degrees) / 2
            ) *
              Math.cos(radians) -
            p2.corners[2] * Math.cos(radians + Math.PI / 2)
          }
          y={
            y2 +
            lengthHipotenus +
            p2.w2 * Math.sin(radians) -
            calcularDesplazamientoDelCentroDelArc(
              p2.corners[2],
              p1.w1 > p1.w2 && p2.w1 - (p1.w1 - p1.w2) <= p2.w2
                ? n3AnguloBetweenLines.degrees / 2
                : (180 - n3AnguloBetweenLines.degrees) / 2
            ) *
              Math.sin(radians) -
            p2.corners[2] * Math.sin(radians + Math.PI / 2)
          }
          innerRadius={p2.corners[2]}
          // outerRadius={45}
          angle={
            p1.w1 > p1.w2 && p2.w1 - (p1.w1 - p1.w2) <= p2.w2
              ? -90 - n3AnguloBetweenLines.degrees
              : 360 - n3AnguloBetweenLines.degrees
          }
          rotation={90 + angle}
          clockwise={true}
          fill="darkblue"
          opacity={0.2}
        /> */}
      </Group>
      <Group>
        {/* <Rect
          x={0 + INIT_WH - (2 * ENC1.height) / 2 + p1.h - ENC1.lengthFromFront}
          y={p1.w1 + INIT_WH + ENC1.width / 2 - ENC1.lengthFromLeft}
          width={ENC1.width}
          height={ENC1.height}
          rotation={-90}
          cornerRadius={ENC1.corners}
          fill="ghostwhite"
          opacity={0.5}
          ref={RECT1}
        /> */}

        {/* <Rect
          x={
            x2 -
            (ENC2.width / 2) * Math.cos(radians) +
            p2.w1 * Math.cos(radians) -
            ENC2.lengthFromRight * Math.cos(radians) -
            ENC2.lengthFromFront * Math.cos(radians + Math.PI / 2) -
            ENC2.height * Math.cos(radians + Math.PI / 2) +
            p2.h * Math.cos(radians + Math.PI / 2)
          }
          y={
            y2 -
            (ENC2.width / 2) * Math.sin(radians) +
            p2.w1 * Math.sin(radians) -
            ENC2.lengthFromRight * Math.sin(radians) -
            ENC2.lengthFromFront * Math.sin(radians + Math.PI / 2) -
            ENC2.height * Math.sin(radians + Math.PI / 2) +
            p2.h * Math.sin(radians + Math.PI / 2)
          }
          width={ENC2.width}
          height={ENC2.height}
          rotation={angle}
          cornerRadius={ENC2.corners}
          fill="ghostwhite"
          opacity={0.5}
          ref={RECT2}
        /> */}
      </Group>
    </Group>
  );
}

export default RectVariable;
