import PropTypes from "prop-types";

import { Layer, Line } from "react-konva";
import { GLOBAL_CT_M } from "../../mocks/global-ct.mock";
import { useEffect } from "react";

function RectoInteriorCNCWork(props) {
  useEffect(() => {
    console.log("🚀 ~ RectoInteriorCNCWork ~ props:", props);
  }, [props]);

  return (
    <Layer x={GLOBAL_CT_M.xGlobalLayer} y={GLOBAL_CT_M.yGlobalLayer}>
      <Line
        points={[0, 160, 200, 160, 200, 200, 0, 200]}
        closed={true}
        fill="white"
      />
    </Layer>
  );
}

export default RectoInteriorCNCWork;

RectoInteriorCNCWork.propTypes = {
  workData: PropTypes.object,
};
