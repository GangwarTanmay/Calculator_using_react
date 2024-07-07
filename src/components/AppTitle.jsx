import PropTypes from "prop-types";

export default function AppTitle(props) {
  let darkModeStyle = {
    color: "orange",
    transition: "1s",
  };

  let lightModeStyle = {
    color: "black",
    transition: "1s",
  };

  return (
    <h2
      style={props.mode === "light" ? lightModeStyle : darkModeStyle}
      className="text-center mt-4 mb-4"
    >
      Calculator
    </h2>
  );
}

AppTitle.propTypes = {
  mode: PropTypes.string,
};
