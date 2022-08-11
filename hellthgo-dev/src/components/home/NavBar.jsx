import { useState } from "react";
import { Link } from "react-router-dom";
import { Blockie, ConnectButton, Button, Avatar } from "web3uikit";
import { useMoralis } from "react-moralis";
import "../../styles/Components.css";

const Navbar = ({ whattheme }) => {
  const { isUnauthenticated, isAuthenticated } = useMoralis();

  const { authenticate, Moralis, isAuthenticating, authError } = useMoralis();

  const handleCustomLogin = () => {
    authenticate({
      provider: "web3Auth",
      chainId: Moralis.Chains.ETH_ROPSTEN,
      theme: { whattheme },
      clientId:
        "BGDafUXZkoHOaZA_FHt8ybHoy_Uxw_sERsH-DFH_vDuj3fqNDec7Mi8GMBSqbnnPAHO91t9I_oXt3dHQLXosP6s",
    });
  };

  return (
    <div
      className="nav car fixed-top"
      style={{
        // display: "flex",

        // alignItems: "center",
        // width: "100vw",
        // flexDirection: "row",
        // justifyContent: "flex-end",

        // minHeight: "2vh",
        // height: "6vh",
        maxWidth: "100vw",

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
          height: "fit-content",
        }}
      >
        <div style={{}}>
          {isAuthenticated && (
            <Link to="/profile">
              <div
                style={{
                  width: "2px",
                  height: "2px",
                }}
              >
                <Avatar isRounded theme="image" />
              </div>
            </Link>
          )}
        </div>

        {isUnauthenticated && (
          <div
            className="signup-btn"
            style={{
              display: "flex",
              // "flex-direction": "row",
              position: "absolute",
              right: "3vw",
              top: "1vh",

              // "align-items": "center",
              // justifyContent: "flex-end",
              // height: "fit-content",
              // width: "1%",

              // justifyContent: "space-around",
            }}
          >
            <Link to="/signup">
              <Button
                id="test-button-primary"
                //  onClick={handleCustomLogin}
                text="SIGN UP"
                theme="primary"
                type="button"
                size="small"

                // color="green"
                // isFullWidth="true"
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};


export default Navbar;
