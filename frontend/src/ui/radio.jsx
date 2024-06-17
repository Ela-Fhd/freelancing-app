function RadioInput({ id, label, name, value, onChange, checked }) {
  return (
    <div className="flex items-center gap-x-2">
      <label
        htmlFor={id}
        className="cursor-pointer text-white md:text-secondary-700"
      >
        {label}
      </label>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
        className="form-radio cursor-pointer w-4 h-4 md:text-primary-800 md:ring-primary-800"
      />
    </div>
  );
}

export default RadioInput;
