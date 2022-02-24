import React from "react";
import ReactDOM from "react-dom";
import { GameUi } from "./components/GameUi";
import "./index.css";

ReactDOM.render(
    <React.StrictMode>
        <GameUi />
    </React.StrictMode>,
    document.getElementById("root")
);
