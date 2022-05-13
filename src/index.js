import { createRoot } from "react-dom/client";
import App from "./App";
import "./style/reset.css";
import "./style/style.css";

const app = <App />;
const container = document.getElementById("app");
const root = createRoot(container);
root.render(app);
