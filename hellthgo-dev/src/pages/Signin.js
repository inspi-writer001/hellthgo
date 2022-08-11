import { useState } from "react";
import Navbar from "../components/home/NavBar";
import "../styles/Signup.css";
import { useMoralisQuery, useMoralis } from "react-moralis";
// import { useMoralis } from "react-moralis";
import { Button, Input } from "web3uikit";

const Signin = () => {
  const { user, Moralis, logout, authenticate } = useMoralis();
  const [email, setEmail] = useState();
  // const { user, Moralis, logout, authenticate } = useMoralis();

  const handleCustomLogin = async () => {
    await authenticate({
      provider: "magicLink",
      apiKey: "pk_live_1384E3C9E43902E8",
      email: email,
      network: "kovan",
    });
  };

  return (
    <div
      style={{
        display: "flex",
        "flex-direction": "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ECFOF3",
        width: "100vw",
      }}
    >
      <Navbar />

      <div
        style={{
          zIndex: 1,
          display: "flex",
          width: "30vw",
          justifyContent: "center",
          "border-radius": "20px",
          background: "#ffffff",
          flexDirection: "column",
          // "box-shadow": "28px 28px 62px #dedede,-28px -28px 62px #ffffff",
        }}
        // style={{
        //   width: "60vw",
        //   height: "30vh",
        //   "backdrop-filter": "blur(5px) saturate(200%)",
        //   "-webkit-backdrop-filter": "blur(5px) saturate(200%)",
        //   "background-color": "rgba(255, 255, 255, 0.45)",
        //   "border-radius": "12px",
        //   border: "1px solid rgba(209, 213, 219, 0.3)",
        //   marginTop: "30vh",
        //   display: "flex",
        //   alignItems: "center",
        //   "justify-content": "center",
        // }}
      >
        <input
          placeholder="enter email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <Button text="login" onClick={handleCustomLogin} isFullWidth="false" />
        <Button text="logout" onClick={logout} />
      </div>
    </div>
  );
};

export default Signin;
