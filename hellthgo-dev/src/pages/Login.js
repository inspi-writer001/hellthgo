import React from "react";
import { useMoralis } from "react-moralis";
import { useState } from "react";
import { Button } from "web3uikit";

const Login = ({ whattheme }) => {
  const { authenticate, Moralis, isAuthenticating, authError, logout } =
    useMoralis();

  const handleCustomLogin = () => {
    authenticate({
      provider: "web3Auth",
      chainId: Moralis.Chains.POLYGON_MUMBAI,
      theme: { whattheme },
      clientId:
        "BGDafUXZkoHOaZA_FHt8ybHoy_Uxw_sERsH-DFH_vDuj3fqNDec7Mi8GMBSqbnnPAHO91t9I_oXt3dHQLXosP6s",
    });
  };
  return (
    <div style={{ zIndex: 2 }}>
      <div className="" style={{ zIndex: "100" }}>
        <Button text="Login options" onClick={handleCustomLogin} />

        <Button text="logout" onClick={logout} />
      </div>
    </div>
  );
};

export default Login;
