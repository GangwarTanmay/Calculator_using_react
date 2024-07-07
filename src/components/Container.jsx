import styles from "./Container.module.css";
import PropTypes from "prop-types";

export default function Container(props) {
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

  return (
    <div
      className={`${styles["container"]} shadow`}
      style={props.mode === "light" ? lightModeStyle : darkModeStyle}
    >
      {props.children}
    </div>
  );
}

Container.propTypes = {
  mode: PropTypes.string,
  children: PropTypes.any,
};
