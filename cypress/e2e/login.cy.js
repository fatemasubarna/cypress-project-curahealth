import LoginPage from "../pages/Loginpage";

describe ("Login functionality",()=>{
    const loginPage = new LoginPage();
    it("valid login",()=>{
        loginPage.kuraLogin();
    
    })
    
})