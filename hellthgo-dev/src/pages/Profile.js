import React from "react";
import { useMoralis } from "react-moralis";

const Profile = () => {
  const styles = {
    display: "flex",
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
  };
  const { isAuthenticated } = useMoralis();
  return (
    <div>
      {isAuthenticated ? (
        <div style={styles}>
          <div
            style={{
              "background-color": "gainsboro",
              padding: "1.5em",
              width: "500px",
              "border-radius": "1em",
              "overflow-x": "auto",
            }}
          >
            User Details would show up here
          </div>
        </div>
      ) : (
        <div style={styles}>
          <div>Please Login</div>
        </div>
      )}{" "}
    </div>
  );
};

export default Profile;
