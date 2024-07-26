import Login from"../page objects/login page.js";
import createEvent from"../page objects/createMeetingsPOM.js";
import data from "../fixtures/createMeetings.json";
import viewEvent from"../page objects/viewMeetingsPOM.js";


describe('eventCreation', ()=>{
    
    
  
    before(() =>{
  
      cy.visit("http://staging.corp.lauditor.com/login")
  
      cy.fixture('loginCredentials').then((data1)=>{
    
        Login.setUserName(data1.username)
        Login.setPassword(data1.password)
        Login.clickSubmit();
        Login.verifyLogin();
  
            
  
    });
});

          
         // Mandatory Only
         it('createEventWithTaskOnly',()=>{

        createEvent.meetingsIconClick();
        createEvent.createTabClick();
        createEvent.selectTask(data.common.eventTask1);
        createEvent.selectDate(data.test1.eventDate);
        createEvent.selectEventStartTime(data.test1.stTime);
        createEvent.selectEventEndTime(data.test1.endTime);
        cy.scrollTo('center');
        createEvent.meetingLink(data.test1.meetingLink);
        createEvent.dialInNumber(data.test1.dialNumber);
        createEvent.meetingLocation(data.test1.location);
        createEvent.meetingAgenda(data.test1.meetAgenda)
        cy.scrollTo('bottom');
        
        createEvent.teamMembers(data.test1.tmName1a);
        cy.wait(2000);
        createEvent.addBtnInTeamMember();
        createEvent.externalCounselSelect(data.test1.firmName);
        cy.wait(4000);
        createEvent.searchTMInExternalCounsel(data.test1.clientTmName1);
        cy.wait(4000);
        createEvent.addBtnInExternalCounsel();
        createEvent.saveBtnClick();
        createEvent.viewChangesBtnClick();
        cy.scrollTo('top');
        viewEvent.ViewMeetings(data.test1.viewEventDate);
        viewEvent.MeetingAssert(data.test1.meetingName);
        viewEvent.ClickMeetings(data.test1.meetingName);
        viewEvent.monthAndDateAssert(data.test1.eventMonthandDate);
        viewEvent.meetAgendaAssert(data.test1.meetAgenda);
        viewEvent.meetingLinkAssert(data.test1.meetingLink);
        viewEvent.phoneNumberAssert(data.test1.dialNumber);
        viewEvent.teamMemberAssert(data.test1.tmName1);
        viewEvent.clientAssert(data.test1.clientName1);

        
})
       
        
      
})
