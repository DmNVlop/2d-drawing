import PropTypes from "prop-types";
import { WORKS_TYPES } from "../../mocks/WORKS.types";
import ChaflanCNCWork from "./chaflan.template";
import FalsaEscuadraCNCWork from "./falsa-escuadra.template";
import RectoInteriorCNCWork from "./recto-interior.template";

function WorksSelectorCNCWorks(props) {
  const { workData } = props;

  if (workData.type == WORKS_TYPES.CCCHAFLAN) {
    return workData.selected && <ChaflanCNCWork workData={{ x: 20, y: 20 }} key={1} />;
  }

  if (workData.type == WORKS_TYPES.CCFALESC) {
    return workData.selected && <FalsaEscuadraCNCWork workData={{ x: 20, y: 20 }} key={1} />;
  }

  if (workData.type == WORKS_TYPES.CCRECIN) {
    return workData.selected && <RectoInteriorCNCWork workData={{ x: 20, y: 20 }} key={1} />;
  }

  return <></>;
}

export default WorksSelectorCNCWorks;

WorksSelectorCNCWorks.propTypes = {
  workData: PropTypes.object,
  id: PropTypes.number,
};

