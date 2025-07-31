import Table from "@/ui/table";
import Empty from "@/ui/empty";
import ProposalsRow from "./ProposalsRow";

export default function Proposal({ proposals }) {
  if (!proposals.length) return <Empty resourceName="درخواستی" />;
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <th>#</th>
          <th>نام درخواست دهنده</th>
          <th>زمان تحویل</th>
          <th>قیمت</th>
          <th>توضیحات</th>
          <th>زمان درخواست</th>
          <th>وضیعت</th>
          <th>عملیات</th>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalsRow
            proposal={proposal}
            index={index}
            key={`${proposals._id}_${index}`}
          />
        ))}
      </Table.Body>
    </Table>
  );
}
