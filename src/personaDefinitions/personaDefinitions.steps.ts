import { StepDefinitions } from "jest-cucumber"
import { Generation } from "../types/generation";
import { fromCucumberTableToGeneration } from "../utils";

export const generationsPersonas: Record<string, Generation> = {};

export const personaDefinitionsSteps: StepDefinitions = ({ given, then }) => {
    let currentGeneration: Generation;

    given(/^a generation named ([a-z ]+) looking like this:$/, (personaName: string, table: Record<string, string>[]) => {
        generationsPersonas[personaName] = fromCucumberTableToGeneration(table);
        currentGeneration = generationsPersonas[personaName];
    });

    then(/^a cell is present at column ([0-9]+) and row ([0-9]+)$/, (y: string, x: string) => {
        expect(currentGeneration[Number(x)-1][Number(y)-1]).toBeTruthy()
    });
    
    then(/^no cell should be in the generation$/, () => {
        expect(currentGeneration.every(row => row.every(cell => !cell))).toBeTruthy()
    });
};
