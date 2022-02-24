import React from "react";
import ReactDOM from "react-dom";
import { GameUi } from "./components/GameUi";
import "./index.css";
import { UiController } from "./modules/UiController";

const uiController = new UiController();

ReactDOM.render(
    <React.StrictMode>
        <GameUi uiController={uiController} />
    </React.StrictMode>,
    document.getElementById("root")
);
