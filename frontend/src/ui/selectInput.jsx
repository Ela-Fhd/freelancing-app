function SelectInput({
  label,
  options,
  name,
  required,
  register,
  defaultValue = {},
}) {
  return (
    <div className="mb-2">
      <label
        htmlFor={name}
        className="block text-right mb-2 mt-3 text-secondary-200 md:text-secondary-500"
      >
        {label} {required && <span className="text-error">*</span>}
      </label>
      <select
        id={name}
        className="input_field w-full"
        defaultValue={defaultValue}
        {...register(name)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
