// import React, { useState } from "react";
// import "./App.css";
// import Main from "./containers/Main";
// import { ThemeProvider } from "styled-components";
// import { blueTheme, chosenTheme, nightThemeeee } from "./theme";
// import { GlobalStyles } from "./global";
// import ThemeBtn from "./ThemeBtn";
// // import {moon as component} from "./assets/images/Moon.svg"
// // import {sun  as component} from "./assets/images/Sun.svg"

// function App() {
//   const [isDarkTheme , setIsDarkTheme] = useState(true)
//   const [currentTheme, setCurrentTheme] = useState(blueTheme)

//   function toggle (e){
//     console.log(e.target.checked)
//     setIsDarkTheme(!isDarkTheme);
//     setCurrentTheme(isDarkTheme ? blueTheme : nightThemeeee)
//   }

//   return (
//     <ThemeProvider theme={currentTheme}>
//       <>
//         <GlobalStyles />
//         <div>
//           <div className="themeBtn">
//             <div onClick={toggle}>
//               <ThemeBtn onClick={toggle}/>
//             </div>
//           </div>
//           <Main theme={currentTheme} />
//         </div>
//       </>
//     </ThemeProvider>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { blueTheme, nightThemeeee } from "./theme";
import { GlobalStyles } from "./global";
import ThemeBtn from "./ThemeBtn";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true); // Default to blueTheme
  const [currentTheme, setCurrentTheme] = useState(nightThemeeee); // Default theme

  function toggle(e) {
    console.log(e.target.checked);
    if (e.target.checked === true) {
      setCurrentTheme(nightThemeeee);
    }
    if (e.target.checked === false) {
      setCurrentTheme(blueTheme);
    }
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <>
        <GlobalStyles />
        <div>
          <div className="themeBtn">
            <div onClick={toggle}>
              <ThemeBtn onClick={toggle} />
            </div>
          </div>
          <Main theme={currentTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
