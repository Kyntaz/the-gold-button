import React from "react";
import "./GameUi.css";
import { GoldenButton } from "./GoldenButton";
import { TextPrompt, TextPromptProperties } from "./TextPrompt";
import { GameController } from "../modules/GameController";

export type GameUiState = {
    textPromptProperties: TextPromptProperties;
};

type GameUiProps = {
    gameController: GameController;
};

export const GameUi: React.FC<GameUiProps> = (props) => {
    const [state, setState] = React.useState<GameUiState>({
        textPromptProperties: {
            text: "",
            color: "white",
            size: 32,
        },
    });
    props.gameController.initialize({ ...state }, setState);

    return (
        <div className="game-ui">
            <TextPrompt
                text={state?.textPromptProperties.text ?? ""}
                color={state?.textPromptProperties.color ?? "white"}
                size={state?.textPromptProperties.size ?? 24}
            />
            <GoldenButton onClick={() => props.gameController.gameOver()} />
        </div>
    );
};
