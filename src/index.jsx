import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './style.css'
// import App from './App.jsx'
import { Todo } from "./main.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Todo />
  </StrictMode>
);
