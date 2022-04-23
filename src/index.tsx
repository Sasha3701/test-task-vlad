import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.scss";

const container = document.getElementById("root");
const rootContainer = createRoot(container as HTMLElement);

rootContainer.render(<App />);
