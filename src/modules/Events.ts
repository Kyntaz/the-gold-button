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
        },
    },
    // Eminent destruction
    {
        probability: 1,
        procedure: async (gc) => {
            await gc.displaySlowText("SIR!", { size: 32, interval: 2 });
            await gc.wait(5_000);
            await gc.displaySlowText(
                "We have picked up a signal of incoming nuclear missiles from the Northern Federation"
            );
            await gc.wait(3_000);
            await gc.displaySlowText(
                "I know you have been told not to press the button, but this is the exception!"
            );
            await gc.wait(3_000);
            await gc.displaySlowText(
                "People will die, we must retaliate if we are to show strength to the other nations!"
            );
            await gc.wait(3_000);
            await gc.displaySlowText(
                "I trust you to make this choice, sir."
            );
            await gc.wait(6_000);
            await gc.displaySlowText(
                "YOU MUST PRESS THE BUTTON!",
                { size: 32, interval: 300 }
            );
            await gc.wait(10_000);
            await gc.displaySlowText(
                "You have failed as a President... Our people have died, and you do nothing!"
            );
            await gc.wait(6_000);
            await gc.displaySlowText(
                "Disgraceful, sir... We trusted you..."
            );
            await gc.wait(6_000);
            gc.clearText();
        }
    },
    // Save button
    {
        probability: 1,
        procedure: async (gc) => {
            await gc.displaySlowText("Sir, you seem tired...");
            await gc.wait(3_000);
            await gc.displaySlowText("You do know you don't need to always be staring at the button, right?");
            await gc.wait(3_000);
            await gc.displaySlowText("You can in fact leave, take a rest... Nothing bad will happen!");
            await gc.wait(3_000);
            gc.clearText();
            await gc.wait(6_000);
            await gc.displaySlowText("Oh! Don't forget to save your progress before leaving, as you would in any game, of course.");
            await gc.wait(6_000);
            await gc.displaySlowText("How do you save? By pressing the button, of course, dummy!");
            await gc.wait(3_000);
            await gc.displaySlowText("The yellow button \"Launch!\"es the save protocol, obviously! What did you thing it did?");
            await gc.wait(3_000);
            await gc.displaySlowText("Go ahead, press the button, and go take a nap.");
            await gc.wait(10_000);
            gc.clearText();
        }
    },
];

export const GAME_START_EVENT: GameEvent = {
    probability: 1,
    procedure: async (gc) => {
        await gc.displaySlowText(
            "Sir, congratulations on your new gig as the President."
        );
        await gc.wait(3_000);
        await gc.displaySlowText(
            "You must be tired from all those months campaigning, so I'll keep this explanation brief."
        );
        await gc.wait(3_000);
        await gc.displaySlowText(
            "Day to day events are taken care by the ministers and specialists, some of them human, others automated."
        );
        await gc.wait(3_000);
        await gc.displaySlowText(
            "It is not the President's place to worry about such trivial things as laws and the inner politics of the nation's states and provinces. No sir!"
        );
        await gc.wait(3_000);
        await gc.displaySlowText(
            "We have managed to delegate most of those trivialities, with one single exception: The Golden Button."
        );
        await gc.wait(3_000);
        await gc.displaySlowText(
            "This button controls all of our nuclear and non-nuclear long-range weapons, which have enough force to end the entire human race."
        );
        await gc.wait(3_000);
        await gc.displaySlowText(
            "You may believe that your job is to decide when the button should be pressed, but it is in fact simpler than that."
        );
        await gc.wait(3_000);
        await gc.displaySlowText(
            "Sir, I'll be completely blunt with you, you have one single job..."
        );
        await gc.wait(4_000);
        await gc.displaySlowText("Do. Not. Press. The. Button.", {
            size: 32,
            interval: 300,
        });
        await gc.wait(5_000);
        await gc.displaySlowText(
            "Pressing the button will be the end of humanity, you may believe that there is a circumstance where this is an appropriate response."
        );
        await gc.wait(3_000);
        await gc.displaySlowText(
            "There isn't, if you press the button, it will be game over, and it will be your fault entirely."
        );
        await gc.wait(3_000);
        await gc.displaySlowText(
            "I must leave now, I trust you will perform this job with great respect for the human race."
        );
        await gc.wait(3_000);
        await gc.displaySlowText(
            "Best of luck, sir. Try not to f* this up too bad, ok?"
        );
        await gc.wait(3_000);
        gc.clearText();
    },
};

export const GAME_OVER_EVENT: GameEvent = {
    probability: 1,
    procedure: async (gameController) => {
        await gameController.displaySlowText(
            "GAME OVER: You killed everyone...",
            {
                size: 32,
                color: "red",
            }
        );
    },
};
