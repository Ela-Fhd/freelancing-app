import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";

function AppLayout() {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
      <Header />
      <Sidebar />
      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-screen-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
