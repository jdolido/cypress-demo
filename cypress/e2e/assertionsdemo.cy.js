it('Assertions Demo', () => {

    cy.visit('https://example.cypress.io')
    cy.contains('get').click()

    cy.get('#query-btn')
    //implicit assertions
    .should('contain', 'Button')
    .and('have.class' , 'query-btn')
    .and('be.visible')
    .and('be.enabled')

    //explicit assertions
    expect(true).to.be.true
    assert.equal(4, '4', 'NOT EQUAL')
    assert.strictEqual(4, '4', 'NOT EQUAL')

  })