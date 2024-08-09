function RadioInput({
  id,
  label,
  name,
  value,
  register,
  validationSchema,
  required,
  watch,
}) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-x-2">
        <label
          htmlFor={id}
          className="cursor-pointer text-white md:text-secondary-700 flex"
        >
          {label} {required && <span className="text-error mr-2">*</span>}
        </label>
        <input
          type="radio"
          name={name}
          id={id}
          value={value}
          {...register(name, validationSchema)}
          checked={watch(name) === value}
          className="form-radio cursor-pointer w-4 h-4 md:text-primary-800 md:ring-primary-800"
        />
      </div>
    </div>
  );
}

export default RadioInput;
