import "./button-square.css";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";

function ButtonSquare(props) {
  // const { inputData } = props;
  const { url, img, alt, title, className } = props.inputData;
  return (
    <>
      <Link to={url} className={"button-square " + className}>
        <img src={img} alt={alt} title={title} />
      </Link>
    </>
  );
}

ButtonSquare.propTypes = {
  inputData: PropTypes.shape({
    url: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    img: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
  }),
};

export default ButtonSquare;
