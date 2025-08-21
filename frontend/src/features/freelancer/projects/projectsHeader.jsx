import FilterDropDown from "@/ui/filterDropDown";
import FilterButton from "@/ui/filterButton";
import useCategories from "@/hooks/useCategories";

const sortOptions = [
  {
    label: "(مرتب سازی) جدید ترین",
    value: "latest",
  },

  {
    label: "(مرتب سازی) قدیمی ترین",
    value: "earliest",
  },
];

const statusOptions = [
  {
    label: "همه",
    value: "ALL",
  },

  {
    label: "باز",
    value: "OPEN",
  },

  {
    label: "بسته",
    value: "CLOSED",
  },
];

const ProjectHeader = () => {
  const { transformedCategories } = useCategories();

  return (
    <div className="flex items-center justify-between text-secondary-500 mb-8">
      <h2 className="font-bold text-2xl">لیست پروژه ها</h2>
      <div>
        <FilterButton options={statusOptions} filterFields="status" />
      </div>
      <div className="flex gap-x-5">
        <FilterDropDown options={sortOptions} filterFields="sort" />
        <FilterDropDown
          options={[
            { value: "ALL", label: "دسته بندی (همه)" },
            ...transformedCategories,
          ]}
          filterFields="category"
        />
      </div>
    </div>
  );
};

export default ProjectHeader;
