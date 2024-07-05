class verifyNotifications{



    webElements ={
        relationshipsIcon:()=> cy.xpath("//img[@src='assets/img/relationship.svg']"),
        searchBox:()=> cy.xpath("//input[@placeholder='Search']"), 
        actionBtn:()=> cy.xpath("//button[@data-bs-toggle='dropdown']"),
        exchangeInformation:()=> cy.xpath("//ul[@class='dropdown-menu show']//li[1]"),
        shareByUsBtn:()=> cy.xpath("//a[@class='optiontwo relation-sub-tabs compotwoo comptwo']"),
        shareDocumentsPlusBtn:()=>cy.xpath("//span[@class='fa fa-plus ng-star-inserted']"),
        searchBarExchangePage:()=>cy.xpath("(//input[@class='form-control textbox ng-untouched ng-pristine ng-valid'])[2]"),
        shareBtn:()=>cy.xpath("(//button[text()='Share'])[1]"),
        universalShareBtn:()=> cy.xpath("//button[@class='btn btn-default btnsave savecls']"),
        lastPageSubmit:()=> cy.xpath("//button[@type='submit']"),
        closeBtnInSuccessPopUp:()=> cy.xpath("//div[@class='iconclose']"),
        notifyIcon:()=> cy.xpath("//img[@src='assets/img/notification.svg']"),
        notificationsForAll:()=> cy.xpath("//div[@class='note bold']"),
        meetingsIcon:()=> cy.xpath("//img[@src='assets/img/meeting.svg']"),
        createTab:()=> cy.xpath("//a[text()='Create']"),
        documentsIcon:()=>cy.xpath("//img[@src='assets/img/Document.svg']"),
        viewBtn:()=>cy.xpath("//a[text()='View']"),
        plusBtn:()=> cy.xpath("//i[@class='fa fa-plus calimg calitem input-group-append checkboxitem ng-star-inserted']"),
        minusBtn:()=> cy.xpath("//i[@class='fa fa-minus calimg calitem input-group-append checkboxitem ng-star-inserted']"),
        searchBarInViewDocs:()=> cy.xpath("//input[@placeholder='Search']"),
        deleteDocument:()=> cy.xpath("//ul[@class='dropdown-menu dropdown-menu-start show']//li[3]"),
        yesBtnInSuccessPopUp:()=>cy.xpath("(//button[text()='Yes'])[2]"),
        okBtnInSuccessPopUp:()=> cy.xpath("(//button[text()='OK'])[1]"),
        
        readMegVerify:()=> cy.xpath("(//div[@class='note bold'])[1]"),
        readBtn:()=>cy.xpath("//i[@class='fa-solid fa-check']"),
        deleteBtnInNotification:()=> cy.xpath("//i[@class='fa fa-trash']"),
        toastMsgForRead:()=> cy.xpath("//div[@aria-label='Notification marked as read successfully.']"),
        toastMsgForDelete:()=> cy.xpath("//div[@aria-label='Notification deleted successfully.']"),
        toastMsgSelectAtleastOneItem:()=> cy.xpath("//div[@aria-label='Select atleast 1 item']"),


        inviteNotifyMsg:()=> cy.xpath("//div[contains(text(), 'Event Invitation: Bahadur Raj is inviting you to Conference event on Jun 24, 2024, 01:00 PM - 01:30 PM (GMT+05:30)'"),




    }


    relationshipsIconClick(){
        this.webElements.relationshipsIcon().click();
    }
    searchBoxClick(firmName){
        this.webElements.searchBox().click();
        this.webElements.searchBox().type(firmName);
    }
    actionBtnClick(){
        this.webElements.actionBtn().click();
    }
    exchangeInformationClick(){
        this.webElements.exchangeInformation().click();
    }
    shareByUsBtnClick(){
        this.webElements.shareByUsBtn().click();
    }
    shareDocumentPlusBtnClick(){
        this.webElements.shareDocumentsPlusBtn().click();
    }
    searchBarClick(documentName){
        this.webElements.searchBarExchangePage().click();
        this.webElements.searchBarExchangePage().type(documentName);
    }
    shareBtnClick(){
        this.webElements.shareBtn().click();
    }
    universalShareBtnClick(){
        this.webElements.universalShareBtn().click();
    }
    submitBtnClick(){
        this.webElements.lastPageSubmit().click();
    }
    closeBtnClick(){
        this.webElements.closeBtnInSuccessPopUp().click();
    }

    notifyIconClick(){
        this.webElements.notifyIcon().click();

    }
    VerifynotificationText(NotificationText){
        this.webElements.notificationsForAll().should("contain", NotificationText);
    }
    meetingsIconClick(){
        this.webElements.meetingsIcon().click();
    
    }
    documentsIconClick(){
        this.webElements.documentsIcon().click();
    
    }
    viewTabClick(){
        this.webElements.viewBtn().click();
    }
    plusBtnClick(){
        this.webElements.plusBtn().click();
    }

    SelectDepts(deptSelect) {
        for (let i = 0; i < deptSelect.length; i++) {
          cy.xpath(
            "//div//label[text()='" + deptSelect[i] + "']//following::input[1]"
          ).check();
        }
      }

      

    minusBtnClick(){
        this.webElements.minusBtn().click();
    }
    searchBarInviewDocsClick(docsName){
        this.webElements.searchBarInViewDocs().click();
        this.webElements.searchBarInViewDocs().type(docsName);
    }
    deleteOptionClick(){
        this.webElements.deleteDocument().click();
    
    }
    yesBtnClick(){
        this.webElements.yesBtnInSuccessPopUp().click();
    }
    okBtnClick(){
        this.webElements.okBtnInSuccessPopUp().click();
    }
    readBtnClick(){
        this.webElements.readBtn().click()
    }

    verifyInviteNotitify(){
        this.webElements.inviteNotifyMsg().should('be.visible');
    }
    notifySelect(name){
        cy.xpath("//div[text()='" + name + "']/parent::div/following-sibling::div/child::input").click();
    }
   
    readMegAssert(){
        cy.get(':nth-child(2) > .col-11 > .note')
        .should('have.text', '1715745277761 delete request is pending approval.')
        .and('have.css', 'font-weight','400');
                  
        }
    
    deleteBtnClickInNotification(){
        this.webElements.deleteBtnInNotification().click();
    }
    toastAssertForRead(){
        this.webElements.toastMsgForRead().should('be.visible');
    }
    toastAssertForDelete(){
        this.webElements.toastMsgForDelete().should('be.visible');
    }
   deleteMsgAssert(text){
    cy.get(':nth-child(n) > .col-11 > .note').should('not.contain', text);
    }
    checkboxAssert(name){
        cy.xpath("//div[text()='" + name + "']/parent::div/following-sibling::div/child::input").should('be.checked');
    }
    toastAssertForSelectingItem(){
        this.webElements.toastMsgSelectAtleastOneItem().should('be.visible');
    }
    notificationCount(){

        //Store the count of the item

        cy.xpath("//div[@class='col-12 row createGroup rone']")
          .its('length')
          .as('elementCount');

        //Get the value of the total count

        cy.xpath("//span[@class='total'] //b").invoke('text').then((text)=>{
            const totalCount = parseInt(text, 10);


        cy.get('@elementCount').then((elementCount)=>{
            expect(elementCount).to.equal(totalCount);

        })
        })

        
          

        


          }
    }



    










module.exports = new verifyNotifications();