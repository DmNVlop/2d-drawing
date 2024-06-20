export const RectHelperCalcSizes = (width, height, maxWidth, maxHeight) => {
  const aspectRadio = width / height;

  // WIDTH MENOR y HEIGHT MAYOR, que el máximo
  if (
    width <= maxWidth &&
    maxHeight * aspectRadio <= maxWidth &&
    height > maxHeight
  ) {
    return {
      realWidth: maxHeight * aspectRadio,
      realHeight: maxHeight,
    };
  }
  if (
    width <= maxWidth &&
    maxHeight * aspectRadio > maxWidth &&
    height > maxHeight
  ) {
    return {
      realWidth: maxWidth,
      realHeight: maxWidth / aspectRadio,
    };
  }

  // WIDTH MAYOR y HEIGHT MENOR, que el máximo
  if (
    width > maxWidth &&
    maxWidth / aspectRadio <= maxHeight &&
    height <= maxHeight
  ) {
    return {
      realWidth: maxWidth,
      realHeight: maxWidth / aspectRadio,
    };
  }
  if (
    width > maxWidth &&
    maxWidth / aspectRadio > maxHeight &&
    height <= maxHeight
  ) {
    return {
      realWidth: maxHeight * aspectRadio,
      realHeight: maxHeight,
    };
  }

  // WIDTH MAYOR y HEIGHT MAYOR, que el máximo
  if (
    width > maxWidth &&
    height > maxHeight &&
    width > height &&
    maxWidth / aspectRadio <= maxHeight
  ) {
    return {
      realWidth: maxWidth,
      realHeight: maxWidth / aspectRadio,
    };
  }
  if (
    width > maxWidth &&
    height > maxHeight &&
    width > height &&
    maxWidth / aspectRadio > maxHeight
  ) {
    return {
      realWidth: maxHeight * aspectRadio,
      realHeight: maxHeight,
    };
  }
  if (width > maxWidth && height > maxHeight && width < height) {
    return {
      realWidth: maxHeight * aspectRadio,
      realHeight: maxHeight,
    };
  }
  if (width > maxWidth && height > maxHeight && width == height) {
    return {
      realWidth: maxHeight * aspectRadio,
      realHeight: maxHeight,
    };
  }

  // WIDTH MENOR y HEIGHT MENOR, que el máximo
  if (width <= maxWidth && height <= maxHeight) {
    return {
      realWidth: width,
      realHeight: height,
    };
  }

  return {
    realWidth: 0,
    realHeight: 0,
  };
};
