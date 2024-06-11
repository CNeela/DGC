class createGeneralMatter{

    webElements={
        mattersIcon:()=> cy.xpath("//img[@src='assets/img/Matters.svg']"),
        generalMattersTab:()=> cy.xpath("//div[@class='switch cswitch'] //a[@class='optiontwo comptwo']"),
        createTab:()=> cy.xpath("//div//a[text()='Create']"),
        caseTitle:()=> cy.xpath("//input[@name='title']"),
        caseNumber:()=> cy.get('#matterNumber'),
        cancelBtn:()=> cy.xpath("//button[@class='btn btn-default btncancel btnrightitem']"),
        startDate:()=> cy.xpath("(//span[@class='mat-mdc-button-touch-target'])[1]"),
        endDate:()=> cy.xpath("(//span[@class='mat-mdc-button-touch-target'])[2]"),
        description:()=> cy.xpath("//textarea[@formcontrolname='description']"),
        matterType:()=> cy.xpath("//input[@name='matterType']"),
        requiredErrorCaseTitle:()=> cy.xpath("//div[contains(text(),'Case Title is required')]"),
        requiredErrorCaseNumber:()=> cy.get(':nth-child(2) > .invalid-feedback > .ng-star-inserted'),
        nextBtnMatterInfoPage:()=> cy.xpath("//button[@type='submit']"),
        nextBtnDepartmentPage:()=> cy.xpath("//button[@class='btn btn-primary btnsave savecls']"),
        departmentRightSide:()=> cy.xpath("//div[@id='selectbx ']"),
        ClientsOnRightSide:()=> cy.xpath("(//div[@id='selectbx'])[2]"),    
        DocumentsOnRightSide:()=> cy.xpath("//div[@id='selectbx ']"),
        SelectedNameOnLeftSide:()=> cy.xpath("(//div[@class='col-6 matterpadding'])[1]"),
        submitBtn:()=> cy.xpath("//button[@type='submit']"),
        yesBtnInAlert:()=> cy.xpath("//button[text()='Yes']"),
        noBtnInAlert:()=> cy.xpath("//button[text()='No']"),
        closeBtnInAlert:()=> cy.xpath("//div[text()='X']"),
        viewMatterListBtn:()=> cy.xpath("//button[text()='View Matter List']"),
        addMatterBtn:()=> cy.xpath("//button[text()='Add Matter']"),
        




    

    }

    mattersIconClick(){
        this.webElements.mattersIcon().click();
    }
    generalMattersTabClick(){
        this.webElements.generalMattersTab().click();
    }
    createTabClick(){
        this.webElements.createTab().click();
    }
    caseTitleText(caseTitle){
        this.webElements.caseTitle().type(caseTitle);
    }
    caseNumberText(caseNum){
        this.webElements.caseNumber().type(caseNum);
    }
    cancelBtnClick(){
        this.webElements.cancelBtn().click();
    }
    caseTitleIsEmpty(){
        this.webElements.caseTitle().should('be.empty');
    }
    caseNumberIsEmpty(){
        this.webElements.caseNumber().should('be.empty');
    }
    selectDateIsEmpty(){
        cy.xpath("//input[@name='startdate']").should('be.empty');
    }
    closeDateIsEmpty(){
        cy.xpath("//input[@name='closedate']").should('be.empty');
    }
    startDateCalendar(){
        this.webElements.startDate().click();
    }
    endDateCalendar(){
        this.webElements.endDate().click();
    }
    StartDateSelection(startDate){
        cy.xpath("//div[text()='" + startDate + "']").click();
    }
    endDateSelection(closeDate){
        cy.xpath("//div[text()='" + closeDate + "']").click();
    }
    descriptionField(descript){
        this.webElements.description().type(descript);
    }
    matterTypeField(matType){
        this.webElements.matterType().type(matType);
        
    }
    descriptionIsEmpty(){
        this.webElements.description().should('be.empty');
    }
    matterTypeIsEmpty(){
        this.webElements.matterType().should('be.empty');
    }
    prioritySelection(prioritySelect){
        cy.xpath("//button[text()='" + prioritySelect + "']").click();
    }
    statusSelection(statusSelect){
        cy.xpath("//button[text()='" + statusSelect + "']").click();
    }
    caseTitlefieldRequiredError(){
        this.webElements.requiredErrorCaseNumber().should('be.visible');
    }
    caseNumberfieldRequirdError(){
        this.webElements.requiredErrorCaseNumber().should('be.visible');
    }

    nextBtnMatterInfo(){
        this.webElements.nextBtnMatterInfoPage().click();
    }
    nextBtnIsDisabledInDepartmentsPage(){
        this.webElements.nextBtnDepartmentPage().should('be.disabled');
    }

    SelectNameLists(nameList) {
        for (let i = 0; i < nameList.length; i++) {
          cy.xpath(
            "//div//div[text()='" + nameList[i] + "']//following::input[1]"
          ).click();
        }
      }

    verifyNameListsOnRightSide(nameAssert){
        this.webElements.departmentRightSide().should("contain", nameAssert);
    }
    verifyClientListOnRightSide(clientAssert){
        this.webElements.ClientsOnRightSide().should("contain", clientAssert);
    }
    // Check the name Right side Selected
  textVerifyUnSelectedListOnRightSide(namesToSelect) {
    for (let i = 0; i < namesToSelect.length; i++) {
      cy.xpath("(//div[@class='col-6 matterpadding'])[2] //div[text()='" + namesToSelect[i] + "']").should('be.visible');
    }
  }


    UnSelectNameLists(unSelectNameList) {
        for (let i = 0; i < unSelectNameList.length; i++) {
          cy.xpath(
            "//div//div[text()='" + unSelectNameList[i] + "']//following::i[1]"
          ).click();
        }
      }


      textVerifySelectedListOnLeftSide(namesToVerify) {
        for (let i = 0; i < namesToVerify.length; i++) {
          cy.xpath("(//div[@class='col-6 matterpadding'])[1] //div[text()='" + namesToVerify[i] + "']").should('be.visible');
        }
      }

      verifyDocumentsOnRight(DocumentsAssert){
        this.webElements.DocumentsOnRightSide().should("contain", DocumentsAssert);
      }

      selectAllCheckBox(){
        cy.xpath
        ("//div//label[text()='Select All']/following::input[1]").click();

      }
      submitBtnClick(){
        this.webElements.submitBtn().click();
      }
      yesBtnClick(){
        this.webElements.yesBtnInAlert().click();
      }
      noBtnClick(){
        this.webElements.noBtnInAlert().click();
      }
      viewMatterListBtnClick(){
        this.webElements.viewMatterListBtn().click();
      }
      addMatterBtnClick(){
        this.webElements.addMatterBtn().click();
      }
      matterNameAssert(MatterNameAssertion){
        cy.get("(tbody > :nth-child(1) > :nth-child(1)') div[text()='matterNameAssertion']" )
      }
      
      


      selectAllCheckBoxChecked(){
        cy.xpath
        ("//div//label[text()='Select All']/following::input[1]").should('be.checked');
      }

      nameListCheckOnLeftSide(nameAssert){
        this.webElements.SelectedNameOnLeftSide().should("contain", nameAssert);
      }





    }



























module.exports = new createGeneralMatter();