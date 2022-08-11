import {
  useMoralis,
  useMoralisQuery,
  useMoralisWeb3Api,
  useMoralisWeb3ApiCall,
} from "react-moralis";
import React from "react";
import { Button } from "web3uikit";
import Navbar from "../components/home/NavBar";
import "../styles/Signup.css";
import { useState, useEffect } from "react";
import Test from "./Test";

// const UserDetails = async () => {
//   const { user, isAuthenticated, logout, Moralis } = useMoralis();
//   let username = "Please Login";
//   let ethaddress = "Are you logged in ?";

//   // isAuthenticated && {
//   //   username = await user.get("username");
//   //   ethaddress = await user.get("ethAddress")
//   // }

//   return username, ethaddress;
// };

const Profile = async () => {
  // const { save } = useNewMoralisObject("username");
  // const UserDetailers = useEffect(

  //   const { fetch, data, error, isLoading } = useMoralisWeb3ApiCall(
  //     Web3Api.account.getTokenBalances,
  //     {
  //       chain: "ropsten",
  //     }

  // , []);

  const [ussername, setUsername] = useState("enter username");
  const { user, isAuthenticated, logout, Moralis } = useMoralis();
  const Web3Api = useMoralisWeb3Api();

  await logout();

  const balances = fetch();

  // const { fetch } = useMoralisQuery({
  //   "EthTransactions",
  //   (query) =>

  // })

  // const userDetails = () => {
  //   isAuthenticated && user.get("email", "username", "ethAddress");
  // };
  return (
    isAuthenticated && (
      <div
        style={{
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          "flex-direction": "column",
          width: "100%",
          // backgroundColor: "grey",
        }}
      >
        <Test />
        <div style={{ display: "flex" }}>
          <div
            className="profile"
            style={{ width: "90vw", height: "80vh", marginTop: "7vh" }}
          >
            <div
              style={{ display: "flex", "max-width": "100%" }}
              className="icon"
            >
              <h5>Full name</h5>
              <p>{user.get("username")}</p>
            </div>
            {/* <button className="icon" text="Seed" /> */}
            <div
              style={{ display: "flex", "max-width": "100%" }}
              className="icon"
            >
              {balances}
            </div>
            <div
              style={{ display: "flex", "max-width": "100%" }}
              className="icon"
            >
              Seedd
            </div>
            <div
              style={{ display: "flex", "max-width": "100%" }}
              className="icon"
            >
              Seedd
            </div>
            <div
              style={{ display: "flex", "max-width": "100%" }}
              className="icon"
            >
              Seedd
            </div>
            <Button text="Logout" onClick={logout} />
          </div>
        </div>
        <div className="username">{user.get("ethAddress")} Book</div>
        <div>
          <input
            placeholder="change username"
            type={ussername}
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
          <Button
            text="change username"
            // onClick={() => {
            //   isAuthenticated && user.username(ussername);
            // }}
          />
        </div>
        <Navbar />
      </div>
    )
  );
};

export default Profile;
