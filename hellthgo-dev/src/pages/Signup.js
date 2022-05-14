import { useState } from "react";
import Navbar from "../components/home/NavBar";
import "../styles/Signup.css";
import { useMoralisQuery, useMoralis } from "react-moralis";
// import { useMoralis } from "react-moralis";
import { Button } from "web3uikit";
import { Link } from "react-router-dom";

const Signup = () => {
  const { signup } = useMoralis();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { fetch } = useMoralisQuery(
    "_User",
    (query) => query.equalTo("username", `${toString(email)}`),
    [],
    {
      autoFetch: false,
    }
  );

  // const basicQuery = async () => {
  //   const results = await fetch();
  //   // console.log(email);
  //   // Do something with the returned Moralis.Object values
  //   return results;
  // };

  return (
    <div
      style={{
        display: "flex",
        "flex-direction": "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ECFOF3",
      }}
    >
      <Navbar />

      <div
        style={{
          width: "60vw",
          height: "30vh",
          "backdrop-filter": "blur(5px) saturate(200%)",
          "-webkit-backdrop-filter": "blur(5px) saturate(200%)",
          "background-color": "rgba(255, 255, 255, 0.45)",
          "border-radius": "12px",
          border: "1px solid rgba(209, 213, 219, 0.3)",
          marginTop: "30vh",
          display: "flex",
          alignItems: "center",
          "justify-content": "center",
        }}
      >
        <div className="sign-up">
          <div
            style={{
              padding: 10,
            }}
          >
            <input
              placeholder="enter Email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              style={{
                padding: 10,
                width: 300,
              }}
            />
          </div>
          <div
            style={{
              padding: 10,
            }}
          >
            <input
              placeholder="enter Password"
              type="password"
              onChange={(e) => setPassword(e.currentTarget.value)}
              value={password}
              style={{
                padding: 10,
                width: 300,
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              "flex-direction": "row",
              justifyContent: "space-around",
            }}
          >
            <Button
              className="login-button"
              theme="primary"
              sx={{
                padding: 30,
              }}
              text="SIGN UP"
              onClick={async () => {
                // const results = await fetch();
                // console.log(results);
                fetch({
                  onSuccess: (result) => console.log(result),
                });
                try {
                  signup(email, password, email);
                } catch (err) {
                  alert(`Error: ${err.type} is ${err.msg}`);
                }
              }}
            >
              Sign up
            </Button>

            <Link to="/signin">
              <Button text="Login" />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="beauty"
        style={{
          position: "fixed",
          height: "15%",
          width: "15%",
          margin: "0% 0% 0% 30%",
          "border-radius": "12px",
          "max-width": "200px",

          "z-index": "-1",
          display: "flex",
          // background: "rgb(2,0,36)",
        }}
      >
        {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#24A148"
            d="M39.7,-31C51.1,-17.4,59.8,-0.9,55.3,10C50.7,21,33,26.3,17.4,32.3C1.9,38.4,-11.5,45,-22.5,41.7C-33.6,38.3,-42.2,25,-45.2,10.7C-48.2,-3.6,-45.5,-18.9,-37.1,-31.9C-28.6,-44.8,-14.3,-55.5,-0.1,-55.4C14.2,-55.4,28.3,-44.6,39.7,-31Z"
            transform="translate(100 100)"
          />
        </svg> */}
      </div>

      <div
        className="beauty"
        style={{
          position: "fixed",
          height: "15%",
          width: "15%",
          "max-width": "200px",
          "min-width": "100px",
          margin: "0% 28% 0% 30%",
          // "border-radius": "12px",

          "z-index": "-1",
          display: "flex",
        }}
      ></div>
    </div>
  );
};;;;;;;;;;;;;;;;;;;;;;;;;;;;

export default Signup;
