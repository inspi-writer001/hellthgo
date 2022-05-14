import { useMoralis, useNewMoralisObject } from "react-moralis";
import React from "react";
import { Button } from "web3uikit";
import Navbar from "../components/home/NavBar";
import "../styles/Signup.css";
import { useState } from "react";
import Test from "./Test";
const Profile = () => {
  const { save } = useNewMoralisObject("username");
  const { user, isAuthenticated, logout } = useMoralis();
  const [ussername, setUsername] = useState();
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
      <div style={{ display: "flex" }}>
        <div className="profile" style={{ width: "90vw", height: "80vh" }}>
          <div style={{ display: "inline - block" }} className="icon">
            Seedd
          </div>
          {/* <button className="icon" text="Seed" /> */}
          <div style={{ display: "inline - block" }} className="icon">
            Seedd
          </div>
          <div style={{ display: "inline - block" }} className="icon">
            Seedd
          </div>
          <div style={{ display: "inline - block" }} className="icon">
            Seedd
          </div>
          <div style={{ display: "inline - block" }} className="icon">
            Seedd
          </div>
          <Button text="Logout" onClick={logout} />
        </div>
      </div>
      <div className="username">
        {isAuthenticated && user.get("username")} Book
      </div>
      <div>
        <input
          placeholder="change username"
          type={ussername}
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
        <Button
          text="change username"
          onClick={() => {
            save(
              { "_User.username": ussername },
              {
                onSuccess: (monster) => {
                  // Execute any logic that should take place after the object is saved.
                  alert("New object created with objectId: " + monster.id);
                },
                onError: (error) => {
                  // Execute any logic that should take place if the save fails.
                  // error is a Moralis.Error with an error code and message.
                  alert(
                    "Failed to create new object, with error code: " +
                      error.message
                  );
                },
              }
            );
          }}
        />
      </div>
      <Navbar />
    </div>
  );
};

export default Profile;
