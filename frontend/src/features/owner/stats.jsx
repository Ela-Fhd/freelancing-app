import Stat from "./stat";
import { HiOutlineViewGrid } from "react-icons/hi";
import { HiCurrencyDollar } from "react-icons/hi";
import { HiCollection } from "react-icons/hi";

export default function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.map((p) => p.status === 2).length;
  const numOfProposals = projects.reduce(
    (acc, current) => current.proposals.length + acc,
    0
  );
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <Stat
        title="پروژه ها"
        value={numOfProjects}
        color="primary"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />

      <Stat
        title="پروژه های انجام شده"
        value={numOfAcceptedProjects}
        color="green"
        icon={<HiCurrencyDollar className="w-20 h-20" />}
      />

      <Stat
        title="درخواست ها"
        value={numOfProposals}
        color="primary"
        icon={<HiCollection className="w-20 h-20" />}
      />
    </div>
  );
}
