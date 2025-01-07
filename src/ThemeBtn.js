import React from "react";
import "./ThemeBtn.css";

function ThemeBtn() {
  return (
    <div>
      <label for="checkbox" class="toggler">
        <input type="checkbox" id="checkbox" defaultChecked />
        <span class="ball"></span>
        <span class="background day"></span>
        <span class="background night"></span>
        <i class="ri-sun-line sun"></i>
        <i class="ri-moon-line moon"></i>
      </label>
    </div>
  );
}

export default ThemeBtn;
