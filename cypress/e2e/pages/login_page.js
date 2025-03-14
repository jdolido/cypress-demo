export class LoginPage{

username_textbox = 'input[name="username"]'
password_textbox = 'input[type="password"]'
login_button = '.oxd-button'


// enterUsername(username){
//     cy.get(this.username_textbox).type(username)

// }

// enterPassword(password){
//     cy.get(this.password_textbox).type(password)

// }

// clickLogin(){
//     cy.get(this.login_button).should('contain' , 'Login').click()

// }

Login(username, password){
    cy.get(this.username_textbox).type(username)
    cy.get(this.password_textbox).type(password)
    cy.get(this.login_button).should('contain' , 'Login').click()

}

}