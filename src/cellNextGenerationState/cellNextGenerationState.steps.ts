import { StepDefinitions } from "jest-cucumber";
import { DeathCause, HealthState, NextGenerationState, State, isNextGenerationDeadState } from "../types/cellState";
import { cellNextGenerationState } from "./cellNextGenerationState";

export const cellNextGenerationStateSteps: StepDefinitions = ({ given, and, when, then }) => {
    let cellState: State;
    let nextGenerationState: NextGenerationState;

    given(/^a (living|dead) cell with ([0-8]) neighbors$/, (healthState: HealthState, numberOfNeighbors: string) => {
        cellState = {
            health: healthState,
            numberOfNeighbors: Number(numberOfNeighbors)
        };
    });

    when(/^the cell is passing to the next generation$/, () => {
        nextGenerationState = cellNextGenerationState(cellState);
    });

    then(/^the cell should have (survived|revived)$/, () => {
        expect(nextGenerationState.health).toBe("living");
    });
    
    then(/^the cell should have died from (underpopulation|overpopulation)$/, (deathCause: DeathCause) => {
        if(!isNextGenerationDeadState(nextGenerationState)) throw new Error("Expected next generation state to be dead");

        expect(nextGenerationState.health).toBe("dead");
        expect(nextGenerationState.deathCause).toBe(deathCause);
    });
    
    then(/^the cell should have stayed dead$/, (deathCause: DeathCause) => {
        if(!isNextGenerationDeadState(nextGenerationState)) throw new Error("Expected next generation state to be dead");

        expect(nextGenerationState.health).toBe("dead");
        expect(nextGenerationState.deathCause).toBeUndefined();
    });
};