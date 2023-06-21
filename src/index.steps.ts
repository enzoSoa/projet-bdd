import { StepDefinitions } from 'jest-cucumber';

export const indexSteps: StepDefinitions = ({ given, and, when, then }) => {
    given(/^I say hello$/, () => {
        console.log("Hello");
    });

    then(/^I should see hello$/, () => {
        expect(true).toBeTruthy();
    });
};