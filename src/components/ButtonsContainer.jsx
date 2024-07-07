import styles from "./ButtonsContainer.module.css";
import Buttons from "./Buttons";
import PropTypes from "prop-types";

export default function ButtonsContainer(props) {
  let darkModeStyle = {
    backgroundColor: "black",
    color: "white",
    transition: "1s",
  };

  let lightModeStyle = {
    backgroundColor: "white",
    color: "black",
    transition: "1s",
  };

  let buttonValues = [
    "C",
    "%",
    "(",
    ")",
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "0",
    ".",
    "/",
    "=",
  ];

  return (
    <div
      className={styles["buttons-container"]}
      style={props.mode === "light" ? lightModeStyle : darkModeStyle}
    >
      {buttonValues.map((buttonValue) => (
        <Buttons
          mode={props.mode}
          handleClickEvent={props.handleClickEvent}
          key={buttonValue}
          value={buttonValue}
        ></Buttons>
      ))}
      <h6 className={styles["author-name"]}>
        <i>-Designed by Tanmay</i>
      </h6>
    </div>
  );
}

ButtonsContainer.propTypes = {
  mode: PropTypes.string,
  handleClickEvent: PropTypes.func,
};
