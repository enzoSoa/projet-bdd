import { loadFeatures, autoBindSteps } from 'jest-cucumber';
import { cellNextGenerationStateSteps } from './cellNextGenerationState/cellNextGenerationState.steps';
import { aliveNeighborsCountSteps } from './aliveNeighborsCount/aliveNeighborsCount.steps';

const features = loadFeatures('**/*.feature');
autoBindSteps(features, [ cellNextGenerationStateSteps, aliveNeighborsCountSteps ]);