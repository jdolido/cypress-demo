import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()

beforeEach(function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

describe('All Login Tests', function () {

    it('Login with valid credentials', function () {
 
        // loginPage.enterUsername('Admin')
        // loginPage.enterPassword('admin123')
        // loginPage.clickLogin()
        loginPage.Login('Admin', 'admin123')
        cy.get('.oxd-userdropdown-tab').click()

        // cy.get('input[name="username"]').type('Admin')
        // cy.get('input[type="password"]').type('admin123')
        // cy.get('.oxd-button').should('contain' , 'Login').click()
    })

    it('Login with invalid username', function () {

        // loginPage.enterUsername('Admin1233')
        // loginPage.enterPassword('admin123')
        // loginPage.clickLogin()
        loginPage.Login('Admin2', 'admin123')
        cy.contains('Invalid credentials').should('contain' , 'Invalid credentials')
        

    })

})

    it('Login with invalid password', function () {

        // loginPage.enterUsername('Admin')
        // loginPage.enterPassword('admin456')
        // loginPage.clickLogin()
        loginPage.Login('Admin', 'admin1233')
        cy.contains('Invalid credentials').should('contain' , 'Invalid credentials')

    })
