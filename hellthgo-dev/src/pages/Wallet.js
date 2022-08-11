import React from "react";
import { NativeBalance } from "web3uikit";
import { useMoralis } from "react-moralis";

const Wallet = () => {
  const { isAuthenticated } = useMoralis();

  return (
    <div style={{ zIndex: 2 }}>
      {isAuthenticated ? (
        <div
          className="wallet-bg"
          style={{
            display: "flex",
            width: "100vw",
            height: "100vh",
            "backdrop-filter": "blur(17px) saturate(180%)",
            "-webkit-backdrop-filter": "blur(17px) saturate(180%)",
            "background-color": " rgba(255, 255, 255, 0.22)",
          }}
        >
          <div
            style={{
              "background-color": "white",
              padding: "1.5em",
              width: "500px",
              "border-radius": "1em",
              "overflow-x": "auto",
            }}
          >
            <div style={{ "font-color": "black" }}>
              Awesome, Here's your wallet
            </div>
            <div className="walletBody">{/* <NativeBalance /> */}</div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Wallet;
