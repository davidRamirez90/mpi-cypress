import {TestFormComponent} from "./test-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MountConfig} from "cypress/angular";

describe('TestFormComponent', () => {
  const testFormComponentConfig: MountConfig<TestFormComponent> = {
    imports: [
      ReactiveFormsModule,
      MatInputModule
    ]
  }

  const getUserForm = () => cy.get('[data-cy=userForm]');
  const getUsernameInput = () => cy.get('[data-cy=userInput]');
  const getPasswordInput = () => cy.get('[data-cy=passwordInput]');
  const getSubmitButton = () => cy.get('[data-cy=submitUserForm]');

  it('can mount', () => {
    cy.mount(TestFormComponent);
  });

  // SHOULD HAVE INPUT OF TYPE PASSWORD
  it('should have input of type password', () => {
    cy.mount(TestFormComponent);
    getPasswordInput().should('have.attr', 'type', 'password');
  })

  describe('form specific tests', () => {
    const username = 'myusername@motionminers.com';
    const password = 'mypassword';



    beforeEach(() => {
      cy.mount(TestFormComponent, testFormComponentConfig).then(response => {
        cy.spy(response.component, 'submitForm').as('submitForm');
      })
    });

    // COMPONENT SHOULD HAVE A FORM GROUP
    it('has a form group', () => {
      getUserForm().should('exist');
    });

    // SUBMIT BUTTON SHOULD BE DISABLED IF FORM IS INVALID
    it('submit button should be disabled if form is invalid', () => {
      getSubmitButton().should('be.disabled');
    });

    // SUBMIT BUTTON SHOULD BE ENABLED IF USERNAME AND PASSWORD ARE FILLED
    it('submit button should be enabled if username and password are filled', () => {
      getUsernameInput().type('test');
      getPasswordInput().type('test');
      getSubmitButton().should('be.enabled');
    })

    // SUBMITFORM SHOULD BE CALLED WHEN SUBMIT BUTTON IS CLICKED
    it('submitForm should be called when submit button is clicked', () => {
      getUsernameInput().type(username);
      getPasswordInput().type(password);
      getSubmitButton().click();
      cy.get('@submitForm').should('have.been.called');
    })
  })






});
