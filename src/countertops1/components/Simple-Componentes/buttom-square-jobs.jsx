import PropTypes from "prop-types";
import { useCustomURLHandler } from "../../helpers/location.hook";
import { useCountertopContext } from "../../context/ct-context";
import { WORKS_TYPES } from "../../mocks/WORKS.types";

function ButtonSquareJobs(props) {
  // const { inputData } = props;
  const {
    item = { selected: false },
    img,
    alt,
    title,
    className,
    cornerIndex,
    worksCorners,
  } = props.inputData;

  const { ATTRIB_SETTED } = useCustomURLHandler();

  const { countertops, getSelectedPieceValueCtx } = useCountertopContext();

  const pieceSelected =
    countertops[ATTRIB_SETTED]?.partsData[getSelectedPieceValueCtx()];

  const cornerIndexReal = () => {
    if (!pieceSelected) return;

    // if (pieceSelected.rotation == 0) {
    //   return cornerIndex === 2 ? 3 : cornerIndex === 3 ? 2 : cornerIndex;
    // }
    // if (pieceSelected.rotation == 90) {
    //   return cornerIndex === 1
    //     ? 4
    //     : cornerIndex === 2
    //     ? 1
    //     : cornerIndex === 3
    //     ? 2
    //     : cornerIndex === 4
    //     ? 3
    //     : cornerIndex;
    // }
    // if (pieceSelected.rotation == -90) {
    //   return cornerIndex === 1
    //     ? 2
    //     : cornerIndex === 2
    //     ? 3
    //     : cornerIndex === 3
    //     ? 4
    //     : cornerIndex === 4
    //     ? 1
    //     : cornerIndex;
    // }

    return cornerIndex === 2 ? 3 : cornerIndex === 3 ? 2 : cornerIndex;
  };

  const handleStylesOnButtonsCorner = () => {
    if (
      !worksCorners ||
      worksCorners <= 0 ||
      item.code === "ccred4lados-clear"
    ) {
      return { style: {}, cursor: "pointer" };
    }

    const bloquedStyle = {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: "0",
      left: "0",
      backgroundColor: "rgba(157, 142, 142, 0.5)",
    };

    const isCornerRadiusDisabled = (index) =>
      pieceSelected?.cornerRadiusDisabled[index];

    if (
      item.type === WORKS_TYPES.CCRED4LADOS &&
      [0, 1, 2, 3].some(isCornerRadiusDisabled)
    ) {
      return { style: bloquedStyle, cursor: "not-allowed" };
    }

    if (item.type === WORKS_TYPES.CCRED2LADOS) {
      const cornerIndex = cornerIndexReal();
      if (
        ([0, 3].includes(cornerIndex) &&
          (isCornerRadiusDisabled(0) || isCornerRadiusDisabled(3))) ||
        ([1, 2].includes(cornerIndex) &&
          (isCornerRadiusDisabled(1) || isCornerRadiusDisabled(2)))
      ) {
        return { style: bloquedStyle, cursor: "not-allowed" };
      }
    }

    return isCornerRadiusDisabled(cornerIndexReal())
      ? { style: bloquedStyle, cursor: "not-allowed" }
      : { style: {}, cursor: "pointer" };
  };

  return (
    item && (
      <figure
        className={"button-square " + className}
        style={{
          opacity: item.selected ? 1 : 0.5,
          cursor: handleStylesOnButtonsCorner().cursor,
        }}
      >
        <img src={img} alt={alt} title={title} />

        <div
          className="on-disable"
          style={handleStylesOnButtonsCorner().style}
        ></div>
      </figure>
    )
  );
}

ButtonSquareJobs.propTypes = {
  inputData: PropTypes.shape({
    // url: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    // url: PropTypes.func,
    item: PropTypes.object,
    cornerIndex: PropTypes.number,
    img: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
    worksCorners: PropTypes.array,
  }),
};

export default ButtonSquareJobs;
