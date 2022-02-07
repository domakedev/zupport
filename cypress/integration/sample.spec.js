/// <reference types="Cypress" />

describe('landing test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Renders welcome text', () => {
    cy.contains('Disfruta ayudando a los demas');
  });

  it('Renders top comu', () => {
    cy.get('[data-test="top-comus"]').should('have.length', 5);
  });

  it('Renders specific top comu', () => {
    cy.get('[data-test="top-comu"]').should('contain', 'Tours');
  });
  it('Renders 3 top helpers', () => {
    cy.get('[data-test="top-helpers"]').should('have.length', 3);
  });
});
