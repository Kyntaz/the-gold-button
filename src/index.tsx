import React from "react";
import ReactDOM from "react-dom";
import { GameUi } from "./components/GameUi";
import "./index.css";
import { GameController } from "./modules/GameController";

const gameController = new GameController();

ReactDOM.render(
    <React.StrictMode>
        <GameUi gameController={gameController} />
    </React.StrictMode>,
    document.getElementById("root")
);
