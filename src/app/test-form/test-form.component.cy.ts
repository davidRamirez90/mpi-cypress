import {TestFormComponent} from "./test-form.component";

describe('TestFormComponent', () => {

  // COMPONENT SHOULD MOUNT
  it('mounts', () => {
    cy.mount(TestFormComponent);
  });

  // COMPONENT SHOULD HAVE A FORM GROUP
  it('has a form group', () => {
    cy.mount(TestFormComponent);
    cy.get('[data-cy=userForm]').should('exist');
  });

  // SUBMIT BUTTON SHOULD BE DISABLED IF FORM IS INVALID
  it('submit button should be disabled if form is invalid', () => {
    cy.mount(TestFormComponent);
    cy.get('[data-cy=submitUserForm]').should('be.disabled');
  });

  // SUBMIT BUTTON SHOULD BE ENABLED IF USERNAME AND PASSWORD ARE FILLED
  it('submit button should be enabled if username and password are filled', () => {
    cy.mount(TestFormComponent);
    cy.get('[data-cy=userInput]').type('test');
    cy.get('[data-cy=passwordInput]').type('test');
    cy.get('[data-cy=submitUserForm]').should('be.enabled');
  })
});
