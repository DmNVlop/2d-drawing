import { message, Typography } from "antd";
import { Link } from "react-router-dom";
import { useCountertopContext } from "../../context/ct-context";
import { getXMLbyJSON } from "../../helpers/export-to-ardis";

function ActionButtonsLeftSidebar() {
  const { exportAllData } = useCountertopContext();

  function descargar(objeto, nombreArchivo) {
    let dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(objeto));
    let downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", nombreArchivo + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

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
    message.info("⚠️ No hay piezas seleccionadas para exportar.");
    if (!dataToExport || dataToExport?.pieces?.length === 0) return;

    downloadXML(getXMLbyJSON(dataToExport), dataToExport.clientData.clientName);
    // descargar(dataToExport, "objetoFiltrado");

    console.log("🚀 ~ handleExportAllData ~ exportAllData():", dataToExport);
    console.log(
      "🚀 ~ handleExportAllData ~ getXMLbyJSON(dataToExport):",
      getXMLbyJSON(dataToExport)
    );
    // message.info("Guardando..." + JSON.stringify(dataToExport));
  };

  return (
    <section id="nav-countertop">
      <Typography.Title level={4}>Acciones</Typography.Title>
      <ul className="list-header">
        <li>
          <Link to="/">
            <img src="/images/home.jpg" alt="Ir a Inicio" title="Ir a Inicio" />
          </Link>
        </li>
        <li>
          <Link to={(e) => e.preventDefault()} onClick={handleExportAllData}>
            <img src="/images/guardar.jpg" alt="Guardar" title="Guardar" />
          </Link>
        </li>
      </ul>
    </section>
  );
}
export default ActionButtonsLeftSidebar;
