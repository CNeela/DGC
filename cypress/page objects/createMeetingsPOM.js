class createEvent{


    WebElements={
        meetingsIcon:()=> cy.xpath("//img[@src='assets/img/meeting.svg']"),
        createTab:()=> cy.xpath("//a[text()='Create']"),
        taskDropDown:()=> cy.xpath("//select[@formcontrolname='title']"),
        saveBtn:()=> cy.xpath("//button[@type='submit']"),
        eventStartTime:()=> cy.xpath("//select[@formcontrolname='from_ts']"),
        eventEndTime:()=> cy.xpath("//select[@formcontrolname='to_ts']"),
        repetitionOption:()=> cy.xpath("//select[@formcontrolname='repeat_interval']"),
        alldayCheckbox:()=>cy.xpath("//input[@formcontrolname='allday']"),
        addNotification:()=> cy.xpath("//button[text()='Add Notification']"),
        addTimeNotification:()=> cy.xpath("//input[@type='number']"), 
        notifyOption:()=> cy.xpath("//select[@class='notificationRow form-control ng-pristine ng-valid ng-touched']"),
        meetingLink:()=> cy.xpath("//input[@formcontrolname='meeting_link']"),
        dialIn:()=> cy.xpath("//input[@formcontrolname='dialin']"),
        location:()=> cy.xpath("//input[@formcontrolname='location']"),
        meetingAgenda:()=>cy.xpath("//textarea[@formcontrolname='description']"),
        teamMembers:()=> cy.xpath("//input[@formcontrolname='invitees_internal']"),
        teamMemberAddBtn:()=> cy.xpath("(//input[@value='ADD'])[1]"),
        selectExternalCounsel:()=> cy.xpath("//select[@class='textbox form-control']"),
        searchExternalCounselMembers:()=> cy.xpath("//input[@formcontrolname='invitees_external']"), 
        externalCounselAddBtn:()=> cy.xpath("(//input[@value='ADD'])[2]"),
        





    
    }



    meetingsIconClick(){
        this.WebElements.meetingsIcon().click();
    }
    createTabClick(){
        this.WebElements.createTab().click();
    }
    selectTask(eventTask){
        cy.wait(2000);
        this.WebElements.taskDropDown().select(eventTask);
    }
    saveBtnClick(){
        this.WebElements.saveBtn().click();
    }

    selectDate(date) {
            cy.wait(2000);
            cy.get("#drp").clear({ force: true }).type(date, { force: true });
          }

    
    selectEventStartTime(startTime){
        this.WebElements.eventStartTime().select(startTime);
    }
    selectEventEndTime(endTime){
        this.WebElements.eventEndTime().select(endTime);
    }
    selectRepetition(repetition){
        this.WebElements.repetitionOption().select(repetition);
    }
    selectAlldayEvent(){
        this.WebElements.alldayCheckbox().click();
        
    }
    addNotificationClick(){
        this.WebElements.addNotification().click();
    }
    notificationTime(time){
        this.WebElements.addTimeNotification().clear();
        this.WebElements.addTimeNotification().type(time);
    }
    selectNotifyOption(option){
        this.WebElements.notifyOption().select(option);
    }
    meetingLink(link){
        this.WebElements.meetingLink().type(link);

    }
    dialInNumber(dialNumber){
        this.WebElements.dialIn().type(dialNumber);
    }
    meetingLocation(eventLocation){
        this.WebElements.location().type(eventLocation);
    }
    meetingAgenda(description){
        this.WebElements.meetingAgenda().type(description);
    }
    teamMembers(tmName){
        this.WebElements.teamMembers().type(tmName);
    }
    addBtnInTeamMember(){
        cy.wait(2000);
        cy.get(':nth-child(1) > .row > .col-sm-12 > .container > .form-group > #judge > .btnfile').click().click();
    }
    externalCounselSelect(excName){
        this.WebElements.selectExternalCounsel().select(excName);
    }
    searchTMInExternalCounsel(teamMember){
        this.WebElements.searchExternalCounselMembers().type(teamMember);
    }
    addBtnInExternalCounsel(){
        cy.wait(2000);
        cy.get('.form-group > .btnfile').click().click();
    }
    viewChangesBtnClick(){
        cy.xpath("//button[text()='View Changes']").click();
    }


    

} 
    






module.exports = new createEvent();