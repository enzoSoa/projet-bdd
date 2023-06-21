import { loadFeatures, autoBindSteps } from 'jest-cucumber';
import { indexSteps } from './index.steps';

const features = loadFeatures('**/*.feature');
autoBindSteps(features, [ indexSteps ]);