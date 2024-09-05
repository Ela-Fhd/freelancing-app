import { TagsInput } from "react-tag-input-component";

function Tag({ label, name, tag, setTag, required }) {
  return (
    <div className="mb-2">
      <label
        htmlFor={name}
        className="block mb-2 mt-3 text-secondary-200 md:text-secondary-500"
      >
        {label}
        {required && <span className="text-error mr-2">*</span>}
      </label>
      <TagsInput
        value={tag}
        onChange={setTag}
        name={name}
        placeHolder="تگ را بنویسید..."
        className="input_field w-full"
        id={name}
      />
    </div>
  );
}

export default Tag;
