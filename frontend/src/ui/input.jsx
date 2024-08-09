function Input({
  name = "",
  type = "text",
  placeholder,
  label,
  id,
  register,
  validationSchema,
  errors,
  required,
}) {
  return (
    <>
      <label
        htmlFor={id}
        className="block mb-2 mt-3 text-secondary-200 md:text-secondary-500"
      >
        {label}
        {required && <span className="text-error mr-2">*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        className="input_field w-full"
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm">
          {errors[name]?.message}
        </span>
      )}
    </>
  );
}

export default Input;
