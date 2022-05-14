import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MoralisProvider } from "react-moralis";
import { BrowserRouter } from "react-router-dom";

// import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MoralisProvider
      appId="xFkIO4dV2c5OadSDtErbCqONs9xaygKlbezZxgFJ"
      serverUrl="https://bjzxb8bjqhnz.usemoralis.com:2053/server"
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MoralisProvider>
  </React.StrictMode>
);

reportWebVitals();
