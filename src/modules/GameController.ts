import { GameUiState } from "../components/GameUi";

export class GameController {
    private state?: GameUiState;
    private setState?: (state: GameUiState) => void;

    public initialize(
        state: GameUiState,
        setState: (state: GameUiState) => void
    ): void {
        (this.state = state), (this.setState = setState);
    }

    public async wait(ms: number): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(() => resolve(), ms);
        });
    }

    public displayText(
        text: string,
        { color = "white", size = 24 }: { color?: string; size?: number } = {}
    ): void {
        if (!this.state || !this.setState) {
            throw new Error(
                "UiController: displayText called before initialize."
            );
        }

        this.state.textPromptProperties.text = text;
        this.state.textPromptProperties.color = color;
        this.state.textPromptProperties.size = size;
        this.setState(this.state);
    }

    public async displaySlowText(
        text: string,
        {
            color = "white",
            size = 24,
            interval = 25,
        }: { color?: string; size?: number; interval?: number } = {}
    ): Promise<void> {
        const textProps = { color, size };
        for (let i = 0; i <= text.length; i++) {
            const partialText = text.substring(0, i);
            await this.wait(interval);
            this.displayText(partialText, textProps);
        }
    }
}
