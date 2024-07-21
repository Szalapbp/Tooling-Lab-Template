describe('Rock Paper Scissors JS Game', () =>{

  const name = 'Blake Szalapski';

  beforeEach(() => {
    cy.visit('index.html');
  });
 it('Enters a specified name, selects between rock, paper, and scissors, then checks that the name and number of plays is in the game history', () => {
//types your name
  cy.get('#username').type(name);
  cy.get('#start-game-button').click();
//selects a choice from the dropdown
  const selection =['rock', 'paper', 'scissors'];
  const randomSelection = selections[Math.floor(Math.random()* selection.length)];
  cy.get('#user-selection').select(randomSelection)
  cy.get('#go-button').click();
//confirms the history log generated contains the right number of tries and contains the specified name
  cy.get('#game-history'.should('contain', `${username} selected ${randomSelection}`))
  cy.get('#game-history').invoke('text').then((text) => {
    expect(text).to.match(new RegExp(`CPU selected (rock|paper|scissors): ${username} (wins|loses|ties)`));
  });
  cy.get('game-history').invoke('text').should('not.be.empty');

 });
});