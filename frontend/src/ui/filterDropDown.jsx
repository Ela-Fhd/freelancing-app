import Select from "./select";
import { useSearchParams } from "react-router-dom";

export default function FilterDropDown({ options, filterFields }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get(filterFields) || "";

  const handleChange = (e) => {
    searchParams.set(filterFields, e.target.value);
    setSearchParams(searchParams);
  };

  return <Select options={options} value={category} onChange={handleChange} />;
}
