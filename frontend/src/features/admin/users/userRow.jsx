import Table from "@/ui/table";
import { MdAssignmentAdd } from "react-icons/md";
import { useState } from "react";
import Modal from "@/ui/modal";
import ChangeUserStatus from "./changeUserStatus";

export default function UserRow({ user, index }) {
  const [open, setOpen] = useState(false);
  const { status } = user;

  const statusClassName = [
    {
      label: "رد شده",
      color: "badge--danger",
    },

    {
      label: "در انتظار تایید",
      color: "badge--secondary",
    },

    {
      label: "تایید شده",
      color: "badge--success",
    },
  ];

  const ROLES = {
    ADMIN: "ادمین",
    FREELANCER: "فریلنسر",
    OWNER: "کارفرما",
  };

  return (
    <>
      <Table.Row key={user._id}>
        <td>{index + 1}</td>
        <td>{user.name}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.email}</td>
        <td>{ROLES[user.role]}</td>
        <td>
          <span className={`badge ${statusClassName[status].color}`}>
            {statusClassName[status].label}
          </span>
        </td>
        <td>
          <Modal
            title="تغییر وضیعت کاربر"
            open={open}
            close={() => setOpen(false)}
          >
            <ChangeUserStatus user={user} onClose={() => setOpen(false)} />
          </Modal>
          <button onClick={() => setOpen(true)}>
            <MdAssignmentAdd className="w-5 h-5 text-primary-800" />
          </button>
        </td>
      </Table.Row>
    </>
  );
}
