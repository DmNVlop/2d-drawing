import { Button, message, Tooltip, Typography } from "antd";
import { Link } from "react-router-dom";
import { useCountertopContext } from "../../context/ct-context";
import { getXMLbyJSON } from "../../helpers/export-to-ardis";
import {
  CloudUploadOutlined,
  DownloadOutlined,
  HomeOutlined,
} from "@ant-design/icons";

function ActionButtonsLeftSidebar(props) {
  const { showTitle } = props;
  const { exportAllData } = useCountertopContext();

  // function descargar(objeto, nombreArchivo) {
  //   let dataStr =
  //     "data:text/json;charset=utf-8," +
  //     encodeURIComponent(JSON.stringify(objeto));
  //   let downloadAnchorNode = document.createElement("a");
  //   downloadAnchorNode.setAttribute("href", dataStr);
  //   downloadAnchorNode.setAttribute("download", nombreArchivo + ".json");
  //   document.body.appendChild(downloadAnchorNode); // required for firefox
  //   downloadAnchorNode.click();
  //   downloadAnchorNode.remove();
  // }

  function downloadXML(xmlData, fileName) {
    const blob = new Blob([xmlData], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName + "_" + Date.now() + ".xml";
    document.body.appendChild(link); // required for firefox
    link.click();
    link.remove();
  }

  const handleExportAllData = (e) => {
    e.preventDefault();

    const dataToExport = exportAllData();

    if (!dataToExport || dataToExport?.pieces?.length === 0) {
      message.info("⚠️ No hay piezas seleccionadas para exportar.");
      return;
    }

    downloadXML(getXMLbyJSON(dataToExport), dataToExport.clientData.clientName);
    // descargar(dataToExport, "objetoFiltrado");

    console.log("🚀 ~ handleExportAllData ~ exportAllData():", dataToExport);
    console.log(
      "🚀 ~ handleExportAllData ~ getXMLbyJSON(dataToExport):",
      getXMLbyJSON(dataToExport)
    );
    // message.info("Guardando..." + JSON.stringify(dataToExport));
  };

  const handleImportDXF = (e) => {
    e.preventDefault();
    message.info("🚧 Importar DXF, EN CONSTRUCCIÓN... 🚧");
  };

  return (
    <section className="nav-countertop" style={{ marginBottom: "0" }}>
      {showTitle && <Typography.Title level={4}>Acciones</Typography.Title>}
      <ul className="list-header">
        <li>
          <Tooltip title="Ir a Inicio">
            <Link to="/">
              <Button
                // type="primary"
                icon={<HomeOutlined />}
                size={"large"}
              />
              {/* <img src="/images/home.jpg" alt="Ir a Inicio" /> */}
            </Link>
          </Tooltip>
        </li>
        <li>
          <Tooltip title="Exportar a Ardis">
            <Link to={(e) => e.preventDefault()} onClick={handleExportAllData}>
              <Button
                // type="primary"
                icon={<DownloadOutlined />}
                size={"large"}
              />
              {/* <img src="/images/guardar.jpg" alt="Exportar a Ardis" /> */}
            </Link>
          </Tooltip>
        </li>
        <li>
          <Tooltip title="Importar DXF">
            <Link to={(e) => e.preventDefault()} onClick={handleImportDXF}>
              <Button
                // type="primary"
                icon={<CloudUploadOutlined />}
                size={"large"}
              />
              {/* <img src="/images/guardar.jpg" alt="Importar DXF" /> */}
            </Link>
          </Tooltip>
        </li>
      </ul>
    </section>
  );
}
export default ActionButtonsLeftSidebar;
