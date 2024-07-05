class createEvent{


    WebElements={
        meetingsIcon:()=> cy.xpath("//img[@src='assets/img/meeting.svg']"),
        createTab:()=> cy.xpath("//a[text()='Create']"),
        taskDropDown:()=> cy.xpath("//select[@class='form-select calendorselect ng-pristine ng-invalid ng-touched']")
    }



    meetingsIconClick(){
        this.WebElements
    }




}

module.exports = new createEvent();