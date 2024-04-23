import { useLocation } from "react-router-dom";

export function useLocationMod(paramToGet) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(paramToGet);
}
