export type HealthState = "living" | "dead";
export type DeathCause = "underpopulation" | "overpopulation";

export type State = {
    health: HealthState;
    numberOfNeighbors: number;
}

export type NextGenerationLivingState = {
    health: "living";
}

export type NextGenerationDeadState = {
    health: "dead";
    deathCause?: DeathCause;
}

export const isNextGenerationDeadState = (nextGenerationState: NextGenerationState) : nextGenerationState is NextGenerationDeadState => 
    nextGenerationState.health === "dead";

export type NextGenerationState = NextGenerationLivingState | NextGenerationDeadState;

export type Position = {
    x: number;
    y: number;
};
