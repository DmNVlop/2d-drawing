import { Outlet } from "react-router-dom";
import "./countertop-page.css";
import Sidebar from "../components/sidebar";
import SidebarRight from "../components/sidebar-right";
import { useEffect, useState } from "react";

import { useCountertopContext } from "../context/ct-context";
import { useCustomURLHandler } from "../helpers/location.hook";

export default function CountertopPage() {
  const [sidebarRightOpened, setSidebarRightOpened] = useState(false);

  const {
    countertops,
    onSetSelectedPieceCtx,
    onSetNumberOfPieceCtx,
    setOpacityOnPiecesCtx,
  } = useCountertopContext();

  const { ATTRIB_SETTED } = useCustomURLHandler();

  useEffect(() => {
    setOpacityOnPiecesCtx();
    onSetSelectedPieceCtx(null);
    onSetNumberOfPieceCtx(countertops[ATTRIB_SETTED]?.partsData.length || null);
  }, [ATTRIB_SETTED]);

  return (
    <>
      <div id="countertor-global">
        <Sidebar sidebarRightOpenedControl={setSidebarRightOpened} />

        <div id="countertop-viewer">
          <Outlet />
        </div>

        <SidebarRight
          sidebarRightOpened={sidebarRightOpened}
          setSidebarRightOpened={setSidebarRightOpened}
        />
      </div>
    </>
  );
}
