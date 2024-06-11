class Login
{

    txtUserName = "#id_email";
    txtPassword = "#id_password";
    btnSubmit = "button[type='submit']";
    verifyMsg = ".headtitle";

    setUserName(username)
    {
        cy.get(this.txtUserName).type(username);
    }

    setPassword(password)
    {
        cy.get(this.txtPassword).type(password);
    }

    clickSubmit()
    {
        cy.get(this.btnSubmit).click();
    }

    verifyLogin()
    {
        cy.get(this.verifyMsg).should('have.text', 'Dashboard');
    }
}

//export default Login;
module.exports = new Login();