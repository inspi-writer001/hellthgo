import "../src/index.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Test from "./pages/Test";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import Stage from "./Stage";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Login from "./pages/Login";
import { Paper } from "@mui/material";
import { useState } from "react";
import { Button } from "web3uikit";
import Wallet from "./pages/Wallet";

function App() {
  const [themes, setThemes] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: themes,
    },
  });

  const lightbg = {
    // "background-color": "#38ae58",
    // "background-image":
    //   "radial-gradient(circle at 47% 33%, hsl(191.57, 71%, 46%) 0, transparent 59%), radial-gradient(circle at 82% 65%, hsl(57.80, 81%, 54%) 0, transparent 55%)",
    background: "#96cddd",

    // "background-color": "#50E3C2",
    // "background-image":
    //   "radial-gradient(circle at at 47% 33%, hsl(162.00, 77%, 40%) 0, transparent 59%),radial-gradient(circle at 82% 65%, hsl(198.00, 100%, 50%) 0, transparent 55)",

    display: "flex",
    height: "120vh",
  };

  const darkbg = {
    // "background-color": "#111927",
    // "background-image":
    //   "radial-gradient(circle at 87% 40%, hsl(162.00, 77%, 40%) 0, transparent 59%), radial-gradient(at 82% 65%, hsl(218.00, 39%, 11%) 0, transparent 55%)",
    background: "#122333",
    display: "flex",
    height: "120vh",
  };

  const stt = themes === "dark" ? darkbg : lightbg;
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{ height: "fit-content" }} elevation={3}>
        <div
          // style={{ background: themes, display: "flex", height: "100vh" }}
          style={stt}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signin />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/products" element={<Products />} />
            <Route path="/test" element={<Test />} />
            <Route path="/stage" element={<Stage />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
          <div
            // className="stage"
            style={{
              position: "fixed",
              display: "flex",
              // width: "90%",
              height: "120vh",
              width: "100vw",
              maxHeight: "120vh",
              justifyContent: "center",
              zIndex: "0",
            }}
          >
            <Stage />
          </div>
          <div
            className="fixed-top"
            style={{
              display: "flex",
              position: "fixed",
              top: "1vh",
              left: "2vw",
              width: "0.5px",
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
              text={themes === "dark" ? "" : ""}
              theme={themes === "dark" ? "translucent" : "secondary"}
              icon={themes === "dark" ? "eye" : "eyeClosed"}
              size="small"
              // isFullWidth="true"
              // color="blue"
            />
          </div>
        </div>
      </Paper>
      <div style={{ width: "120vh" }}>
        <Test />
      </div>
    </ThemeProvider>
  );
}

// export const stt = App.themes === "dark" ? App.lightbg : App.darkbg;

export default App;
