import React from "react";
import { Button, NotificationProvider } from "web3uikit";
import { useEffect, useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Test = () => {
  const [value, setValue] = useState("home");
  const history = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div
      className="fixed-top navitem"
      style={{
        display: "flex",
        alignItems: "center",
        "justify-content": "center",
        "z-index": "1222",
        top: "90vh",
      }}
    >
      <div
        style={{
          display: "flex",
          // "margin-bottom": "0px !important",
          // top: "100px",
        }}
      >
        <BottomNavigation
          sx={{
            width: "40vw",

            // "backdrop-filter": "blur(5px) saturate(200%)",
            // "-webkit-backdrop-filter": "blur(5px) saturate(200%)",
            // "background-color": "rgba(255, 255, 255, 0.45)",
            // "border-radius": "12px",
            // border: "1px solid rgba(209, 213, 219, 0.3)",

            "backdrop-filter": "blur(17px) saturate(180%)",
            "-webkit-backdrop-filter": "blur(17px) saturate(180%)",
            "background-color": " rgba(255, 255, 255, 0.22)",
            "border-radius": "12px",
            border: "1px solid rgba(209, 213, 219, 0.3)",

            // "backdrop-filter": "blur(8px) saturate(97%)",
            // "-webkit-backdrop-filter": "blur(8px) saturate(97%)",
            // "background-color": "rgba(17, 25, 40, 0.47)",
            // "border-radius": "12px",
            // border: "1px solid rgba(255, 255, 255, 0.125)",

            minWidth: "fit-content",
            padding: "2%",
          }}
          showLabels
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            label="Products"
            value="products"
            icon={<AutoAwesomeIcon />}
            onClick={() => {
              history("/products");
            }}
            sx={{}}
          />

          <BottomNavigationAction
            label="Home"
            value="home"
            icon={<HomeIcon />}
            onClick={() => {
              history("/");
            }}
          />
          <BottomNavigationAction
            label="Wallet"
            value="wallet"
            icon={<AccountBalanceWalletIcon />}
            onClick={() => {
              history("/wallet");
            }}
          />
          <BottomNavigationAction
            label="Profile"
            value="profile"
            icon={<PersonIcon />}
            onClick={() => {
              history("/profile");
            }}
          />
        </BottomNavigation>
      </div>
    </div>
  );
};

export default Test;
