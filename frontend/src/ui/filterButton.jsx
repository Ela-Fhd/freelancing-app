import { useSearchParams } from "react-router-dom";

export default function FilterButton({ options, filterFields }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get(filterFields) || options.at(0).value;

  const handleClick = (value) => {
    searchParams.set(filterFields, value);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex gap-x-2 items-center">
      <span className="text-sm">وضیعت</span>
      {options.map(({ value, label }, index) => {
        const isActive = value === category;
        return (
          <div className="flex gap-x-2">
            <button
              key={`${value}_${index}`}
              onClick={() => handleClick(value)}
              disabled={isActive}
              className={`py-2 px-4 rounded-lg font-bold transition-all duration-300 text-sm ${
                isActive
                  ? "!bg-primary-900 text-secondary-0 "
                  : "bg-secondary-0 text-secondary-800 "
              }`}
            >
              {label}
            </button>
          </div>
        );
      })}
    </div>
  );
}
