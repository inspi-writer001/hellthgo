import NavBar from "./home/NavBar";
import FadeSlide from "./home/FadeSlide";
import Body from "./home/Body";
import Services from "./home/Services";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { BannerStrip } from "web3uikit";
import Test from "../pages/Test";

const Home = () => {
  const { isAuthenticated } = useMoralis();
  const material = useEffect(() => {
    <div
      style={{
        height: "60px",
        transform: "scale(1)",
      }}
    >
      <BannerStrip text="Looking good" type="success" />
    </div>;
  }, [isAuthenticated]);

  return (
    <div
      style={{
        display: "flex",
        "flex-direction": "column",
        // backgroundColor: "#121212",
      }}
    >
      {/* <Test /> */}
      <NavBar />
      <FadeSlide />
      <Body />
      <Services />
    </div>
  );
};

export default Home;
