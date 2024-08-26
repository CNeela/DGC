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

          
         //1.  Mandatory Only
         it('createEventWithTaskOnly',()=>{

        createEvent.meetingsIconClick();
        createEvent.createTabClick();
        createEvent.selectTask(data.common.eventTask1);
        createEvent.selectDate(data.test1.eventDate);
        createEvent.selectEventStartTime(data.test1.stTime);
        createEvent.selectEventEndTime(data.test1.endTime);
        //cy.scrollTo('center');
        //createEvent.meetingLink(data.test1.meetingLink);
        //createEvent.dialInNumber(data.test1.dialNumber);
        //createEvent.meetingLocation(data.test1.location);
        //createEvent.meetingAgenda(data.test1.meetAgenda)
        cy.scrollTo('bottom');
        
        //createEvent.teamMembers(data.test1.tmName);
        //cy.wait(2000);
        //createEvent.addBtnInTeamMember();
        //createEvent.externalCounselSelect(data.test1.firmName);
        //cy.wait(4000);
        //createEvent.searchTMInExternalCounsel(data.test1.clientTmName);
        //cy.wait(4000);
        //createEvent.addBtnInExternalCounsel();
        createEvent.saveBtnClick();
        createEvent.viewChangesBtnClick();
        cy.scrollTo('top');
        viewEvent.ViewMeetings(data.test1.viewEventDate);
        viewEvent.MeetingAssert(data.test1.meetingName);
        viewEvent.ClickMeetings(data.test1.meetingName);
        viewEvent.monthAndDateAssert(data.test1.eventMonthandDate);
        //viewEvent.meetAgendaAssert(data.test1.meetAgenda);
        //viewEvent.meetingLinkAssert(data.test1.meetingLink);
        //viewEvent.phoneNumberAssert(data.test1.dialNumber);
        //viewEvent.teamMemberAssert(data.test1.tmName1);
        //viewEvent.clientAssert(data.test1.clientName1);

        
})
        //2. Mandatory with Meeting Link
       
        it('TaskwithMeetingLink',()=>{

          createEvent.meetingsIconClick();
          createEvent.createTabClick();
          createEvent.selectTask(data.common.eventTask2);
          createEvent.selectDate(data.test2.eventDate);
          createEvent.selectEventStartTime(data.test2.stTime);
          createEvent.selectEventEndTime(data.test2.endTime);
          cy.scrollTo('center');
          createEvent.meetingLink(data.test2.meetingLink);
          cy.scrollTo('bottom');
          createEvent.saveBtnClick();
          createEvent.viewChangesBtnClick();
          cy.scrollTo('top');
          viewEvent.ViewMeetings(data.test2.viewEventDate);
          viewEvent.MeetingAssert(data.test2.meetingName);
          viewEvent.ClickMeetings(data.test2.meetingName);
          viewEvent.monthAndDateAssert(data.test2.eventMonthandDate);
          viewEvent.meetingLinkAssert(data.test2.meetingLink);

        })

        //3. Mandatory with Dial In Number
       
        it('TaskwithMeetingLink',()=>{

          createEvent.meetingsIconClick();
          createEvent.createTabClick();
          createEvent.selectTask(data.common.eventTask3);
          createEvent.selectDate(data.test3.eventDate);
          createEvent.selectEventStartTime(data.test3.stTime);
          createEvent.selectEventEndTime(data.test3.endTime);
          cy.scrollTo('center');
          createEvent.dialInNumber(data.test3.dialNumber);
          cy.scrollTo('bottom');
          createEvent.saveBtnClick();
          createEvent.viewChangesBtnClick();
          cy.scrollTo('top');
          viewEvent.ViewMeetings(data.test3.viewEventDate);
          viewEvent.MeetingAssert(data.test3.meetingName);
          viewEvent.ClickMeetings(data.test3.meetingName);
          viewEvent.monthAndDateAssert(data.test3.eventMonthandDate);
          viewEvent.phoneNumberAssert(data.test3.dialNumber);

        })


        //4. Mandatory with Location

        it('taskWithLocation',()=>{

          createEvent.meetingsIconClick();
          createEvent.createTabClick();
          createEvent.selectTask(data.common.eventTask1);
          createEvent.selectDate(data.test4.eventDate);
          createEvent.selectEventStartTime(data.test4.stTime);
          createEvent.selectEventEndTime(data.test4.endTime);
          cy.scrollTo('center');
          createEvent.meetingLocation(data.test4.location);
          createEvent.saveBtnClick();
          createEvent.viewChangesBtnClick();
          cy.scrollTo('top');
          viewEvent.ViewMeetings(data.test4.viewEventDate);
          viewEvent.MeetingAssert(data.test4.meetingName);
          viewEvent.ClickMeetings(data.test4.meetingName);
          viewEvent.monthAndDateAssert(data.test4.eventMonthandDate);
      
})
          //5. Mandatory with Meeting Agenda

        it('taskWithMeetingAgenda',()=>{

          createEvent.meetingsIconClick();
          createEvent.createTabClick();
          createEvent.selectTask(data.common.eventTask1);
          createEvent.selectDate(data.test5.eventDate);
          createEvent.selectEventStartTime(data.test5.stTime);
          createEvent.selectEventEndTime(data.test5.endTime);

          cy.scrollTo('center');
          createEvent.meetingAgenda(data.test5.meetAgenda)

          createEvent.saveBtnClick();
          createEvent.viewChangesBtnClick();
          cy.scrollTo('top');
          viewEvent.ViewMeetings(data.test5.viewEventDate);
          viewEvent.MeetingAssert(data.test5.meetingName);
          viewEvent.ClickMeetings(data.test5.meetingName);
          viewEvent.monthAndDateAssert(data.test5.eventMonthandDate);
          viewEvent.meetAgendaAssert(data.test5.meetAgenda);

})
        //6. Mandatory with Team Members

        it('taskWithTeamMembers',()=>{

          createEvent.meetingsIconClick();
          createEvent.createTabClick();
          createEvent.selectTask(data.common.eventTask1);
          createEvent.selectDate(data.test6.eventDate);
          createEvent.selectEventStartTime(data.test6.stTime);
          createEvent.selectEventEndTime(data.test6.endTime);
          cy.scrollTo('bottom');        
          createEvent.teamMembers(data.test1.tmName);
          cy.wait(2000);
          createEvent.addBtnInTeamMember();          
          createEvent.saveBtnClick();
          createEvent.viewChangesBtnClick();
          cy.scrollTo('top');
          viewEvent.ViewMeetings(data.test6.viewEventDate);
          viewEvent.MeetingAssert(data.test6.meetingName);
          viewEvent.ClickMeetings(data.test6.meetingName);
          viewEvent.monthAndDateAssert(data.test6.eventMonthandDate);
          viewEvent.teamMemberAssert(data.test1.tmName1);


})       
         //7. Mandatory with External Counsels

         it('taskWithTeamMembers',()=>{

          createEvent.meetingsIconClick();
          createEvent.createTabClick();
          createEvent.selectTask(data.common.eventTask1);
          createEvent.selectDate(data.test7.eventDate);
          createEvent.selectEventStartTime(data.test7.stTime);
          createEvent.selectEventEndTime(data.test7.endTime);
          cy.scrollTo('bottom');    
          cy.wait(2000);
          createEvent.externalCounselSelect(data.test7.firmName);
          cy.wait(4000);
          createEvent.searchTMInExternalCounsel(data.test7.clientTmName);
          createEvent.addBtnInExternalCounsel();    
          cy.wait(2000);
          createEvent.saveBtnClick();
          createEvent.viewChangesBtnClick();
          cy.scrollTo('top');
          viewEvent.ViewMeetings(data.test7.viewEventDate);
          viewEvent.MeetingAssert(data.test7.meetingName);
          viewEvent.ClickMeetings(data.test7.meetingName);
          viewEvent.monthAndDateAssert(data.test7.eventMonthandDate);
          viewEvent.clientAssert(data.test7.clientName1);
          viewEvent.clientAssert(data.test7.clientTmName1);

         })


         //8. Meeting Link with dial in number

         it('meetingLinkWithDialInNumber',()=>{

          createEvent.meetingsIconClick();
          createEvent.createTabClick();
          createEvent.selectTask(data.common.eventTask2);
          createEvent.selectDate(data.test8.eventDate);
          createEvent.selectEventStartTime(data.test8.stTime);
          createEvent.selectEventEndTime(data.test8.endTime);
          cy.scrollTo('center');
          createEvent.meetingLink(data.test8.meetingLink);
          createEvent.dialInNumber(data.test8.dialNumber);
          cy.scrollTo('bottom');
          createEvent.saveBtnClick();
          createEvent.viewChangesBtnClick();
          cy.scrollTo('top');
          viewEvent.ViewMeetings(data.test8.viewEventDate);
          viewEvent.MeetingAssert(data.test8.meetingName);
          viewEvent.ClickMeetings(data.test8.meetingName);
          viewEvent.monthAndDateAssert(data.test8.eventMonthandDate);
          viewEvent.meetingLinkAssert(data.test8.meetingLink);
          viewEvent.phoneNumberAssert(data.test8.dialNumber);


})         
          // 9. Meeting Link with Location

          it('meetingLinkWithLocation',()=>{

            createEvent.meetingsIconClick();
            createEvent.createTabClick();
            createEvent.selectTask(data.common.eventTask2);
            createEvent.selectDate(data.test9.eventDate);
            createEvent.selectEventStartTime(data.test9.stTime);
            createEvent.selectEventEndTime(data.test9.endTime);
            cy.scrollTo('center');
            createEvent.meetingLink(data.test9.meetingLink);
            createEvent.meetingLocation(data.test9.location);
            cy.scrollTo('bottom');
            createEvent.saveBtnClick();
            createEvent.viewChangesBtnClick();
            cy.scrollTo('top');
            viewEvent.ViewMeetings(data.test9.viewEventDate);
            viewEvent.MeetingAssert(data.test9.meetingName);
            viewEvent.ClickMeetings(data.test9.meetingName);
            viewEvent.monthAndDateAssert(data.test9.eventMonthandDate);
            viewEvent.meetingLinkAssert(data.test9.meetingLink);

  
})
           //10. Meeting Link with Meetings agenda

           it('meetingLinkWithMeetingsAgnda',()=>{

            createEvent.meetingsIconClick();
            createEvent.createTabClick();
            createEvent.selectTask(data.common.eventTask2);
            createEvent.selectDate(data.test10.eventDate);
            createEvent.selectEventStartTime(data.test10.stTime);
            createEvent.selectEventEndTime(data.test10.endTime);
            cy.scrollTo('center');
            createEvent.meetingLink(data.test10.meetingLink);
            createEvent.meetingAgenda(data.test10.meetAgenda)
            cy.scrollTo('bottom');
            createEvent.saveBtnClick();
            createEvent.viewChangesBtnClick();
            cy.scrollTo('top');
            viewEvent.ViewMeetings(data.test10.viewEventDate);
            viewEvent.MeetingAssert(data.test10.meetingName);
            viewEvent.ClickMeetings(data.test10.meetingName);
            viewEvent.monthAndDateAssert(data.test10.eventMonthandDate);
            viewEvent.meetingLinkAssert(data.test10.meetingLink);
            viewEvent.meetAgendaAssert(data.test10.meetAgenda);
           })


           //11. Meeting Link with Team member

           it('meetingLinkWithTeamMember',()=>{

            createEvent.meetingsIconClick();
            createEvent.createTabClick();
            createEvent.selectTask(data.common.eventTask2);
            createEvent.selectDate(data.test11.eventDate);
            createEvent.selectEventStartTime(data.test11.stTime);
            createEvent.selectEventEndTime(data.test11.endTime);
            cy.scrollTo('center');
            createEvent.meetingLink(data.test11.meetingLink);
            cy.scrollTo('bottom');        
            createEvent.teamMembers(data.test11.tmName);
            cy.wait(2000);
            createEvent.addBtnInTeamMember();
            createEvent.saveBtnClick();
            createEvent.viewChangesBtnClick();
            cy.scrollTo('top');
            viewEvent.ViewMeetings(data.test11.viewEventDate);
            viewEvent.MeetingAssert(data.test11.meetingName);
            viewEvent.ClickMeetings(data.test11.meetingName);
            viewEvent.monthAndDateAssert(data.test11.eventMonthandDate);
            viewEvent.meetingLinkAssert(data.test11.meetingLink);
            viewEvent.meetAgendaAssert(data.test11.meetAgenda);
            viewEvent.teamMemberAssert(data.test11.tmName1);

           })

           //12. Meeting Link and External Counsels

           it.only('meetingLinkWithExternalCounsels',()=>{

            createEvent.meetingsIconClick();
            createEvent.createTabClick();
            createEvent.selectTask(data.common.eventTask2);
            createEvent.selectDate(data.test12.eventDate);
            createEvent.selectEventStartTime(data.test12.stTime);
            createEvent.selectEventEndTime(data.test12.endTime);
            cy.scrollTo('center');
            createEvent.meetingLink(data.test12.meetingLink);
            cy.scrollTo('bottom');        
            createEvent.externalCounselSelect(data.test12.firmName);
            cy.wait(4000);
            createEvent.searchTMInExternalCounsel(data.test12.clientTmName);
            createEvent.addBtnInExternalCounsel();    
            cy.wait(2000);           
            createEvent.addBtnInTeamMember();
            createEvent.saveBtnClick();
            createEvent.viewChangesBtnClick();
            cy.scrollTo('top');
            viewEvent.ViewMeetings(data.test12.viewEventDate);
            viewEvent.MeetingAssert(data.test12.meetingName);
            viewEvent.ClickMeetings(data.test12.meetingName);
            viewEvent.monthAndDateAssert(data.test12.eventMonthandDate);
            viewEvent.meetingLinkAssert(data.test12.meetingLink);
            viewEvent.meetAgendaAssert(data.test12.meetAgenda);
            viewEvent.clientAssert(data.test12.clientName1);
            viewEvent.clientAssert(data.test12.clientTmName1);
           })

           



           







})