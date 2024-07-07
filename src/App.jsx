import "bootstrap/dist/css/bootstrap.min.css";
import AppTitle from "./components/AppTitle";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import ModeSwitch from "./components/ModeSwitch";
import Container from "./components/Container";
import { useState } from "react";

function App() {
  let handleModeEvent = () => {
    if (mode === "light") setMode("dark");
    else setMode("light");
  };

  let handleClickEvent = (evt) => {
    if (evt.target.innerText === "=") {
      let result = eval(displayValue); //eval takes mathematical expression as an input in string form and evaluates it
      setDisplayValue(result);
    } else if (evt.target.innerText === "C") {
      displayValue = "";
      setDisplayValue(displayValue);
    } else {
      displayValue = displayValue + evt.target.innerText;
      setDisplayValue(displayValue);
    }
  };

  let [mode, setMode] = useState("light");
  let [displayValue, setDisplayValue] = useState("");

  return (
    <>
      <AppTitle mode={mode}></AppTitle>
      <Container mode={mode}>
        <ModeSwitch handleModeEvent={handleModeEvent} mode={mode}></ModeSwitch>
        <Display mode={mode} displayValue={displayValue}></Display>
        <ButtonsContainer
          mode={mode}
          handleClickEvent={handleClickEvent}
        ></ButtonsContainer>
      </Container>
    </>
  );
}

export default App;
