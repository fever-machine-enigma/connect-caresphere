import { Outlet } from "react-router-dom";
import _Sidebar from "./_Sidebar";
import _Header from "./_Header";

const Layout = () => {
  return (
    <div className="flex flex-row bg-bgLight h-screen w-screen overflow-hidden">
      <_Sidebar />

      <div className="flex flex-1 flex-col p-4">
        <_Header />
        <div className="flex-1 p-4 min-h-0 overflow-auto">{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Layout;
