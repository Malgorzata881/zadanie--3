class homePage {
    constructor() {
        this.url = 'https://www.edu.goit.global/account/login';
        this.emailInput = '#user_email';
        this.passwordInput = '#user_password';
        this.loginButton = 'button[type="submit"]';
        this.menuMobile = '#open-navigation-menu-mobile';
        this.logoutButton = ':nth-child(8) > .next-bve2vl'
    }
    visit() {
        cy.visit(this.url);
    }
    loginUser(email, password) {
        cy.get(this.emailInput).type(email);
        cy.get(this.passwordInput).type(password);
        cy.get(this.loginButton).click();
    }
    
    logout() {
        cy.get(this.menuMobile).click();
        cy.get(this.logoutButton).click();
    }
}
export default new homePage