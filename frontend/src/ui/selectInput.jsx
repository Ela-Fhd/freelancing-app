import { FaChevronDown } from "react-icons/fa";

function SelectInput({
  label,
  options,
  name,
  required,
  register,
  defaultValue = {},
}) {
  return (
    <div className="mb-2 relative">
      <label
        htmlFor={name}
        className="block text-right mb-2 mt-3 text-secondary-200 md:text-secondary-500"
      >
        {label} {required && <span className="text-error">*</span>}
      </label>

      <div className="relative">
        <select
          id={name}
          className="input_field w-full px-2 pl-8 pr-5 appearance-none cursor-pointer"
          defaultValue={defaultValue}
          {...register(name)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <FaChevronDown className="absolute top-1/2 left-2 transform -translate-y-1/2 text-secondary-300 pointer-events-none text-md" />
      </div>
    </div>
  );
}

export default SelectInput;
