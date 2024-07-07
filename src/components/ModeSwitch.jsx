import PropTypes from "prop-types";

export default function ModeSwitch(props) {
  return (
    <div
      className="form-check form-switch float-end mt-1 mb-3"
      onClick={() => props.handleModeEvent()}
    >
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
      />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
        Enable {props.mode === "light" ? "Dark" : "Light"} mode
      </label>
    </div>
  );
}

ModeSwitch.propTypes = {
  handleModeEvent: PropTypes.func,
  mode: PropTypes.string,
};
