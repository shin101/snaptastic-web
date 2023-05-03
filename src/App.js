import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import { useState } from "react";
import { useReactiveVar } from "@apollo/client";
import { darkModeVar, isLoggedInVar } from "./apollo";
import { ThemeProvider } from "styled-components";

const lightTheme = {
  fontColor: "#2c2c2c",
  bgColor: "lightgray",
};

const darkTheme = {
  fontColor: "white",
  bgColor: "#2c2c2c",
};

function App() {
  // use header (apollo useReactiveVar) instead of passing down isLoggedIn props per page
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <div>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <BrowserRouter>
          <Routes>
              <Route exact path="/" /> 

              <Route exact path="/login" element={<Login/>} />
              <Route exact path="*" element={<NotFound/>} />
              {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
        </BrowserRouter>
        {isLoggedIn? <Home /> : <Login />}
      </ThemeProvider>
    </div>
    );
}

export default App;
