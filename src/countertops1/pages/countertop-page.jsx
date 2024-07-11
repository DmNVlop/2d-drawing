import { Outlet } from "react-router-dom";
import "./countertop-page.css";
import Sidebar from "../components/sidebar";
import SidebarRight from "../components/sidebar-right";
import { useEffect, useState } from "react";

import { useCountertopContext } from "../context/ct-context";
import { useCustomURLHandler } from "../helpers/location.hook";
import ZoomStageComponent from "../components/Simple-Componentes/zoom-stage";

export default function CountertopPage() {
  // const [sidebarRightOpened, setSidebarRightOpenedCtx] = useState(false);

  const {
    countertops,
    onSetSelectedPieceCtx,
    onSetNumberOfPieceCtx,
    setOpacityOnPiecesCtx,
    sidebarRightOpenedCtx,
    setSidebarRightOpenedCtx,
  } = useCountertopContext();

  const { ATTRIB_SETTED } = useCustomURLHandler();

  useEffect(() => {
    setOpacityOnPiecesCtx();
    onSetSelectedPieceCtx(null);
    onSetNumberOfPieceCtx(countertops[ATTRIB_SETTED]?.partsData.length || null);
  }, [ATTRIB_SETTED]);

  useEffect(() => {
    if (countertops?.selectedPiece == null) setSidebarRightOpenedCtx(false);
  }, [countertops?.selectedPiece]);

  return (
    <>
      <div id="countertor-global">
        <Sidebar />

        <div id="countertop-viewer">
          <Outlet />
        </div>

        <SidebarRight />
      </div>
    </>
  );
}
