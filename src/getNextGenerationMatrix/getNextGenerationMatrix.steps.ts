import { StepDefinitions } from "jest-cucumber";
import { Generation } from "../../src/types/generation";
import { getMatrixNextGeneration } from "./getNextGenerationMatrix";
import { generationsPersonas } from "../../src/personaDefinitions/personaDefinitions.steps";

export const getMatrixNextGenerationSteps: StepDefinitions = ({given, when, then}) => {
    let currentGeneration: Generation;
    let nextGeneration: Generation;

    given(/^current generation is ([a-z ]+)$/, (generation: string) => {
        currentGeneration = generationsPersonas[generation];
    });

    when(/^i get the next generation$/, () => {
        nextGeneration = getMatrixNextGeneration(currentGeneration);
    });

    then(/^i get a generation with ([a-z ]+)$/, (expectedNextGeneration: string) => {
        expect(
            nextGeneration.every((row, y) => row.every((cell, x) => cell === generationsPersonas[expectedNextGeneration][y][x]))
        ).toBeTruthy();
    });
};