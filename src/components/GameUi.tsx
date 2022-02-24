import React from "react";
import "./GameUi.css";
import { GoldenButton } from "./GoldenButton";
import { TextPrompt, TextPromptProperties } from "./TextPrompt";
import { UiController } from "../modules/UiController";

export type GameUiState = {
    textPromptProperties: TextPromptProperties;
};

type GameUiProps = {
    uiController: UiController;
};

export const GameUi: React.FC<GameUiProps> = (props) => {
    const [state, setState] = React.useState<GameUiState>({
        textPromptProperties: {
            text: "The Gold Button",
            color: "white",
            size: 32,
        },
    });
    props.uiController.initialize({ ...state }, setState);

    return (
        <div className="game-ui">
            <TextPrompt
                text={state?.textPromptProperties.text ?? ""}
                color={state?.textPromptProperties.color ?? "white"}
                size={state?.textPromptProperties.size ?? 24}
            />
            <GoldenButton
                onClick={() =>
                    props.uiController.displaySlowText("Something Else")
                }
            />
        </div>
    );
};
