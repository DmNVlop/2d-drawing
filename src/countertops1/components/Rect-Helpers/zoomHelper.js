export const useHandleZoomWheel = (
  e,
  countertops,
  ATTRIB_SETTED,
  setScaleOnRootConfigCtx
) => {
  e.evt.preventDefault();
  const scaleWidthX = countertops[ATTRIB_SETTED].rootConfig?.scaleX || 1;
  const scaleWidthY = countertops[ATTRIB_SETTED].rootConfig?.scaleY || 1;
  const scaleSeek = 0.1;

  e.evt.deltaY > 0
    ? setScaleOnRootConfigCtx(scaleWidthX - scaleSeek, scaleWidthY - scaleSeek)
    : setScaleOnRootConfigCtx(scaleWidthX + scaleSeek, scaleWidthY + scaleSeek);
};

export default useHandleZoomWheel;
