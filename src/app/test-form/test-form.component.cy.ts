import {TestFormComponent} from "./test-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

describe('TestFormComponent', () => {

  const getUserForm = () => cy.get('[data-cy=userForm]');
  const getUsernameInput = () => cy.get('[data-cy=userInput]');
  const getPasswordInput = () => cy.get('[data-cy=passwordInput]');
  const getSubmitButton = () => cy.get('[data-cy=submitUserForm]');

  beforeEach(() => {
    cy.mount(TestFormComponent, {
      imports: [
        ReactiveFormsModule,
        MatInputModule
      ]
    });
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
});
