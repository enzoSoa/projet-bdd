import { StepDefinitions } from "jest-cucumber";
import { Generation } from "../types/generation";
import { Position } from "../types/cellState";
import { aliveNeighborsCount } from "./aliveNeighborsCount";

export const aliveNeighborsCountSteps: StepDefinitions = ({ given, and, when, then }) => {
    let matrix: Generation;
    let position: Position;
    let neighborsCount: Number;

    given(/^generation currently look like this:$/, (table: Record<string, string>[]) => {
        matrix = table.map(row => Object.values(row).map(cell => cell === "X"));
    });

    and(/^my cell is in column (\d+) and row (\d+)$/, (y: string, x: string) => {
        position = {x: Number(x)-1, y: Number(y)-1};
    });

    when(/^i get the number of neighbors$/, () => {
        neighborsCount = aliveNeighborsCount(position, matrix);
    });

    then(/^i should get a ([0-8]) neighbors count$/, (neighbors: string) => {
        expect(neighborsCount).toBe(Number(neighbors));
    });
};