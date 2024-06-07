import "./button-square.css";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";

function ButtonSquare(props) {
  return (
    <>
      <Link
        to={props?.inputData?.url}
        className={"button-square " + props?.inputData?.className}
      >
        <img
          src={props?.inputData?.img}
          alt={props?.inputData?.alt}
          title={props?.inputData?.title}
        />
      </Link>
    </>
  );
}

ButtonSquare.propTypes = {
  inputData: PropTypes.shape({
    url: PropTypes.string,
    img: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
  }),
};

export default ButtonSquare;
