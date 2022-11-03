import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

// CDN will expose the library globally with the "splitio" variable. Use the options that work best with your code.
const { SplitFactory } = require("@splitsoftware/splitio-react");
// Create the config for the SDK factory.
const sdkConfig = {
  core: {
    authorizationKey: "ga81m1op6iucrm8qngngitadmjogekp8tek3",
    key: "key",
  },
};

root.render(
  <React.StrictMode>
    <SplitFactory config={sdkConfig}>
      <App />
    </SplitFactory>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
