import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function MultiDatePicker({ name, label, date, setDate, required }) {
  return (
    <div className="mb-2">
      <label
        htmlFor={name}
        className="block mb-2 mt-3 text-secondary-200 md:text-secondary-500"
      >
        {label}
        {required && <span className="text-error mr-2">*</span>}
      </label>
      <DatePicker
        value={date}
        onChange={setDate}
        containerClassName="w-full "
        inputClass="w-full input_field"
        calendarPosition="bottom-center"
        format="YYYY/MM/DD"
        calendar={persian}
        locale={persian_fa}
      />
    </div>
  );
}

export default MultiDatePicker;
