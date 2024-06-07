import PropTypes from "prop-types";
import { WORKS_TYPES } from "../../mocks/WORKS.types";
import ChaflanCNCWork from "./chaflan.template";
import FalsaEscuadraCNCWork from "./falsa-escuadra.template";
import RectoInteriorCNCWork from "./recto-interior.template";
import { Group } from "react-konva";

function WorksSelectorCNCWorks(props) {
  const { workData, pieceSelected } = props;

  if (workData.type == WORKS_TYPES.CCCHAFLAN) {
    // return workData.selected && <ChaflanCNCWork workData={workData} key={1} />;
    return (
      <Group>
        <ChaflanCNCWork
          workData={workData}
          key={1}
          pieceSelected={pieceSelected}
        />
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
          key={1}
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
          key={1}
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
  id: PropTypes.number,
  pieceSelected: PropTypes.object,
};
