class viewEvent{
   WebElements={

   }



   ViewMeetings(eventDate) {
    let sysDate = new Date();
    let isToday = sysDate.getDate();
    let needDate = isToday - eventDate;
    let flag = 1;
    if (needDate < 0) {
      flag = 0;
      needDate = -1 * needDate;
    }

    for (let i = 0; i < needDate; i++) {
      if (flag === 0) {
        cy.get(".righticon").click();
      } else {
        cy.get(".lefticon").click();
      }
    }
  }

  ClickMeetings(meetingName) {
    cy.wait(2000);
    cy.xpath(
      "//div[@class='cal-day-columns']//*[text()='" + meetingName + "']"
    ).click({ multiple: true });
  }
  MeetingAssert(meetName){
    cy.wait(5000);
    cy.xpath("//div[@role='application']").should("contain", meetName);
  }
  monthAndDateAssert(monthAndDate){
    cy.wait(2000);
    cy.xpath("//p[@class='monthtitle']").should("contain", monthAndDate);
  }
  meetAgendaAssert(agendaAssert){
    cy.wait(2000);
    cy.xpath("//p[@class='meetingitem itemFlex read-more-content']").should("contain", agendaAssert)
  }
  meetingLinkAssert(meetLink){
    cy.xpath("(//p[text()='Join with Google Meet']//following-sibling::p)[1]").should("contain", meetLink);
  }
  phoneNumberAssert(phoneNumber){
    cy.xpath("(//p[text()='Join by Phone']//following-sibling::p)[1]").should("contain", phoneNumber);
  }
  teamMemberAssert(tmName){
    cy.xpath("//div[@class='emptyrow']//following-sibling::label").should("contain", tmName);
  }
  clientAssert(clientName){
    cy.xpath("//div[@class='timsheetsubitem']").should("contain", clientName);
  }
  


}















module.exports = new viewEvent();