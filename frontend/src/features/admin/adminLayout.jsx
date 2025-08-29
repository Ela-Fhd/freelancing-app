import { HiHome } from "react-icons/hi";
import { HiCollection } from "react-icons/hi";
import { BsGridFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import Sidebar from "@/ui/Sidebar";
import AppLayout from "@/ui/appLayout";
import CustomNavlink from "@/ui/customNavlink";

export default function AdminLayout() {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavlink to="dashboard">
          <HiHome className="text-xl" />
          <span>خانه</span>
        </CustomNavlink>

        <CustomNavlink to="users">
          <FaUserAlt className="text-xl" />
          <span>کاربران</span>
        </CustomNavlink>

        <CustomNavlink to="projects">
          <BsGridFill className="text-xl" />
          <span>پروژه ها</span>
        </CustomNavlink>

        <CustomNavlink to="proposals">
          <HiCollection className="text-xl" />
          <span>درخواست ها</span>
        </CustomNavlink>
      </Sidebar>
    </AppLayout>
  );
}
