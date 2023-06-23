import { aliveNeighborsCount } from "../../src/aliveNeighborsCount/aliveNeighborsCount";
import { cellNextGenerationState } from "../../src/cellNextGenerationState/cellNextGenerationState";
import { HealthState, Position } from "../../src/types/cellState";
import { Generation } from "../../src/types/generation";

export const getMatrixNextGeneration = (generation: Generation): Generation => {
    return generation.map((row, y) => row.map((isAlive, x) => getCellNextGenerationState(isAlive, {x, y}, generation)));
}

const getCellNextGenerationState = (isAlive: boolean, position: Position, generation: Generation): boolean =>
    cellNextGenerationState({
        health: convertBoolToHealthState(isAlive),
        numberOfNeighbors: aliveNeighborsCount(position, generation)
    }).health === "living" ? true : false;

const convertBoolToHealthState = (isAlive: boolean): HealthState => isAlive ? "living" : "dead";