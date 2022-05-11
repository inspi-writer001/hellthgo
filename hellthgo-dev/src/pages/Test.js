import React from "react";
import { Button, NotificationProvider } from "web3uikit";
import { useEffect, useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import HomeIcon from "@mui/icons-material/Home";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Test = () => {
  const [value, setValue] = React.useState();
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
            "backdrop-filter": "blur(5px) saturate(200%)",
            "-webkit-backdrop-filter": "blur(5px) saturate(200%)",
            "background-color": "rgba(255, 255, 255, 0.45)",
            "border-radius": "12px",
            border: "1px solid rgba(209, 213, 219, 0.3)",
            minWidth: "fit-content",
            padding: "2%",
          }}
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
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon />}
          />
          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<FolderIcon />}
          />
        </BottomNavigation>
      </div>
    </div>
  );
};

export default Test;
