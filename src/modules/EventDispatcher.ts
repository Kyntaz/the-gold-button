import { GameController } from "./GameController";
import {
    EVENT_LIST,
    GameEvent,
    GAME_OVER_EVENT,
    GAME_START_EVENT,
} from "./Events";

export class EventDispatcher {
    private started = false;
    private cycleDuration = 20_000;
    private totalProbability: number;

    constructor(private gameController: GameController) {
        this.totalProbability = EVENT_LIST.reduce(
            (sum, gameEvent) => sum + gameEvent.probability,
            0
        );
    }

    private async dispatchEvent(event: GameEvent): Promise<void> {
        await event.procedure(this.gameController);
    }

    private selectRandomEvent(): GameEvent {
        const random = Math.random() * this.totalProbability;
        let sum = 0;
        for (const gameEvent of EVENT_LIST) {
            sum += gameEvent.probability;
            if (sum > random) {
                return gameEvent;
            }
        }

        throw new Error(
            "EventDispatcher: totalProbability seems to be wrong. Did something change the EVENT_LIST?"
        );
    }

    public async start(): Promise<void> {
        if (!this.started) {
            this.started = true;
            await this.dispatchEvent(GAME_START_EVENT);
            await this.gameController.wait(this.cycleDuration);

            while (this.started) {
                await this.dispatchEvent(this.selectRandomEvent());
                await this.gameController.wait(this.cycleDuration);
            }
        }
    }

    public async end(): Promise<void> {
        if (this.started) {
            await this.dispatchEvent(GAME_OVER_EVENT);
            this.started = false;
        }
    }
}
