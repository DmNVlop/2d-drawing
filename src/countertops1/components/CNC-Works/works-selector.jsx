import PropTypes from "prop-types";
import { WORKS_TYPES } from "../../mocks/WORKS.types";
import ChaflanCNCWork from "./chaflan.template";
import FalsaEscuadraCNCWork from "./falsa-escuadra.template";
import RectoInteriorCNCWork from "./recto-interior.template";
import { Group } from "react-konva";
import { useCustomURLHandler } from "../../helpers/location.hook";
import { SHAPE_TYPES } from "../../mocks/SHAPE_TYPES.const";
import ChaflanCNCWorkL from "./chaflan-l.template";

function WorksSelectorCNCWorks(props) {
  const { workData, pieceSelected, indexPiece } = props;

  const { ATTRIB_SETTED } = useCustomURLHandler();
  const {
    SIMPLE,
    SQUARE,
    CIRCLE,
    LShaped_l1,
    LShaped_l2,
    UShaped_u1,
    UShaped_u2,
    UShaped_u3,
    UShaped_u4,
  } = SHAPE_TYPES;

  const validateShapeSelectedToRender = (shapes) => {
    if (!shapes || Array.isArray(shapes) === false) return false;
    return shapes.includes(ATTRIB_SETTED);
  };

  if (workData.type == WORKS_TYPES.CCCHAFLAN) {
    // return workData.selected && <ChaflanCNCWork workData={workData} key={1} />;
    return (
      <Group>
        {validateShapeSelectedToRender([SIMPLE, SQUARE, CIRCLE]) && (
          <ChaflanCNCWork
            workData={workData}
            pieceSelected={pieceSelected}
            indexPiece={indexPiece}
          />
        )}
        {validateShapeSelectedToRender([
          LShaped_l1,
          LShaped_l2,
          UShaped_u1,
          UShaped_u2,
          UShaped_u3,
          UShaped_u4,
        ]) && (
          <ChaflanCNCWorkL
            workData={workData}
            pieceSelected={pieceSelected}
            indexPiece={indexPiece}
          />
        )}
      </Group>
    );
  }

  if (workData.type == WORKS_TYPES.CCFALESC) {
    // return (
    //   workData.selected && <FalsaEscuadraCNCWork workData={workData} key={1} />
    // );
    return (
      <Group>
        <FalsaEscuadraCNCWork
          workData={workData}
          pieceSelected={pieceSelected}
        />
      </Group>
    );
  }

  if (workData.type == WORKS_TYPES.CCRECIN) {
    // return (
    //   workData.selected && <RectoInteriorCNCWork workData={workData} key={1} />
    // );
    return (
      <Group>
        <RectoInteriorCNCWork
          workData={workData}
          pieceSelected={pieceSelected}
        />
      </Group>
    );
  }

  return <></>;
}

export default WorksSelectorCNCWorks;

WorksSelectorCNCWorks.propTypes = {
  workData: PropTypes.object,
  pieceSelected: PropTypes.object,
};
