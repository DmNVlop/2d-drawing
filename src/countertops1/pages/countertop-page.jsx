import { Outlet } from "react-router-dom";
import "./countertop-page.css";
import Sidebar from "../components/sidebar";
import SidebarRight from "../components/sidebar-right";
import { useState } from "react";

export default function CountertopPage() {
  const [sidebarRightOpened, setSidebarRightOpened] = useState(false);

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
