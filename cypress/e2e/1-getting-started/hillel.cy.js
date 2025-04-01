/// <reference types="cypress" />

describe('test-hillel', () => {
    const login = 'guest'; 
    const password = 'welcome2qauto'; 
    const websiteUrl = 'qauto.forstudy.space/'; 
  
    beforeEach(() => {
      cy.visit(`https://${login}:${password}@${websiteUrl}`);
      cy.contains('Sign up').click();
    });


    it('Test field Name', () => {
        
        cy.get('#signupName').focus().blur();
        cy.contains('Name required').should('be.visible');
        cy.get('#signupName').type('Тест');
        cy.contains('Name is invalid').should('be.visible');
        cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('#signupName').clear().type('N');
        cy.contains('Name has to be from 2 to 20 characters long').should('be.visible');
        cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('#signupName').clear()
        
      });
    

      it('Test field Last name', () => {
        cy.get('#signupLastName').focus().blur();
        cy.contains('Last name required').should('be.visible');
        cy.get('#signupLastName').type('Тест');
        cy.contains('Last name is invalid').should('be.visible');
        cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('#signupLastName').clear().type('N');
        cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible');
        cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('#signupLastName').clear()
      });

      
      it('Test field E-mail', () => {
        cy.get('#signupEmail').focus().blur();
        cy.contains('Email required').should('be.visible');
        cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('#signupEmail').type('test.gmail.com');
        cy.contains('Email is incorrect').should('be.visible');
        cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('#signupEmail').clear()
      });

      it('Test field Password', () => {
        cy.get('#signupPassword').focus().blur();
        cy.contains('Password required').should('be.visible');
        cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('#signupPassword').type('1234567');
        cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible');
        cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('#signupLastName').clear()
      });

      it('Test field Re-enter password', () => {
        cy.get('#signupRepeatPassword').focus().blur();
        cy.contains('Re-enter password required').should('be.visible');
        cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        cy.get('#signupPassword').type('Kolya1234567$');
        cy.get('#signupRepeatPassword').type('Kolya7654321$');
        cy.contains('Passwords do not match').should('be.visible');
        cy.get('#signupLastName').clear()
        cy.get('#signupRepeatPassword').clear()
        
      });

      it('Negative Test Register button', () => {
        cy.get('#signupName').type('Kolya');
        cy.get('#signupLastName').type('KolyaTest');
        cy.get('#signupEmail').type('test.gmail.com');
        cy.get('#signupPassword').type('Kolya1234567$');
        cy.get('#signupRepeatPassword').type('Kolya1234567$');
        cy.contains('Register').should('be.disabled');
      });

    //   it('Positive Test Register button', () => {
    //     cy.get('#signupName').type('Kolya');
    //     cy.get('#signupLastName').type('KolyaTest');
    //     cy.get('#signupEmail').type('mykolashchyrba13@gmail.com');
    //     cy.get('#signupPassword').type('Kolya1234567$');
    //     cy.get('#signupRepeatPassword').type('Kolya1234567$');
    //     cy.contains('Register').click();
    //     cy.url().should('include', '/garage');
    //   });

    
    });
  
 