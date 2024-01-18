///This Function Is To Describe The Test Case
it(`Visit CURA, Login and and book an apoointment`, function () {
    //Visit CURA
    cy.visit("https://katalon-demo-cura.herokuapp.com/")
    ///Click Make an Appointment button
    cy.get('#btn-make-appointment').click()
})