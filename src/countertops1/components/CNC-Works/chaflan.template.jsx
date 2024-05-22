import PropTypes from "prop-types";

import { Layer, Line } from "react-konva";
import { GLOBAL_CT_M } from "../../mocks/global-ct.mock";
import { useEffect } from "react";

function ChaflanCNCWork(props) {
  useEffect(() => {
    // console.log("🚀 ~ ChaflanCNCWork ~ props:", props);
  }, [props]);

  return (
    <Layer x={GLOBAL_CT_M.xGlobalLayer} y={GLOBAL_CT_M.yGlobalLayer}>
      <Line points={[0, 0, 50, 0, 0, 50]} closed={true} fill="white" />
    </Layer>
  );
}

export default ChaflanCNCWork;

ChaflanCNCWork.propTypes = {
  workData: PropTypes.object,
};
