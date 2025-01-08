import LoginPage from "../pages/Loginpage";
import MakeAppointment from "../pages/Makeappointmentpage";

describe ("Make Appointment",()=>{
    const loginPage = new LoginPage();
    const makeAppointment = new MakeAppointment();

    beforeEach(() => {
        loginPage.kuraLogin();

    })
    // define the file class & add here
    it("make appointmnet",()=>{
        makeAppointment.userAppointment();


   })
})