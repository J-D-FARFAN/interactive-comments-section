import PropTypes from "prop-types";

const IconMinus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="3"
    className={props.className}
  >
    <path
      fill="currentColor"
      d="M9.256 2.66q.306 0 .53-.167.222-.166.222-.396V.722q0-.228-.223-.395a.86.86 0 0 0-.53-.167H.76a.86.86 0 0 0-.53.167Q.01.493.009.722v1.375q0 .23.223.396a.86.86 0 0 0 .53.167z"
    ></path>
  </svg>
);

IconMinus.propTypes = {
  className: PropTypes.string, // Validación de tipo de prop
};

export default IconMinus;
