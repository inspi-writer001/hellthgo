import NavBar from "./home/NavBar";
import FadeSlide from "./home/FadeSlide";
import Body from "./home/Body";
import Services from "./home/Services";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { BannerStrip } from "web3uikit";
import Test from "../pages/Test";
import rocket from "../assets/bbg.png";
import { Paper } from "@mui/material";

const Home = () => {
  const { isAuthenticated } = useMoralis();

  return (
    <div
      style={{
        display: "flex",
        "flex-direction": "row",
        // height: "fit-content",
        // backgroundColor: "#121212",
      }}
    >
      <NavBar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            justifyContent: "space-around",
            display: "flex",
            "max-width": "500",
            zIndex: "9",
            left: "10vw",
            top: "20vh",
            position: "absolute",
            // alignItems: "center",
            // justifyContent: "center",
            margin: "0 100 0 0 ",
          }}
        >
          <FadeSlide />
        </div>

        <div
          style={{
            display: "flex",
            // width: "50vw",
            zIndex: "1",

            height: "100%",
            margin: "50 0 50 0",
          }}
        >
          <img
            style={{
              // width: "70%",
              // height: "calc(width - 10)",
              transform: "scaleX(-1)",
              position: "fixed",
              left: "30vw",
              margin: "50 0 0 10",
              "align-items": "center",
              "justify-content": "center",
            }}
            src={rocket}
            alt="Blast off"
          />
        </div>
      </div>
      {/* <Body />
      <Services /> */}
    </div>
  );
};

export default Home;
