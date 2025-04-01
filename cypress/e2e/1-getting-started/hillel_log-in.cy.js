/// <reference types="cypress" />




describe('Тестування особистого кабінету', () => {
    const login = 'guest'; 
    const password = 'welcome2qauto'; 
    const websiteUrl = 'qauto.forstudy.space/'; 
  
    beforeEach(() => {
      cy.visit(`https://${login}:${password}@${websiteUrl}`);
    
    });

   
      
    
  
    it('перевіряє елементи на головній сторінці особистого кабінету', () => {
        cy.contains('Sign In').click();
        cy.loginNew('mykolashchyrba13@gmail.com', 'Kolya1234567$');
    });
  });