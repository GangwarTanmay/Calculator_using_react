import styles from "./Buttons.module.css";
import PropTypes from "prop-types";

export default function Buttons(props) {
  let darkModeStyle = {
    backgroundColor: "#2F3645",
    color: "#FF5F00",
    transition: "1s",
    border: "none",
  };

  let lightModeStyle = {
    backgroundColor: "#EEEDEB",
    color: "black",
    transition: "1s",
    border: "none",
  };

  let specialButtons = ["C", "%", "(", ")", "+", "-", "*", "="];

  if (specialButtons.includes(props.value)) {
    darkModeStyle.backgroundColor = "#FF5F00";
    darkModeStyle.color = "white";
    lightModeStyle.backgroundColor = "#FF5F00";
    lightModeStyle.color = "white";
    lightModeStyle.border = "none";
  }
  return (
    <button
      className={`${styles["button"]}`}
      style={props.mode === "light" ? lightModeStyle : darkModeStyle}
      onClick={(evt) => props.handleClickEvent(evt)}
    >
      {props.value}
    </button>
  );
}

Buttons.propTypes = {
  value: PropTypes.string,
  mode: PropTypes.string,
  handleClickEvent: PropTypes.func,
};
