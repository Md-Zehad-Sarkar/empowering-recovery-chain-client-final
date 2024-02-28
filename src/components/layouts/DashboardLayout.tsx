import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppSelector } from "@/redux/hooks";

const DashboardLayout = () => {
  // const { themeMode } = useAppSelector((state) => state.theme);

  return (
    // <div className={themeMode === true ? "bg-black" : "bg-white"}>
    <div className="md:grid-cols-12 md:grid">
      <div className="md:h-[100vh] md:col-span-2 bg-slate-50 overflow-auto">
        <Sidebar />
      </div>
      <div className="overflow-auto lg:h-screen md:col-span-10">
        <Outlet />
      </div>
    </div>
    // </div>
  );
};

export default DashboardLayout;
