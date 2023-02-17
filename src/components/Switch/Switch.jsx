import React from "react";
import {
  ThemeInput,
  ThemeToggleContainer,
  ThemeToggleItemContainer,
} from "../../styles/theme";
import { ThemeLabel } from "../../styles/theme";
// import "./Switch.css";

function Switch(props) {
  const { toggleTheme, theme } = props;

  return (
    <ThemeToggleContainer>
      <ThemeToggleItemContainer>
        <ThemeInput
          type="radio"
          id="light"
          name="theme"
          value="light"
          onChange={toggleTheme}
          checked={theme === "light"}
        />
        <ThemeLabel>light</ThemeLabel>
      </ThemeToggleItemContainer>

      <ThemeToggleItemContainer>
        <ThemeInput
          type="radio"
          id="dark"
          name="theme"
          value="dark"
          onChange={toggleTheme}
          checked={theme === "dark"}
        />
        <ThemeLabel>dark</ThemeLabel>
      </ThemeToggleItemContainer>
    </ThemeToggleContainer>
  );
}
export default Switch;
