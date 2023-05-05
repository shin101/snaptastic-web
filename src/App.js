import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import { useReactiveVar } from "@apollo/client";
import { darkModeVar, isLoggedInVar } from "./apollo";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "./styles";
import SignUp from "./screens/SignUp";
import routes from "./screens/routes";


function App() {
  // use header (apollo useReactiveVar) instead of passing down isLoggedIn props per page
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <GlobalStyles />
            <Routes>
                <Route exact path={routes.home} element={isLoggedIn? <Home /> : <Login />} /> 
                <Route exact path="/login" element={<Login/>} />
                  {!isLoggedIn && <Route exact path="/sign-up" element={<SignUp/>} /> }
                <Route exact path="*" element={<NotFound/>} />
                {/* Alternatively, useRoute path="*" element={<Navigate to="/" />} /> */}
            </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
    );
    
}

export default App;
