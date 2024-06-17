import { useNavigate } from "react-router-dom";

export default function useBack() {
  const navigate = useNavigate();
  return () => navigate(-1);
}
