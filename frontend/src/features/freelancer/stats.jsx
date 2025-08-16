import { HiOutlineViewGrid } from "react-icons/hi";
import { HiCurrencyDollar } from "react-icons/hi";
import { HiCollection } from "react-icons/hi";
import Stat from "@/ui/stat";
import { toPersianNumberWithComma } from "@/utils/toPersianDigits";

export default function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = acceptedProposals.reduce(
    (acc, current) => acc + current.price,
    0
  );

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <Stat
        title="درخواست ها"
        value={numOfProposals}
        color="primary"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />

      <Stat
        title="درخواست های تایید شده"
        value={acceptedProposals.length}
        color="green"
        icon={<HiCollection className="w-20 h-20" />}
      />

      <Stat
        title="کیف پول"
        value={toPersianNumberWithComma(balance)}
        color="primary"
        icon={<HiCurrencyDollar className="w-20 h-20" />}
      />
    </div>
  );
}
