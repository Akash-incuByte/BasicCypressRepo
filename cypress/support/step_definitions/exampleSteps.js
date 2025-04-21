const { Given, Then } = require("@badeball/cypress-cucumber-preprocessor");
import ExamplePage from '../../pages/ExamplePage';

Given("I open the example page", () => {
    ExamplePage
        .visit()
        .verifyPageLoaded();
});

Then("I should see the example text", () => {
    ExamplePage.verifyExampleText();
});