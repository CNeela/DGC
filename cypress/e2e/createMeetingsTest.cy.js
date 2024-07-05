import Login from"../page objects/login page.js";
import createEvent from"../page objects/createMeetingsPOM.js";


describe('eventCreation', ()=>{
    var data; 
    
    
  
    before(() =>{
  
      cy.visit("http://staging.corp.lauditor.com/login")
  
      cy.fixture('loginCredentials').then((data1)=>{
    
        Login.setUserName(data1.username)
        Login.setPassword(data1.password)
        Login.clickSubmit();
        Login.verifyLogin();
  
        cy.fixture('notificationdata').then((value)=>{
          data = value;

          
  
    });
});
});

})