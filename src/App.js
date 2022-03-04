import "./App.css";
import { useState } from "react";
import Destinations from "./components/Destinations";
import Result from "./components/Result";
import { Routes, Route, Navigate } from "react-router-dom";
import Info from "./components/Info"

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7b1fa2"
    },
  },
});

function App() {
  const [final, setFinal] = useState({
    body: "",
    time: 0,
  });
  const [auth, setAuth] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Destinations setFinal={setFinal} setAuth={setAuth} />}
          />
          {auth && <Route path="/result" element={<Result final={final} />} />}
          <Route path="/info" element={<Info />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
