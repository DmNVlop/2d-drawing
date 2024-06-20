import { useLocation } from "react-router-dom";

export function useLocationMod(paramToGet) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(paramToGet);
}

export function useCustomURLHandler() {
  const location = useLocation();
  const shapeNameUrl = location.pathname.substring(1);
  const url_shape = shapeNameUrl.split("/").pop();
  const tParamUrl = useLocationMod("t");
  const ATTRIB_SETTED = tParamUrl ? url_shape + "_" + tParamUrl : url_shape;

  return { location, shapeNameUrl, url_shape, tParamUrl, ATTRIB_SETTED };
}
