/* global cy */
/// <reference types="cypress" />

describe('Chat', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('shall enter a chat message', () => {
    cy.get('[data-testid="messageContent"]').type('This is a test message');
    cy.get('[data-testid="submitMessage"]').click();
    const message = cy.get('[data-testid="message"').last();
    message.should('contain', 'This is a test message');
  });

  it('shall switch to other person', () => {
    cy.get('[data-testid="chatter-2"]').click();
    cy.get('[data-testid="no-messages"]').should('exist');
  });

  it('shall be able to chat with the next person', () => {
    cy.get('[data-testid="chatter-2"]').click();
    cy.get('[data-testid="messageContent"]').type('This is the first message');
    cy.get('[data-testid="submitMessage"]').click();
    const message = cy.get('[data-testid="message"').first();
    message.should('contain', 'This is the first message');
  });
});
