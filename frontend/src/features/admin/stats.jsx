import { HiCollection } from "react-icons/hi";
import Stat from "@/ui/stat";
import { FaUserAlt } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";

export default function Stats({ users, proposals, projects }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <Stat
        title="کاربران"
        value={users}
        color="primary"
        icon={<FaUserAlt className="w-20 h-20" />}
      />

      <Stat
        title="درخواست ها"
        value={proposals}
        color="primary"
        icon={<HiCollection className="w-20 h-20" />}
      />

      <Stat
        title="پروژه ها"
        value={projects}
        color="green"
        icon={<BsGridFill className="w-20 h-20" />}
      />
    </div>
  );
}
