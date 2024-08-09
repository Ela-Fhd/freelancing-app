import RadioInput from "@/ui/radio";
function RadioInputGroup({ register, watch, errors, configs }) {
  const { name, validationSchema = {}, options } = configs;
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-x-8">
        {options.map(({ label, value }) => (
          <RadioInput
            key={value}
            label={label}
            value={value}
            id={value}
            name={name}
            register={register}
            watch={watch}
            validationSchema={validationSchema}
            errors={errors}
          />
        ))}
      </div>
      {errors && errors[name] && (
        <p className="text-error block text-sm mt-2 text-center">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
}

export default RadioInputGroup;
