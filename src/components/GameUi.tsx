import React from "react";
import "./GameUi.css";
import { Button } from "./Button";
import { TextPrompt, TextPromptProperties } from "./TextPrompt";

type GameUiState = {
    textPromptProperties: TextPromptProperties,
};

export const GameUi: React.FC = () => {
    const [promptProperties] = React.useState<GameUiState>({
        textPromptProperties: {
            text: "The Gold Button",
            color: "white",
            size: 32,
        }
    });

    return (
        <div className="game-ui">
            <TextPrompt
                text={promptProperties?.textPromptProperties.text ?? ""}
                color={promptProperties?.textPromptProperties.color ?? "white"}
                size={promptProperties?.textPromptProperties.size ?? 24}
            />
            <Button />
        </div>
    );
};
