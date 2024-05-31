export const RectHelperCalcSizes = (
  width,
  height,
  maxWidth,
  maxHeight,
  aspectRadio
) => {
  // WIDTH MENOR y HEIGHT MAYOR, que el máximo
  if (
    width <= maxWidth &&
    maxHeight * aspectRadio <= maxWidth &&
    height > maxHeight
  ) {
    return {
      width: maxHeight * aspectRadio,
      height: maxHeight,
    };
  }
  if (
    width <= maxWidth &&
    maxHeight * aspectRadio > maxWidth &&
    height > maxHeight
  ) {
    return {
      width: maxWidth,
      height: maxWidth / aspectRadio,
    };
  }

  // WIDTH MAYOR y HEIGHT MENOR, que el máximo
  if (
    width > maxWidth &&
    maxWidth / aspectRadio <= maxHeight &&
    height <= maxHeight
  ) {
    return {
      width: maxWidth,
      height: maxWidth / aspectRadio,
    };
  }
  if (
    width > maxWidth &&
    maxWidth / aspectRadio > maxHeight &&
    height <= maxHeight
  ) {
    return {
      width: maxHeight * aspectRadio,
      height: maxHeight,
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
      width: maxWidth,
      height: maxWidth / aspectRadio,
    };
  }
  if (
    width > maxWidth &&
    height > maxHeight &&
    width > height &&
    maxWidth / aspectRadio > maxHeight
  ) {
    return {
      width: maxHeight * aspectRadio,
      height: maxHeight,
    };
  }
  if (width > maxWidth && height > maxHeight && width < height) {
    return {
      width: maxHeight * aspectRadio,
      height: maxHeight,
    };
  }
  if (width > maxWidth && height > maxHeight && width == height) {
    return {
      width: maxHeight * aspectRadio,
      height: maxHeight,
    };
  }

  // WIDTH MENOR y HEIGHT MENOR, que el máximo
  if (width <= maxWidth && height <= maxHeight) {
    return {
      width: width,
      height: height,
    };
  }
};
