import PropTypes from "prop-types";

import { Layer, Line } from "react-konva";
import { GLOBAL_CT_M } from "../../mocks/global-ct.mock";
import { useEffect } from "react";

function FalsaEscuadraCNCWork(props) {
  useEffect(() => {
    console.log("🚀 ~ FalsaEscuadraTemplate ~ props:", props);
  }, [props]);

  return (
    <Layer x={GLOBAL_CT_M.xGlobalLayer} y={GLOBAL_CT_M.yGlobalLayer}>
      <Line points={[460, 0, 500, 0, 500, 200]} closed={true} fill="white" />
    </Layer>
  );
}

export default FalsaEscuadraCNCWork;

FalsaEscuadraCNCWork.propTypes = {
  workData: PropTypes.object,
};
