import React, { useState } from "react";
import "./index.css";
import { useThemeStore } from "../../../../entities";

export const SwitchComponent = () => {
  const handleGog = () => {
    const gog = "";
  };
  const { currentTheme, currentThemeIndex, cycleThemes, getCurrentTheme } =
    useThemeStore();

  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch_input"
        onChange={handleGog}
        checked={currentThemeIndex === 1}
        onClick={cycleThemes}
      />
      <span className="switch_slider"></span>
    </label>
  );
};
