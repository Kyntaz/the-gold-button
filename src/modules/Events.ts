import { GameController } from "./GameController";

export type GameEvent = {
    probability: number;
    procedure: (gameController: GameController) => Promise<void>;
};

export const EVENT_LIST: Array<GameEvent> = [
    // Dummy Event
    {
        probability: 1,
        procedure: async (gameController) => {
            await gameController.displaySlowText("A dummy event...");
            await gameController.wait(3_000);
            await gameController.gameOver();
        },
    },
];

export const GAME_START_EVENT: GameEvent = {
    probability: 1,
    procedure: async (gameController) => {
        await gameController.displaySlowText("The Golden Button", { size: 32 });
    },
};

export const GAME_OVER_EVENT: GameEvent = {
    probability: 1,
    procedure: async (gameController) => {
        await gameController.displaySlowText("GAME OVER: You killed everyone...", {
            size: 32,
            color: "red",
        });
    },
};
