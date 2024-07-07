import styles from "./Display.module.css";
import PropTypes from "prop-types";

export default function Display(props) {
  let darkModeStyle = {
    backgroundColor: "black",
    color: "white",
    border: "1px solid #FF5F00",
    transition: "1s",
  };

  let lightModeStyle = {
    backgroundColor: "white",
    color: "black",
    border: "1px solid black",
    transition: "1s",
  };

  return (
    <>
      <input
        className={styles["display"]}
        style={props.mode === "light" ? lightModeStyle : darkModeStyle}
        type="text"
        id="display"
        value={props.displayValue}
        readOnly
      />
    </>
  );
}

Display.propTypes = {
  mode: PropTypes.string,
  displayValue: PropTypes.string,
};
