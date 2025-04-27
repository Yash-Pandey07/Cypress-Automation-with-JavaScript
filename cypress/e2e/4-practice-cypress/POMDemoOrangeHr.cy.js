import { LoginOrangeHrmLive } from "../pages/loginOrangeHrmLive";

const loginPage = new LoginOrangeHrmLive();

describe('OrangeHRM Live Demo', () => {
    it('should fill in the login form and submit', () => {
        // Visit the OrangeHRM live demo page
        loginPage.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
        // Fill in the email and password fields
        loginPage.fillUsername('Admin');
        loginPage.fillPassword('admin123');
        loginPage.submit();     
    }
    )
});