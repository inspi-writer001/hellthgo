import NavBar from "./home/NavBar";
import FadeSlide from "./home/FadeSlide";
import Body from "./home/Body";
import Services from "./home/Services";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import "../styles/Components.css";
import Socials from "./Socials";

import rocket from "../assets/bbg.png";
import { Paper } from "@mui/material";

const Home = () => {
  const { isAuthenticated, logout } = useMoralis();

  useEffect(() => logout, []);

  // useEffect(() => {
  //   setTimeout(() => logout, 6000);
  // });

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
          className="mother-div"
          style={{
            display: "flex",
            width: "90vw",
            maxWidth: "90vw",
            maxHeight: "84vh",
            marginLeft: "10vw",
            marginTop: "12%",
            // alignItems: "center",
            justifyContent: "center",
            // height: "30vh",
            // marginTop: "50vh",
            // padding: "2%",
            flexDirection: "column",
          }}
        >
          <div
            className=""
            style={{
              display: "flex",
              // alignItems: "center",
              // justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                "max-width": "200px",
                zIndex: "9",
              }}
            >
              <FadeSlide />
            </div>
          </div>
          <div
            className="those-two"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "80vw",
              marginTop: "5%",
            }}
          >
            <div
              className=""
              style={{
                width: "49%",
                height: "calc(width - 10)",
                // "max-height": "40vh",
                "min-height": "20vh",
                alignItems: "center",
                // justifyContent: "space-around",

                "backdrop-filter": "blur(17px) saturate(180%)",
                "-webkit-backdrop-filter": "blur(17px) saturate(180%)",
                "background-color": " rgba(255, 255, 255, 0.009)",
                "border-radius": "12px",
                // background: "#5c925c",
                border: "1px solid rgba(209, 213, 219, 0.3)",
              }}
            ></div>
            <div
              className=""
              style={{
                width: "49%",
                height: "calc(width - 10)",
                // "max-height": "40vh",
                "min-height": "20vh",
                alignItems: "center",
                justifyContent: "space-around",
                display: "flex",
                flexDirection: "column",

                "backdrop-filter": "blur(17px) saturate(180%)",
                "-webkit-backdrop-filter": "blur(17px) saturate(180%)",
                "background-color": " rgba(255, 255, 255, 0.009)",
                "border-radius": "12px",
                border: "1px solid rgba(209, 213, 219, 0.3)",
              }}
            ></div>
          </div>
          <div
            className="socials"
            style={{
              display: "flex",
              justifyContents: "center",
              alignItems: "center",
              maxWidth: "80vw",
              // width: "100%",
            }}
          >
            <Socials />
          </div>
        </div>

        {/* <div
          className="rocket"
          style={{
            display: "flex",
            // width: "50vw",
            zIndex: "1",

            height: "100%",
            margin: "50 0 50 0",
          }}
        >
          <img
            className="rocket"
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
        </div> */}
      </div>
      {/* <Body />
      <Services /> */}
    </div>
  );
};;

export default Home;
