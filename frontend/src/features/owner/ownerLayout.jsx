import { HiHome } from "react-icons/hi";
import { HiCollection } from "react-icons/hi";
import Sidebar from "@/ui/Sidebar";
import AppLayout from "@/ui/appLayout";
import CustomNavlink from "@/ui/customNavlink";

export default function OwnerLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavlink to="dashboard">
          <HiHome className="text-xl" />
          <span>خانه</span>
        </CustomNavlink>

        <CustomNavlink to="projects">
          <HiCollection className="text-xl" />
          <span>پروژه ها</span>
        </CustomNavlink>
      </Sidebar>
    </AppLayout>
  );
}
