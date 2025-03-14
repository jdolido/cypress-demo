
before(function(){

    cy.fixture('example.json').as('test_data')
})

it('Read files using Fixture', function(){

    cy.fixture('example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)

    })

    cy.log(this.test_data.name)

})


it('Read File using readFile()', function(){

    cy.readFile('./cypress/fixtures/example.json').then((data) => {

        cy.log(data.name)
    })


})

it('write file demo', function(){

    cy.writeFile('sample.txt', 'Hello, I am Jansen\n')
    cy.writeFile('sample.txt', 'I am learning Cypress', {flag:'a+'})

})