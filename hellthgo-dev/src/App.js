import "../src/index.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Test from "./pages/Test";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Login from "./pages/Login";
import { Paper } from "@mui/material";
import { useState } from "react";
import { Button } from "web3uikit";



function App() {
  const [themes, setThemes] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: themes,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{ height: "200%" }} elevation={3}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products" element={<Products />} />
          <Route path="/test" element={<Test />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <div
          className="fixed-top"
          style={{
            display: "flex",
            width: "fit-content",
            height: "fit-content",
          }}
        >
          <Button
            onClick={() => {
              themes === "dark"
                ? setThemes("light")
                : themes === "light" && setThemes("dark");

              // themes == "dark" ? setThemes("light") : setThemes("dark");
            }}
            text={
              themes === "dark" ? "Turn on the light" : "Turn off the lights"
            }
          />
        </div>
      </Paper>
      <div style={{ width: "100vw" }}>
        <Test />
      </div>
    </ThemeProvider>
  );
}

export default App;
