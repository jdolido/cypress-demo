/// <reference types = "cypress-downloadfile" />

it('File Upload Test', function(){

    cy.visit('https://trytestingthis.netlify.app/')

    cy.get('#myfile').attachFile('attachmentfile.png')

})


it('File Download Test', function(){

    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownload','example.jpg')

})