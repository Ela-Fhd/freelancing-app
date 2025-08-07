const colors = {
  primary: "bg-primary-100 text-primary-700",
  green: "bg-green-100 text-green-700",
  yellow: "bg-yellow-100 text-yellow-700",
};

export default function Stat({ title, value, icon, color }) {
  return (
    <div className="col-span-1 grid grid-row-2 grid-cols-[6.4rem_1fr] gap-x-5 bg-secondary-0 p-5 rounded-lg">
      <div
        className={`row-span-2 rounded-full flex items-center justify-center aspect-square ${colors[color]} cursor-pointer`}
      >
        {icon}
      </div>
      <h5 className="mb-2 text-secondary-500 font-bold">{title}</h5>
      <p className="text-secondary-900 font-bold text-3xl">{value}</p>
    </div>
  );
}
