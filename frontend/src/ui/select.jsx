export default function Select({ options, value, onChange }) {
  console.log(options);
  return (
    <select
      onChange={onChange}
      value={value}
      className="input_field my-2 bg-secondary-0 px-6"
    >
      {options?.map((item) => (
        <option value={item.value}>{item.label}</option>
      ))}
    </select>
  );
}
