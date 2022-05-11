import { useMoralis } from "react-moralis";
import React from "react";
import { Button } from "web3uikit";
import Navbar from "../components/home/NavBar";
import "../styles/Signup.css";
import Test from "./Test";
const Profile = () => {
  const { user, isAuthenticated } = useMoralis();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "flex-direction": "column",
        width: "100vw",
        // backgroundColor: "grey",
      }}
    >
      <Test />

      <div className="profile" style={{ width: "90vw", height: "80vh" }}>
        <div className="icon">Seedd</div>
        {/* <button className="icon" text="Seed" /> */}
        <div className="icon">Seedd</div>
        <div className="icon">Seedd</div>
        <div className="icon">Seedd</div>
        <div className="icon">Seedd</div>
      </div>
      <div className="username">
        {isAuthenticated && user.get("accounts")} Book
      </div>
      <Navbar />
    </div>
  );
};

export default Profile;
