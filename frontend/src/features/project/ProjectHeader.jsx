import { HiOutlineArrowRight } from "react-icons/hi";
import useBack from "@/hooks/useMoveBack";

export default function Project({ project }) {
  const back = useBack();
  return (
    <div className="flex items-center gap-x-5 mb-8">
      <button onClick={back}>
        <HiOutlineArrowRight className="text-primary-900 w-5 h-5" />
      </button>
      <h1 className="font-bold text-secondary-500 text-md">
        درخواست های {project.title}
      </h1>
    </div>
  );
}
