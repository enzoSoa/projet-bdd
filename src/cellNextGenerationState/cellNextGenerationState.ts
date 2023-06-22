import { HealthState, NextGenerationDeadState, NextGenerationState, State } from "../types/cellState";

export const cellNextGenerationState = ({health, numberOfNeighbors}: State) : NextGenerationState => {
    const aliveState: NextGenerationState = { health: "living" };

    if (health === "living") {
        const shouldSurviveResult = shouldSurvive(numberOfNeighbors); 
        return shouldSurviveResult != true ? shouldSurviveResult : aliveState; 
    } else {
        return shouldRevive(numberOfNeighbors) ? aliveState : { health: "dead" };
    }
};

const shouldSurvive = (numberOfNeighbors: number) : true | NextGenerationDeadState => {
    if (numberOfNeighbors > 3) {
        return {
            health: "dead",
            deathCause: "overpopulation"
        };
    } else if (numberOfNeighbors < 2) {
        return {
            health: "dead",
            deathCause: "underpopulation"
        };
    }
    return true;
};

const shouldRevive = (numberOfNeighbors: number) : boolean => {
    return numberOfNeighbors === 3;
};