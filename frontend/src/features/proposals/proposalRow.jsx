import Table from "@/ui/table";
import truncateText from "@/utils/truncateText";
import { toPersianNumberWithComma } from "@/utils/toPersianDigits";

export default function ProposalsRow({ proposal, index }) {
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
        <td>{truncateText(proposal?.description, 50)}</td>
        <td>{proposal?.duration} روز</td>
        <td>{toPersianNumberWithComma(proposal?.price)}</td>
        <td>
          <span className={`badge ${statusClassName[status].color}`}>
            {statusClassName[status].label}
          </span>
        </td>
      </Table.Row>
    </>
  );
}
