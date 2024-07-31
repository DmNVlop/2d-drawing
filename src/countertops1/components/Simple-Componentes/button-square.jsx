import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { useCustomURLHandler } from "../../helpers/location.hook";

function ButtonSquare(props) {
  const { item, url, img, alt, title, className } = props.inputData;
  const { ATTRIB_SETTED } = useCustomURLHandler();
  return (
    <>
      <Link
        to={url}
        className={"button-square " + className}
        style={
          item?.type === ATTRIB_SETTED
            ? { borderColor: "#7962ad" }
            : { borderColor: "#dbdbdb" }
        }
      >
        <img src={img} alt={alt} title={title} />
      </Link>
    </>
  );
}

ButtonSquare.propTypes = {
  inputData: PropTypes.shape({
    item: PropTypes.shape({}),
    url: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    img: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
  }),
};

export default ButtonSquare;
