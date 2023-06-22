import { loadFeatures, autoBindSteps } from 'jest-cucumber';
import { cellNextGenerationStateSteps } from './cellNextGenerationState/cellNextGenerationState.steps';

const features = loadFeatures('**/*.feature');
autoBindSteps(features, [ cellNextGenerationStateSteps ]);