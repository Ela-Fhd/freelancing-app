import ProposalsTable from "@/features/proposals/proposalsTable";

export default function Proposals() {
  return (
    <>
      <h2 className="font-bold text-lg text-secondary-900 mb-5">
        درخواست های شما
      </h2>
      <ProposalsTable />
    </>
  );
}
