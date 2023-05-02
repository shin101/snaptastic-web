import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import { useState } from "react";
import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "./apollo";

function App() {
  // use header (apollo useReactiveVar) instead of passing down isLoggedIn props per page
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route exact path="/" /> 

            <Route exact path="/login" element={<Login/>} />
            <Route exact path="*" element={<NotFound/>} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </BrowserRouter>
      {isLoggedIn? <Home /> : <Login />}

    </div>
    );
}

export default App;
