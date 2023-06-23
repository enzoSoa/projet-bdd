import { loadFeatures, autoBindSteps } from 'jest-cucumber';
import { cellNextGenerationStateSteps } from './cellNextGenerationState/cellNextGenerationState.steps';
import { aliveNeighborsCountSteps } from './aliveNeighborsCount/aliveNeighborsCount.steps';
import { personaDefinitionsSteps } from './personaDefinitions/personaDefinitions.steps';
import { getMatrixNextGenerationSteps } from './getNextGenerationMatrix/getNextGenerationMatrix.steps';

const features = loadFeatures('**/*.feature');
autoBindSteps(features, [ personaDefinitionsSteps, cellNextGenerationStateSteps, aliveNeighborsCountSteps, getMatrixNextGenerationSteps ]);