import { MdOutlineErrorOutline } from "react-icons/md";
import Button from "@/ui/button";
import useBack from "@/hooks/useMoveBack";

function NotFound() {
  const back = useBack();

  return (
    <div className="w-full md:max-w-max mx-auto">
      <div className="p-5 flex items-center justify-center gap-x-2 my-5">
        <p className="text-2xl text-secondary-600 ">صفحه مورد نظر پیدا نشد!</p>
        <MdOutlineErrorOutline className="w-8 h-8 text-red-500" />
      </div>
      <Button type="button" onClick={back}>
        بازگشت به صفحه قبل
      </Button>
    </div>
  );
}

export default NotFound;
