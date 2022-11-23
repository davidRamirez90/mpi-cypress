// import {TestFormComponent} from "./test-form.component";
// import {FormsModule, ReactiveFormsModule} from "@angular/forms";
// import {MatInputModule} from "@angular/material/input";
// import {MountConfig} from "cypress/angular";
//
// describe('TestFormComponent', () => {
//   const testFormComponentConfig: MountConfig<TestFormComponent> = {
//     imports: [
//       ReactiveFormsModule,
//       FormsModule,
//       MatInputModule
//     ]
//   }
//
//   const getUserForm = () => cy.get('[data-cy=userForm]');
//   const getUsernameInput = () => cy.get('[data-cy=userInput]');
//   const getCompanyInput = () => cy.get('[data-cy=companyInput]');
//   const getAgeSelect = () => cy.get('[data-cy=ageSelect]');
//   const getPasswordInput = () => cy.get('[data-cy=passwordInput]');
//   const getSubmitButton = () => cy.get('[data-cy=submitUserForm]');
//
//   const username = 'myusername@motionminers.com';
//   const password = 'mypassword';
//   const validCompany = 'MotionMiners';
//   const invalidCompany = 'Google';
//   const validAge = '26-35';
//
//   beforeEach(() => {
//     cy.mount(TestFormComponent, testFormComponentConfig).then(response => {
//       cy.spy(response.component, 'submitForm').as('submitForm');
//     })
//   });
//
//   it('can mount', () => {
//     cy.mount(TestFormComponent, testFormComponentConfig);
//   });
//
//   // DESCRIBE GROUP TO TEST VALIDATION
//   describe('Test form validation', () => {
//     // USERNAME INPUT SHOULD SHOW ERROR NO USERNAME IS ENTERED
//     it('username input should show error no username is entered', () => {
//       getUsernameInput().type(username);
//       getUsernameInput().clear();
//       getUsernameInput().should('have.class', 'ng-invalid');
//       getUsernameInput().next().should('exist');
//       getUsernameInput().next().should('have.text', 'This field is required');
//     })
//
//     // COMPANY INPUT SHOULD SHOW ERROR IF COMPANY IS INVALIDCOMPANY
//     it('company input should show error if company is invalidCompany', () => {
//       getCompanyInput().type(invalidCompany);
//       getCompanyInput().should('have.class', 'ng-invalid');
//       getCompanyInput().next().should('exist');
//       getCompanyInput().next().should('have.text', 'This company is invalid');
//     })
//
//     // AGE SELECT SHOULD SHOW ERROR NO AGE IS SELECTED
//     it('age select should show error no age is selected', () => {
//       getAgeSelect().select(validAge);
//       getAgeSelect().select(0);
//       getAgeSelect().should('have.class', 'ng-invalid');
//       getAgeSelect().next().should('exist');
//       getAgeSelect().next().should('have.text', 'This field is required');
//     })
//
//     // PASSWORD INPUT SHOULD SHOW ERROR NO PASSWORD IS ENTERED
//     it('password input should show error no password is entered', () => {
//       getPasswordInput().type(password);
//       getPasswordInput().clear();
//       getPasswordInput().should('have.class', 'ng-invalid');
//       getPasswordInput().next().should('exist');
//       getPasswordInput().next().should('have.text', 'This field is required');
//     })
//   })
//
//   // DESCRIBE GROUP TO TEST SUBMITTING FORM
//   describe('Test form and submit enable | disable', () => {
//
//     // COMPONENT SHOULD HAVE A FORM GROUP
//     it('has a form group', () => {
//       getUserForm().should('exist');
//     });
//
//     // SUBMIT BUTTON SHOULD BE DISABLED IF FORM IS INVALID
//     it('submit button should be disabled if form is invalid', () => {
//       getSubmitButton().should('be.disabled');
//     });
//
//     // SUBMIT BUTTON SHOULD BE ENABLED IF USERNAME AND PASSWORD ARE FILLED
//     it('submit button should be enabled if username and password are filled', () => {
//       getUsernameInput().type(username);
//       getCompanyInput().type(validCompany);
//       getAgeSelect().select(validAge);
//       getPasswordInput().type(password);
//       getSubmitButton().should('be.enabled');
//     })
//
//     // SUBMITFORM SHOULD BE CALLED WHEN SUBMIT BUTTON IS CLICKED
//     it('submitForm should be called when submit button is clicked', () => {
//       getUsernameInput().type(username);
//       getCompanyInput().type(validCompany);
//       getAgeSelect().select(validAge);
//       getPasswordInput().type(password);
//       getSubmitButton().click();
//       cy.get('@submitForm').should('have.been.called');
//     })
//   })
//
//
//
// });
