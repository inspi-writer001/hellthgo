import React from "react";
import { useMoralis } from "react-moralis";
import { useState } from "react";
import { Button } from "web3uikit";

const Login = ({ whattheme }) => {
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
    <div>
      SARDINES ARE THE BEST
      <div className="">
        <Button text="Login options" onClick={handleCustomLogin} />
      </div>
    </div>
  );
};

export default Login;
