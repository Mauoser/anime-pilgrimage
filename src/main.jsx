import './index.css';
import * as ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";

const rootContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(rootContainer);
root.render(<App />);
