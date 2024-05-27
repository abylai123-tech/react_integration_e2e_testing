const { expect } = require('@wdio/globals');
const LoginPage = require('../../../../../test/pageobjects/login.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        
    });
});
