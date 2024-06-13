import { Spin } from "antd";

const loadingStyle = {
  position: "fixed",
  width: "100vw",
  height: "100vw",
  left: 0,
  top: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const contentStyle = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 4,
};

const content = <div style={contentStyle} />;

function Loading() {
  return (
    <div id={"loading"} style={loadingStyle}>
      <Spin tip="Cargando" size="large">
        {content}
      </Spin>
    </div>
  );
}
export default Loading;
