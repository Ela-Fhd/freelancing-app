import { HiHome } from "react-icons/hi";
import { HiCollection } from "react-icons/hi";
import Sidebar from "@/ui/Sidebar";
import AppLayout from "@/ui/appLayout";
import CustomNavlink from "@/ui/customNavlink";

export default function OwnerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavlink to="/owner/dashboard">
          <HiHome className="text-xl" />
          <span>خانه</span>
        </CustomNavlink>

        <CustomNavlink to="/owner/projects">
          <HiCollection className="text-xl" />
          <span>پروژه ها</span>
        </CustomNavlink>
      </Sidebar>
    </AppLayout>
  );
}
