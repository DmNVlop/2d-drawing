import PropTypes from "prop-types";
import { useCustomURLHandler } from "../../helpers/location.hook";
import { useCountertopContext } from "../../context/ct-context";

function ButtonSquareJobs(props) {
  // const { inputData } = props;
  const {
    item = { selected: false },
    img,
    alt,
    title,
    className,
    cornerIndex,
  } = props.inputData;

  const { ATTRIB_SETTED } = useCustomURLHandler();

  const { countertops, getSelectedPieceValueCtx } = useCountertopContext();

  const cornerIndexReal = () => {
    if (cornerIndex == 2) return 3;
    if (cornerIndex == 3) return 2;
    return cornerIndex;
  };

  return (
    item && (
      <figure
        className={"button-square " + className}
        style={{
          opacity: item.selected ? 1 : 0.5,
          cursor: countertops[ATTRIB_SETTED]?.partsData[
            getSelectedPieceValueCtx()
          ]?.cornerRadiusDisabled[cornerIndexReal()]
            ? "not-allowed"
            : "pointer",
        }}
      >
        <img src={img} alt={alt} title={title} />
        <div
          className="on-disable"
          style={
            countertops[ATTRIB_SETTED]?.partsData[getSelectedPieceValueCtx()]
              ?.cornerRadiusDisabled[cornerIndexReal()]
              ? {
                  width: "92%",
                  height: "99%",
                  position: "absolute",
                  top: "2px",
                  left: "4px",
                  backgroundColor: "rgba(157, 142, 142, 0.5)",
                }
              : {}
          }
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
  }),
};

export default ButtonSquareJobs;
