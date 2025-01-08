class MakeAppointment{
    userAppointment(){
        cy.get('select').select('Hongkong CURA Healthcare Center')
        cy.get('#chk_hospotal_readmission').click();
        cy.get('#radio_program_medicare').click();
        cy.get('#txt_visit_date').type('26/12/2024');
        cy.get('h2').click();
        cy.get('#txt_comment').type('no comment');
        cy.get('#btn-book-appointment').click();
    }
}
export default MakeAppointment