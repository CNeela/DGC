import Login from"../page objects/login page.js";
import verifyNotifications from"../page objects/notificationsPOM.js";




describe('notifyVerification', ()=>{
    var data; 
    var departNameList, NotifySelect;
    
  
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


    beforeEach(()=>{
      departNameList= [data.departnamelist.name1,data.departnamelist.name2,];
      NotifySelect = [data.notifylist.name1];
      



    });

    // 1. If the documents shared with client, user should get a notification, verify that notification
    it('verifySharingNotification',()=>{
      
        verifyNotifications.relationshipsIconClick();
        verifyNotifications.searchBoxClick(data.searchFirmName.firmname);
        verifyNotifications.actionBtnClick();
        verifyNotifications.exchangeInformationClick();
        verifyNotifications.shareByUsBtnClick();
        verifyNotifications.shareDocumentPlusBtnClick();
        verifyNotifications.searchBarClick(data.DocumentName.docName);
        verifyNotifications.shareBtnClick();
        verifyNotifications.universalShareBtnClick();
        verifyNotifications.submitBtnClick();
        verifyNotifications.closeBtnClick();
        cy.wait(2000);
        verifyNotifications.notifyIconClick();
        verifyNotifications.VerifynotificationText(data.DocumentName.shareText);

});


       //2. Verifying the delete approval notification

       it('verifyDeleteApprovalNotification',()=>{
        cy.wait(2000);
        verifyNotifications.documentsIconClick();
        verifyNotifications.viewTabClick();
        verifyNotifications.plusBtnClick();
        verifyNotifications.SelectDepts(departNameList);
        verifyNotifications.minusBtnClick();
        verifyNotifications.searchBarInviewDocsClick(data.DocsName.docName);
        verifyNotifications.actionBtnClick();
        verifyNotifications.deleteOptionClick();
        verifyNotifications.yesBtnClick();
        verifyNotifications.okBtnClick();
        cy.wait(2000);
        verifyNotifications.notifyIconClick();
        verifyNotifications.VerifynotificationText(data.DeleteNotify.deleteText);

      })




      //3. Reading the notification, check the text is normal after reading the notification

      it('readingNotification',()=>{
        cy.wait(2000);
        verifyNotifications.notifyIconClick();
        cy.wait(2000);
        verifyNotifications.notifySelect(NotifySelect);
        cy.wait(2000);
        verifyNotifications.readBtnClick();
        verifyNotifications.readMegAssert();
        cy.wait(2000);
        verifyNotifications.toastAssertForRead()
        

      })
      //4. check the checkbox is checked 

      it('checkboxVerify', ()=>{
       
        cy.wait(2000);
        verifyNotifications.notifyIconClick();
        cy.wait(2000);
        verifyNotifications.notifySelect(NotifySelect)
        verifyNotifications.checkboxAssert(NotifySelect);

      })


      //5. Delete Notification
      it('deleteNotification', ()=>{
       
          cy.wait(2000);
          verifyNotifications.notifyIconClick();
          cy.wait(2000);
          verifyNotifications.notifySelect(NotifySelect);
          verifyNotifications.deleteBtnClickInNotification();
          verifyNotifications.toastAssertForDelete();
          verifyNotifications.deleteMsgAssert(NotifySelect);

      })

      //Without selecting any item in notification, Verify error message should appear or not

      //6. Verify error PopUp when clicking on read button without selecting an item
      it('verifyErrorPopupwhenClickingOnRead', ()=>{
        cy.wait(2000);
          verifyNotifications.notifyIconClick();
          cy.wait(2000);
          verifyNotifications.readBtnClick();
          verifyNotifications.toastAssertForSelectingItem();

      })

      //7. Verify error PopUp when clicking on delete button without selecting an item

      it('verifyErrorPopupwhenClickingOnDelete', ()=>{
        cy.wait(2000);
          verifyNotifications.notifyIconClick();
          cy.wait(2000);
          verifyNotifications.deleteBtnClickInNotification();
          verifyNotifications.toastAssertForSelectingItem();
      });


      //8. Verify the notification count
      it.only('verifyNotificationCount', ()=>{
        cy.wait(2000);
          verifyNotifications.notifyIconClick();
          cy.wait(5000);
          verifyNotifications.notificationCount();
      })



    
});
