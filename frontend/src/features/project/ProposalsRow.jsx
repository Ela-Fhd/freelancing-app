import Table from "@/ui/table";
import truncateText from "@/utils/truncateText";
import { toPersianNumberWithComma } from "@/utils/toPersianDigits";
import toLocaleDateString from "@/utils/toLocaleDateString";
import { MdPublishedWithChanges } from "react-icons/md";
import { useState } from "react";
import Modal from "@/ui/modal";
import ChangeProposalStatus from "./ChangeProposalStatus";

export default function ProposalsRow({ proposal, index }) {
  //status ==> 0 is cancelled - 1 is requested - 2 is approved
  const [open, setOpen] = useState(false);
  const { status } = proposal;
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

  return (
    <>
      <Table.Row key={proposal?._id}>
        <td>{index + 1}</td>
        <td>{proposal?.user?.name ?? "نامشخص"}</td>
        <td>{proposal?.duration} روز</td>
        <td>{toPersianNumberWithComma(proposal?.price)}</td>
        <td>{truncateText(proposal?.description, 50)}</td>
        <td>{toLocaleDateString(proposal?.createdAt)}</td>
        <td>
          <span className={`badge ${statusClassName[status].color}`}>
            {statusClassName[status].label}
          </span>
        </td>
        <td>
          <Modal
            title="تغییر وضیعت پروژه"
            open={open}
            close={() => setOpen(false)}
          >
            <ChangeProposalStatus
              proposal={proposal}
              onClose={() => setOpen(false)}
            />
          </Modal>

          <button onClick={() => setOpen(true)}>
            <MdPublishedWithChanges className="h-6 w-6 text-primary-800" />
          </button>
        </td>
      </Table.Row>
    </>
  );
}
