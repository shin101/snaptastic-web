import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/login" exact element={<Login/>} />
            <Route path="*" element={<NotFound/>} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
    );
}

export default App;
