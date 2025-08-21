import { useState } from "react";
import { toPersianNumberWithComma } from "@/utils/toPersianDigits";

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
  filterPrice = false,
}) {
  const [filterdNumber, setFilteredNumber] = useState(0);

  const handleChange = (e) =>
    setFilteredNumber(toPersianNumberWithComma(e.target.value));

  return (
    <div className="block">
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
        onChange={(e) => {
          register(name).onChange(e);
          handleChange(e);
        }}
      />

      {filterPrice && (
        <span className="text-green-500 mr-3 mt-2 block">
          {filterdNumber} ریال
        </span>
      )}

      {errors && errors[name] && (
        <span className="text-error block text-sm">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default Input;
