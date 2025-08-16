import ProposalsRow from "./proposalRow";
import useProposals from "./useProposals";
import Loading from "@/ui/Loading";
import Table from "@/ui/table";
import Empty from "@/ui/empty";

export default function ProposalsTable() {
  const { proposals, loading } = useProposals();

  if (loading) return <Loading />;
  if (!proposals?.length) return <Empty resourceName="درخواستی" />;
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <th>#</th>
          <th>توضیحات</th>
          <th>زمان تحویل</th>
          <th>هزینه</th>
          <th>وضیعت</th>
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
