import { Outlet } from "react-router-dom";
import "./countertop-page.css";
import Sidebar from "../components/sidebar";

export default function CountertopPage() {
  return (
    <>
        <div id="countertor-global">
          <Sidebar />

          <div id="countertop-viewer">
            <Outlet />
          </div>
        </div>
    </>
  );
}
