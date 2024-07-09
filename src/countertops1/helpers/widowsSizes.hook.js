import { useElementRefContext } from "../context/ct-context";

export function useWindowsSizes() {
  const elementRef = useElementRefContext();

  const elementRefWidth = elementRef?.elementRef?.width || 0;
  const elementRefMarginTop = elementRef?.elementRef?.marginTop || 0;

  const tempWidth = window.innerWidth - elementRefWidth - 30;
  const tempHeight = window.innerHeight - elementRefMarginTop - 65;

  const stageWidth = tempWidth < 400 ? 400 : tempWidth;
  const stageHeight = tempHeight < 400 ? 400 : tempHeight;

  return { stageWidth, stageHeight };
}
