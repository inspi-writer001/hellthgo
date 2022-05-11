import { useState } from "react";
import { Link } from "react-router-dom";
import { Blockie, ConnectButton, Button, Avatar } from "web3uikit";
import { useMoralis } from "react-moralis";

const Navbar = () => {
  const { isUnauthenticated, isAuthenticated } = useMoralis();

  return (
    <div
      className="nav fixed-top"
      style={{
        display: "flex",
        "flex-direction": "row",
        minHeight: "fit-content",
        "backdrop-filter": "blur(5px) saturate(200%)",
        "-webkit-backdrop-filter": "blur(5px) saturate(200%)",
        "background-color": "rgba(255, 255, 255, 0.45)",
        // "border-radius": "12px",
        border: "1px solid rgba(209, 213, 219, 0.3)",
      }}
    >
      <div
        style={{
          display: "flex",
          "flex-direction": "row",
          alignItems: "flex-end",
        }}
      >
        {/* <div>
          <Link to="/">
            <Button
              id="test-button-primary"
              text="HellthGo"
              // type="button"
              // theme="primary"
              size="small"
              radius={"20%"}
            />
          </Link>
        </div> */}
        {/* <div
          style={{
            display: "flex",
            width: "20%",
            size: 10,
          }}
        >
          <ConnectButton
            signingMessage={` HellthGo Authentication \nWe'd like you to give access to display your balances here in HellthGo.`}
          />
        </div> */}
        <div>
          {isAuthenticated && (
            <Link to="/profile">
              <Avatar isRounded theme="image" />
            </Link>
          )}
        </div>
        <div
          style={{
            display: "flex",
            "flex-direction": "row",
            "align-items": "flex-end",
          }}
        >
          {isUnauthenticated && (
            <div
              style={{
                display: "flex",
                "flex-direction": "row",
                "align-items": "flex-end",

                justifyContent: "space-around",
              }}
            >
              <Link to="/signup">
                <Button
                  id="test-button-primary"
                  // onClick={function noRefCheck() {}}
                  text="SIGN UP"
                  theme="primary"
                  type="button"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
