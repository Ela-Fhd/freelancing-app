export default function Select({ options, value, onChange }) {
  return (
    <select
      onChange={onChange}
      value={value}
      className="input_field my-2 bg-secondary-0 px-6"
    >
      {options?.map(({ label, value }, index) => (
        <option key={`${value}_${index}_${label}`} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
