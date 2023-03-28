describe('App', () => {
    it('loads posts by default', () => {
      cy.visit('/');
      cy.get('h1').should('contain', 'posts');
      cy.get('pre').should('have.length.greaterThan', 0);
    });
  
    it('loads users when users button is clicked', () => {
      cy.visit('/');
      cy.contains('Users').click();
      cy.get('h1').should('contain', 'users');
      cy.get('pre').should('have.length.greaterThan', 0);
    });
  
    it('loads comments when comments button is clicked', () => {
      cy.visit('/');
      cy.contains('Comments').click();
      cy.get('h1').should('contain', 'comments');
      cy.get('pre').should('have.length.greaterThan', 0);
    });
  
    it('loads the correct data when a button is clicked', () => {
      cy.visit('/');
      cy.contains('Users').click();
      cy.wait(1000); // wait for the data to load
      cy.get('pre').should('have.length.greaterThan', 0);
      cy.get('pre').each(pre => {
        expect(pre.text()).to.include('"userId":');
      });
    });
  });
  