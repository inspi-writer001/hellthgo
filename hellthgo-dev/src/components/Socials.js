import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { IconButton } from "@mui/material";
import "./Socials.css";

const Socials = () => {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButton__repeat">
        <InstagramIcon fontSize="small" />
      </IconButton>
      <IconButton className="swipeButton__left">
        <TwitterIcon fontSize="small" />
      </IconButton>
      <IconButton className="swipeButton__star">
        <LinkedInIcon fontSize="small" />
      </IconButton>
      <IconButton className="swipeButton__right">
        <FacebookIcon fontSize="small" />
      </IconButton>
      <IconButton className="swipeButton__lightning">
        <TelegramIcon fontSize="small" />
      </IconButton>
    </div>
  );
};

export default Socials;
