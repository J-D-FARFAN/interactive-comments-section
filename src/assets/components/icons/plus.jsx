import PropTypes from "prop-types";

const IconPlus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    width="11"
    height="11"
  >
    <path
      fill="currentColor"
      d="M6.33 10.896q.206 0 .354-.149.15-.15.149-.354V7.004h3.315q.204 0 .354-.149a.48.48 0 0 0 .148-.354V5.272a.48.48 0 0 0-.148-.354.48.48 0 0 0-.354-.149H6.833V1.4a.48.48 0 0 0-.149-.354.48.48 0 0 0-.354-.149H4.915a.48.48 0 0 0-.354.149q-.15.15-.149.354v3.37H1.08a.48.48 0 0 0-.354.15.48.48 0 0 0-.149.353v1.23q0 .204.149.353.15.15.354.149h3.333v3.39q0 .204.15.353.147.15.353.149z"
    ></path>
  </svg>
);

IconPlus.propTypes = {
  className: PropTypes.string, // Validación de tipo de prop
};

export default IconPlus;
