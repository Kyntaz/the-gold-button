import React from "react";
import ReactDOM from "react-dom";
import { GameUi } from "./components/GameUi";
import "./index.css";
import { GameController } from "./modules/GameController";

const uiController = new GameController();

ReactDOM.render(
    <React.StrictMode>
        <GameUi uiController={uiController} />
    </React.StrictMode>,
    document.getElementById("root")
);
