import Login from"../page objects/login page.js";
import createGeneralMatter from"../page objects/createGeneralMatterPOM.js";

describe('GeneralMatterCreation', ()=>{
    var data; 
    var departNameList, clientNameList, teamMemberList, documentsList, departNamelist1, teamMemberList1, docsList;
  
    before(() =>{
  
      cy.visit("http://staging.corp.lauditor.com/login")
  
      cy.fixture('loginCredentials').then((data1)=>{
    
        Login.setUserName(data1.username)
        Login.setPassword(data1.password)
        Login.clickSubmit();
        Login.verifyLogin();
  
        cy.fixture('generalMatterdata').then((value)=>{
          data = value;

          
  
  
    });
  
    });
  });

      beforeEach(()=>{

        departNameList = [data.departnamelist.name1,data.departnamelist.name2,];
        clientNameList = [data.clientnamelist.name1,data.clientnamelist.name2,];
        teamMemberList = [data.memberlist.name1, data.memberlist.name2,];
        documentsList  = [data.doclist.name1, data.doclist.name2];
        departNamelist1 = [data.departnamelist1.name1, data.departnamelist1.name2, data.departnamelist1.name3, data.departnamelist1.name4];
        teamMemberList1 = [data.tm.name1, data.tm.name2, data.tm.name3];
        docsList=[data.doc.name1, data.doc.name2, data.doc.name3, data.doc.name4];

      })
          // 1. Mandatory with Cancel

        it('mandatoryWithCancel',()=>{
            cy.reload();
            createGeneralMatter.mattersIconClick();
            cy.wait(5000);
            createGeneralMatter.generalMattersTabClick();
            createGeneralMatter.createTabClick();
            cy.scrollTo(0,200);
            cy.wait(2000);
            createGeneralMatter.caseTitleText(data.matterDetails.caseTitle);

            cy.wait(2000);
            createGeneralMatter.caseNumberText(data.matterDetails.caseNumber);
            createGeneralMatter.cancelBtnClick();
            createGeneralMatter.caseTitleIsEmpty();
            createGeneralMatter.caseNumberIsEmpty();

        })

        // 2. Mandatory and Start date with Cancel

        it('mandatoryandStartDateWithCancel',()=>{
          cy.reload();
          createGeneralMatter.mattersIconClick();
          cy.wait(5000);
          createGeneralMatter.generalMattersTabClick();
          createGeneralMatter.createTabClick();
          cy.scrollTo(0,200);
          cy.wait(2000);
          createGeneralMatter.caseTitleText(data.matterDetails1.caseTitle);

          cy.wait(2000);
          createGeneralMatter.caseNumberText(data.matterDetails1.caseNumber);
          createGeneralMatter.startDateCalendar();
          createGeneralMatter.StartDateSelection(data.matterDetails1.stDate);
          createGeneralMatter.cancelBtnClick();
          createGeneralMatter.caseTitleIsEmpty();
          createGeneralMatter.caseNumberIsEmpty();
          createGeneralMatter.selectDateIsEmpty();

        })

        // 3. Mandatory, Start date, and Close Date with Cancel

        it('mandatoryandStartDateWithCancel',()=>{
          cy.reload();
          createGeneralMatter.mattersIconClick();
          cy.wait(5000);
          createGeneralMatter.generalMattersTabClick();
          createGeneralMatter.createTabClick();
          cy.scrollTo(0,200);
          cy.wait(2000);
          createGeneralMatter.caseTitleText(data.matterDetails2.caseTitle);

          cy.wait(2000);
          createGeneralMatter.caseNumberText(data.matterDetails2.caseNumber);
          cy.wait(2000);
          createGeneralMatter.startDateCalendar();
          createGeneralMatter.StartDateSelection(data.matterDetails2.stDate);
          cy.wait(2000);
          createGeneralMatter.endDateCalendar();
          createGeneralMatter.endDateSelection(data.matterDetails2.EndDate);
          createGeneralMatter.cancelBtnClick();
          createGeneralMatter.caseTitleIsEmpty();
          createGeneralMatter.caseNumberIsEmpty();
          createGeneralMatter.selectDateIsEmpty();
          createGeneralMatter.closeDateIsEmpty();
        })




        //4. Mandatory and Description with Cancel

        it('mandatoryandDescriptionWithCancel',()=>{
          cy.reload();
          createGeneralMatter.mattersIconClick();
          cy.wait(5000);
          createGeneralMatter.generalMattersTabClick();
          createGeneralMatter.createTabClick();
          cy.scrollTo(0,200);
          cy.wait(2000);
          createGeneralMatter.caseTitleText(data.matterDetails3.caseTitle);

          cy.wait(2000);
          createGeneralMatter.caseNumberText(data.matterDetails3.caseNumber);
          cy.wait(2000);
          createGeneralMatter.descriptionField(data.matterDetails3.descriptionText);
          createGeneralMatter.cancelBtnClick();
          createGeneralMatter.descriptionIsEmpty();

        })

        // 5. Mandatory and matter type with Cancel

        it('mandatoryandMatterTypewithCancel',()=>{
          cy.reload();
          createGeneralMatter.mattersIconClick();
          cy.wait(5000);
          createGeneralMatter.generalMattersTabClick();
          createGeneralMatter.createTabClick();
          cy.scrollTo(0,200);
          cy.wait(2000);
          createGeneralMatter.caseTitleText(data.matterDetails4.caseTitle);

          cy.wait(2000);
          createGeneralMatter.caseNumberText(data.matterDetails4.caseNumber);
          cy.wait(2000);
          createGeneralMatter.matterTypeField(data.matterDetails4.matterType)
          createGeneralMatter.cancelBtnClick();
          createGeneralMatter.matterTypeIsEmpty();
        })

        // 6. Mandatory and High Priority with Cancel

        it('mandatoryandHighPriorityWithCancel',()=>{
          cy.reload();
          createGeneralMatter.mattersIconClick();
          cy.wait(5000);
          createGeneralMatter.generalMattersTabClick();
          createGeneralMatter.createTabClick();
          cy.scrollTo(0,200);
          cy.wait(2000);
          createGeneralMatter.caseTitleText(data.matterDetails5.caseTitle);

          cy.wait(2000);
          createGeneralMatter.caseNumberText(data.matterDetails5.caseNumber);
          cy.wait(2000);
          createGeneralMatter.prioritySelection(data.matterDetails5.priority);
          createGeneralMatter.cancelBtnClick();          

})

// 6. Mandatory and High Priority with Cancel

        it('mandatoryandHighPriorityWithCancel',()=>{
          cy.reload();
          createGeneralMatter.mattersIconClick();
          cy.wait(5000);
          createGeneralMatter.generalMattersTabClick();
          createGeneralMatter.createTabClick();
          cy.scrollTo(0,200);
          cy.wait(2000);
          createGeneralMatter.caseTitleText(data.matterDetails5.caseTitle);

          cy.wait(2000);
          createGeneralMatter.caseNumberText(data.matterDetails5.caseNumber);
          cy.wait(2000);
          createGeneralMatter.prioritySelection(data.matterDetails5.priority);
          createGeneralMatter.cancelBtnClick();


})
           // 7. Mandatory and Medium Priority with Cancel

        it('mandatoryandMediumPriorityWithCancel',()=>{
          cy.reload();
          createGeneralMatter.mattersIconClick();
          cy.wait(5000);
          createGeneralMatter.generalMattersTabClick();
          createGeneralMatter.createTabClick();
          cy.scrollTo(0,200);
          cy.wait(2000);
          createGeneralMatter.caseTitleText(data.matterDetails6.caseTitle);

          cy.wait(2000);
          createGeneralMatter.caseNumberText(data.matterDetails6.caseNumber);
          cy.wait(2000);
          createGeneralMatter.prioritySelection(data.matterDetails6.priority);
          createGeneralMatter.cancelBtnClick();
        })

         // 8. Mandatory and Low Priority with Cancel

         it('mandatoryandMediumPriorityWithCancel',()=>{
          cy.reload();
          createGeneralMatter.mattersIconClick();
          cy.wait(5000);
          createGeneralMatter.generalMattersTabClick();
          createGeneralMatter.createTabClick();
          cy.scrollTo(0,200);
          cy.wait(2000);
          createGeneralMatter.caseTitleText(data.matterDetails7.caseTitle);

          cy.wait(2000);
          createGeneralMatter.caseNumberText(data.matterDetails7.caseNumber);
          cy.wait(2000);
          createGeneralMatter.prioritySelection(data.matterDetails7.priority);
          createGeneralMatter.cancelBtnClick();




      })

      // 9. Mandatory and Active Status with Cancel

      it('mandatoryandActiveStatusWithCancel',()=>{
        cy.reload();
        createGeneralMatter.mattersIconClick();
        cy.wait(5000);
        createGeneralMatter.generalMattersTabClick();
        createGeneralMatter.createTabClick();
        cy.scrollTo(0,200);
        cy.wait(2000);
        createGeneralMatter.caseTitleText(data.matterDetails8.caseTitle);

        cy.wait(2000);
        createGeneralMatter.caseNumberText(data.matterDetails8.caseNumber);
        cy.wait(2000);
        createGeneralMatter.statusSelection(data.matterDetails8.statusSelect);
        createGeneralMatter.cancelBtnClick();
      })

       // 10. Mandatory and pending status  with Cancel

       it('mandatoryandPendingStatusWithCancel',()=>{
        cy.reload();
        createGeneralMatter.mattersIconClick();
        cy.wait(5000);
        createGeneralMatter.generalMattersTabClick();
        createGeneralMatter.createTabClick();
        cy.scrollTo(0,200);
        cy.wait(2000);
        createGeneralMatter.caseTitleText(data.matterDetails9.caseTitle);

        cy.wait(2000);
        createGeneralMatter.caseNumberText(data.matterDetails9.caseNumber);
        cy.wait(2000);
        createGeneralMatter.statusSelection(data.matterDetails9.statusSelect);
        createGeneralMatter.cancelBtnClick();
  })


         //  11. Without case Title with next

         it('withoutCaseTitleClickNext', ()=>{

          cy.reload();
        createGeneralMatter.mattersIconClick();
        cy.wait(5000);
        createGeneralMatter.generalMattersTabClick();
        createGeneralMatter.createTabClick();
        cy.scrollTo(0,200);
        cy.wait(2000);
        createGeneralMatter.nextBtnMatterInfo();
        createGeneralMatter.caseTitlefieldRequiredError();
        
 })
        //  12. Without case number with next

        it('withoutCaseNumberClickNext', ()=>{

          cy.reload();
        createGeneralMatter.mattersIconClick();
        cy.wait(5000);
        createGeneralMatter.generalMattersTabClick();
        createGeneralMatter.createTabClick();
        cy.scrollTo(0,200);
        cy.wait(2000);
        createGeneralMatter.nextBtnMatterInfo();
        createGeneralMatter.caseNumberfieldRequirdError();

        })

        // 13. Mandatory with Next button disable in Department

        it('nextBtnDisabledInDepartmentPage',()=>{
          cy.reload();
          createGeneralMatter.mattersIconClick();
          cy.wait(5000);
          createGeneralMatter.generalMattersTabClick();
          createGeneralMatter.createTabClick();
          cy.scrollTo(0,200);
          cy.wait(2000);
          createGeneralMatter.caseTitleText(data.matterDetails10.caseTitle);
  
          cy.wait(2000);
          createGeneralMatter.caseNumberText(data.matterDetails10.caseNumber);
          cy.wait(2000);
          createGeneralMatter.nextBtnMatterInfo();
          createGeneralMatter.nextBtnIsDisabledInDepartmentsPage();
        })


        //14. Mandatory with Departments with Cancel


        it('mandatoryAndDepartmentsWithCancel',()=>{

          
          cy.reload();
          createGeneralMatter.mattersIconClick();
          cy.wait(5000);
          createGeneralMatter.generalMattersTabClick();
          createGeneralMatter.createTabClick();
          cy.scrollTo(0,200);
          cy.wait(2000);
          createGeneralMatter.caseTitleText(data.matterDetails11.caseTitle);
  
          cy.wait(2000);
          createGeneralMatter.caseNumberText(data.matterDetails11.caseNumber);
          cy.wait(2000);
          createGeneralMatter.nextBtnMatterInfo();
          createGeneralMatter.SelectNameLists(departNameList);
          createGeneralMatter.cancelBtnClick();
          createGeneralMatter.verifyNameListsOnRightSide(data.matterDetails11.department1);
          createGeneralMatter.verifyNameListsOnRightSide(data.matterDetails11.department2);

    })

    // 15. Mandatory with Departments and Clients with Cancel

    it('mandatoryDepartmentsAndClientsWithCancel',()=>{

          
      cy.reload();
      createGeneralMatter.mattersIconClick();
      cy.wait(5000);
      createGeneralMatter.generalMattersTabClick();
      createGeneralMatter.createTabClick();
      cy.scrollTo(0,200);
      cy.wait(2000);
      createGeneralMatter.caseTitleText(data.matterDetails12.caseTitle);

      cy.wait(2000);
      createGeneralMatter.caseNumberText(data.matterDetails12.caseNumber);
      cy.wait(2000);
      createGeneralMatter.nextBtnMatterInfo();
      createGeneralMatter.SelectNameLists(departNameList);
      
      createGeneralMatter.nextBtnMatterInfo();
      createGeneralMatter.SelectNameLists(clientNameList);
      createGeneralMatter.cancelBtnClick();
      cy.wait(3000); 
      createGeneralMatter.verifyClientListOnRightSide(data.matterDetails12.clientName1);     
      createGeneralMatter.verifyClientListOnRightSide(data.matterDetails12.clientName2);
  })
       


      // Mandatory with Departments and TM with Cancel

      it('mandatoryDepartmentsAndteamMembersWithCancel',()=>{          
        cy.reload();
        createGeneralMatter.mattersIconClick();
        cy.wait(5000);
        createGeneralMatter.generalMattersTabClick();
        createGeneralMatter.createTabClick();
        cy.scrollTo(0,200);
        cy.wait(2000);
        createGeneralMatter.caseTitleText(data.matterDetails13.caseTitle);  
        cy.wait(2000);
        createGeneralMatter.caseNumberText(data.matterDetails13.caseNumber);
        cy.wait(2000);
        createGeneralMatter.nextBtnMatterInfo();
        createGeneralMatter.SelectNameLists(departNameList); 
        createGeneralMatter.nextBtnMatterInfo();
        createGeneralMatter.nextBtnMatterInfo();
        createGeneralMatter.SelectNameLists(teamMemberList);
        createGeneralMatter.cancelBtnClick();
        cy.wait(4000);
        createGeneralMatter.VerifyTeamMemberListOnRightSide(data.matterDetails13.name1);
        createGeneralMatter.VerifyTeamMemberListOnRightSide(data.matterDetails13.name2);

      })

      // 14. Mandatory with Departments and Documents with Cancel

      it('mandatoryDepartmentsAndDocumentsWithCancel',()=>{          
        cy.reload();
        createGeneralMatter.mattersIconClick();
        cy.wait(5000);
        createGeneralMatter.generalMattersTabClick();
        createGeneralMatter.createTabClick();
        cy.scrollTo(0,200);
        cy.wait(2000);
        createGeneralMatter.caseTitleText(data.matterDetails13.caseTitle);  
        cy.wait(2000);
        createGeneralMatter.caseNumberText(data.matterDetails13.caseNumber);
        cy.wait(2000);
        createGeneralMatter.nextBtnMatterInfo();
        createGeneralMatter.SelectNameLists(departNameList); 
        createGeneralMatter.nextBtnMatterInfo();
        createGeneralMatter.nextBtnMatterInfo();
      })


          // 16. Mandatory with Departments and Select and unSelect


          it('mandatoryWithDepartmentSelectAndUnselect',()=>{          
            cy.reload();
            createGeneralMatter.mattersIconClick();
            cy.wait(5000);
            createGeneralMatter.generalMattersTabClick();
            createGeneralMatter.createTabClick();
            cy.scrollTo(0,200);
            cy.wait(2000);
            createGeneralMatter.caseTitleText(data.matterDetails16.caseTitle);  
            cy.wait(2000);
            createGeneralMatter.caseNumberText(data.matterDetails16.caseNumber);
            cy.wait(2000);
            createGeneralMatter.nextBtnMatterInfo();
            createGeneralMatter.SelectNameLists(departNameList); 
            createGeneralMatter.UnSelectNameLists(departNameList);
            createGeneralMatter.verifyNameListsOnRightSide(data.matterDetails16.department1);
            createGeneralMatter.verifyNameListsOnRightSide(data.matterDetails16.department2);

          })

          // 17. Mandatory with Departments and Select and unSelect for Clients

          it('mandatoryWithDepartmentandClientSelectAndUnselect',()=>{          
            cy.reload();
            createGeneralMatter.mattersIconClick();
            cy.wait(5000);
            createGeneralMatter.generalMattersTabClick();
            createGeneralMatter.createTabClick();
            cy.scrollTo(0,200);
            cy.wait(2000);
            createGeneralMatter.caseTitleText(data.matterDetails17.caseTitle);  
            cy.wait(2000);
            createGeneralMatter.caseNumberText(data.matterDetails17.caseNumber);
            cy.wait(2000);
            createGeneralMatter.nextBtnMatterInfo();
            createGeneralMatter.SelectNameLists(departNameList); 
            createGeneralMatter.nextBtnMatterInfo();
            createGeneralMatter.SelectNameLists(clientNameList);
            createGeneralMatter.UnSelectNameLists(clientNameList);
            createGeneralMatter.verifyClientListOnRightSide(data.matterDetails17.clientName1);
            createGeneralMatter.verifyClientListOnRightSide(data.matterDetails17.clientName2);
         })


         // 18. Mandatory with Departments and Select and unSelect for TM

         it('mandatoryWithDepartmentandClientandTMSelectAndUnselect',()=>{          
          cy.reload();
          createGeneralMatter.mattersIconClick();
          cy.wait(5000);
          createGeneralMatter.generalMattersTabClick();
          createGeneralMatter.createTabClick();
          cy.scrollTo(0,200);
          cy.wait(2000);
          createGeneralMatter.caseTitleText(data.matterDetails18.caseTitle);  
          cy.wait(2000);
          createGeneralMatter.caseNumberText(data.matterDetails18.caseNumber);
          cy.wait(2000);
          createGeneralMatter.nextBtnMatterInfo();
          createGeneralMatter.SelectNameLists(departNameList); 
          createGeneralMatter.nextBtnMatterInfo();
          createGeneralMatter.SelectNameLists(clientNameList);
          createGeneralMatter.nextBtnMatterInfo();
          createGeneralMatter.SelectNameLists(teamMemberList);
          createGeneralMatter.UnSelectNameLists(teamMemberList);
          createGeneralMatter.textVerifyUnSelectedListOnRightSide(teamMemberList);
          

         })

          // 19. Mandatory with Departments TM and Select and unSelect for Documents

         it('mandatoryWithDepartmentandClientandTMandDocSelectAndUnselect',()=>{          
          cy.reload();
          createGeneralMatter.mattersIconClick();
          cy.wait(5000);
          createGeneralMatter.generalMattersTabClick();
          createGeneralMatter.createTabClick();
          cy.scrollTo(0,200);
          cy.wait(2000);
          createGeneralMatter.caseTitleText(data.matterDetails19.caseTitle);  
          cy.wait(2000);
          createGeneralMatter.caseNumberText(data.matterDetails19.caseNumber);
          cy.wait(2000);
          createGeneralMatter.nextBtnMatterInfo();
          createGeneralMatter.SelectNameLists(departNameList); 
          createGeneralMatter.nextBtnMatterInfo();
          createGeneralMatter.SelectNameLists(clientNameList);
          createGeneralMatter.nextBtnMatterInfo();
          createGeneralMatter.SelectNameLists(teamMemberList);
          createGeneralMatter.nextBtnMatterInfo();
          createGeneralMatter.SelectNameLists(documentsList);
          createGeneralMatter.UnSelectNameLists(documentsList);
          createGeneralMatter.verifyDocumentsOnRight(data.matterDetails19.doc1);
          createGeneralMatter.verifyDocumentsOnRight(data.matterDetails19.doc2);


})

         // 20. Mandatory with Departments and Select all and Unselect all

         it('mandatoryWithDepartmentandselectAllAndUnselectAll',()=>{          
          cy.reload();
          createGeneralMatter.mattersIconClick();
          cy.wait(5000);
          createGeneralMatter.generalMattersTabClick();
          createGeneralMatter.createTabClick();
          cy.scrollTo(0,200);
          cy.wait(2000);
          createGeneralMatter.caseTitleText(data.matterDetails20.caseTitle);  
          cy.wait(2000);
          createGeneralMatter.caseNumberText(data.matterDetails20.caseNumber);  
          createGeneralMatter.nextBtnMatterInfo();
          cy.wait(2000);
          createGeneralMatter.selectAllCheckBox();
          cy.wait(2000);
          createGeneralMatter.selectAllCheckBoxChecked();
          cy.wait(5000);
          createGeneralMatter.selectAllCheckBox();
          createGeneralMatter.textVerifyUnSelectedListOnRightSide(departNamelist1);
         })


         // 21. Mandatory with Departments and Clients and Select all and Unselect all

         it('mandatoryWithDepartmentandClientSelectAllandUnselectAll',()=>{          
          cy.reload();
          createGeneralMatter.mattersIconClick();
          cy.wait(5000);
          createGeneralMatter.generalMattersTabClick();
          createGeneralMatter.createTabClick();
          cy.scrollTo(0,200);
          cy.wait(2000);
          createGeneralMatter.caseTitleText(data.matterDetails21.caseTitle);  
          cy.wait(2000);
          createGeneralMatter.caseNumberText(data.matterDetails21.caseNumber);
          cy.wait(2000);
          createGeneralMatter.nextBtnMatterInfo();
          createGeneralMatter.selectAllCheckBox();
          createGeneralMatter.nextBtnMatterInfo();
          cy.wait(2000);
          createGeneralMatter.selectAllCheckBox();
          cy.wait(1000);
          createGeneralMatter.selectAllCheckBoxChecked();
          cy.wait(1000);
          createGeneralMatter.selectAllCheckBox();
          createGeneralMatter.textVerifyUnSelectedListOnRightSide(clientNameList);



         })


         //22. Mandatory with Departments and TM and Select all and Unselect all


         it('mandatoryWithDepartmentandTMandTMSelectAllAndUnselectAll',()=>{          
          cy.reload();
          createGeneralMatter.mattersIconClick();
          cy.wait(5000);
          createGeneralMatter.generalMattersTabClick();
          createGeneralMatter.createTabClick();
          cy.scrollTo(0,200);
          cy.wait(2000);
          createGeneralMatter.caseTitleText(data.matterDetails22.caseTitle);  
          cy.wait(2000);
          createGeneralMatter.caseNumberText(data.matterDetails22.caseNumber);
          cy.wait(2000);
          createGeneralMatter.nextBtnMatterInfo();
          cy.wait(2000);
          createGeneralMatter.selectAllCheckBox();
          createGeneralMatter.nextBtnMatterInfo();
          cy.wait(2000);
          createGeneralMatter.selectAllCheckBox();
          createGeneralMatter.nextBtnMatterInfo();
          cy.wait(2000);
          createGeneralMatter.selectAllCheckBox();
          createGeneralMatter.selectAllCheckBoxChecked();
          createGeneralMatter.selectAllCheckBox();
          cy.wait(2000);
          createGeneralMatter.textVerifyUnSelectedListOnRightSide(teamMemberList1);

})


       //23. Mandatory with Departments , Clients and documents and Select all and Unselect all

       it('mandatoryWithDepartmentandDocandTMSelectAllAndUnselectAll',()=>{          
        cy.reload();
        createGeneralMatter.mattersIconClick();
        cy.wait(5000);
        createGeneralMatter.generalMattersTabClick();
        createGeneralMatter.createTabClick();
        cy.scrollTo(0,200);
        cy.wait(2000);
        createGeneralMatter.caseTitleText(data.matterDetails23.caseTitle);  
        cy.wait(2000);
        createGeneralMatter.caseNumberText(data.matterDetails23.caseNumber);
        cy.wait(2000);
        createGeneralMatter.nextBtnMatterInfo();
        cy.wait(2000);
        createGeneralMatter.selectAllCheckBox();
        createGeneralMatter.nextBtnMatterInfo();
        cy.wait(2000);
        createGeneralMatter.selectAllCheckBox();
        createGeneralMatter.nextBtnMatterInfo();
        cy.wait(2000);        
        createGeneralMatter.nextBtnMatterInfo();
        cy.wait(2000);
        createGeneralMatter.selectAllCheckBox();
        createGeneralMatter.selectAllCheckBoxChecked();
        createGeneralMatter.selectAllCheckBox();
        createGeneralMatter.textVerifyUnSelectedListOnRightSide(docsList);


})


    //24. Mandatory with Departments

    it.only('createMatterWithMandatoryandDepartments',()=>{          
      cy.reload();
      createGeneralMatter.mattersIconClick();
      cy.wait(5000);
      createGeneralMatter.generalMattersTabClick();
      createGeneralMatter.createTabClick();
      cy.scrollTo(0,200);
      cy.wait(2000);
      createGeneralMatter.caseTitleText(data.matterDetails24.caseTitle);  
      cy.wait(2000);
      createGeneralMatter.caseNumberText(data.matterDetails24.caseNumber);
      cy.wait(2000);
      createGeneralMatter.nextBtnMatterInfo();
      cy.wait(2000);
      createGeneralMatter.SelectNameLists(departNameList);
      createGeneralMatter.nextBtnMatterInfo();
      cy.wait(1000);
      createGeneralMatter.nextBtnMatterInfo();
      cy.wait(1000);
      createGeneralMatter.nextBtnMatterInfo();
      createGeneralMatter.submitBtnClick();
      createGeneralMatter.yesBtnClick();
      createGeneralMatter.viewMatterListBtnClick();
      cy.wait(5000);
      //createGeneralMatter.matterNameAssert(data.matterDetails24.caseTitle);
    })


    // 25. Mandatory with Departments and Clients

    it.only('createMatterWithMandatoryandDepartmentsandClient',()=>{          
      cy.reload();
      createGeneralMatter.mattersIconClick();
      cy.wait(5000);
      createGeneralMatter.generalMattersTabClick();
      createGeneralMatter.createTabClick();
      cy.scrollTo(0,200);
      cy.wait(2000);
      createGeneralMatter.caseTitleText(data.matterDetails25.caseTitle);  
      cy.wait(2000);
      createGeneralMatter.caseNumberText(data.matterDetails25.caseNumber);
      cy.wait(2000);
      createGeneralMatter.nextBtnMatterInfo();
      cy.wait(2000);
      createGeneralMatter.SelectNameLists(departNameList);
      createGeneralMatter.nextBtnMatterInfo();
      cy.wait(1000);
      createGeneralMatter.SelectNameLists(clientNameList);
      createGeneralMatter.nextBtnMatterInfo();
      cy.wait(1000);
      createGeneralMatter.nextBtnMatterInfo();
      createGeneralMatter.submitBtnClick();
      createGeneralMatter.yesBtnClick();
      createGeneralMatter.viewMatterListBtnClick();
      cy.wait(5000);
      //createGeneralMatter.matterNameAssert(data.matterDetails25.caseTitle);


})

      // 26. Mandatory with Departments and TM


      it.only('createMatterWithMandatoryandDepartmentsandTM',()=>{          
      cy.reload();
      createGeneralMatter.mattersIconClick();
      cy.wait(5000);
      createGeneralMatter.generalMattersTabClick();
      createGeneralMatter.createTabClick();
      cy.scrollTo(0,200);
      cy.wait(2000);
      createGeneralMatter.caseTitleText(data.matterDetails26.caseTitle);  
      cy.wait(2000);
      createGeneralMatter.caseNumberText(data.matterDetails26.caseNumber);
      cy.wait(2000);
      createGeneralMatter.nextBtnMatterInfo();
      cy.wait(2000);
      createGeneralMatter.SelectNameLists(departNameList);
      createGeneralMatter.nextBtnMatterInfo();
      cy.wait(1000);
      createGeneralMatter.nextBtnMatterInfo();
      cy.wait(1000);
      createGeneralMatter.SelectNameLists(teamMemberList);
      createGeneralMatter.nextBtnMatterInfo();
      createGeneralMatter.submitBtnClick();
      createGeneralMatter.yesBtnClick();
      createGeneralMatter.viewMatterListBtnClick();
      cy.wait(5000);
      //createGeneralMatter.matterNameAssert(data.matterDetails26.caseTitle);

}) 

       //27. Mandatory with Departments and Documents


       it.only('createMatterWithMandatoryandDepartmentsandDocs',()=>{          
        cy.reload();
        createGeneralMatter.mattersIconClick();
        cy.wait(5000);
        createGeneralMatter.generalMattersTabClick();
        createGeneralMatter.createTabClick();
        cy.scrollTo(0,200);
        cy.wait(2000);
        createGeneralMatter.caseTitleText(data.matterDetails26.caseTitle);  
        cy.wait(2000);
        createGeneralMatter.caseNumberText(data.matterDetails26.caseNumber);
        cy.wait(2000);
        createGeneralMatter.nextBtnMatterInfo();
        cy.wait(2000);
        createGeneralMatter.SelectNameLists(departNameList);
        createGeneralMatter.nextBtnMatterInfo();
        cy.wait(1000);
        createGeneralMatter.nextBtnMatterInfo();
        cy.wait(1000);
        createGeneralMatter.nextBtnMatterInfo();
        createGeneralMatter.SelectNameLists(documentsList)
        createGeneralMatter.submitBtnClick();
        createGeneralMatter.yesBtnClick();
        createGeneralMatter.viewMatterListBtnClick();
        cy.wait(5000);
        //createGeneralMatter.matterNameAssert(data.matterDetails26.caseTitle);
  
})

       //28. Mandatory with dpartments, client and TM

       it.only('createMatterWithMandatoryandDepartmentsandClientTM',()=>{          
        cy.reload();
        createGeneralMatter.mattersIconClick();
        cy.wait(5000);
        createGeneralMatter.generalMattersTabClick();
        createGeneralMatter.createTabClick();
        cy.scrollTo(0,200);
        cy.wait(2000);
        createGeneralMatter.caseTitleText(data.matterDetails28.caseTitle);  
        cy.wait(2000);
        createGeneralMatter.caseNumberText(data.matterDetails28.caseNumber);
        cy.wait(2000);
        createGeneralMatter.nextBtnMatterInfo();
        cy.wait(2000);
        createGeneralMatter.SelectNameLists(departNameList);
        createGeneralMatter.nextBtnMatterInfo();
        cy.wait(1000);
        createGeneralMatter.SelectNameLists(clientNameList);
        createGeneralMatter.nextBtnMatterInfo();
        cy.wait(1000);
        createGeneralMatter.SelectNameLists(teamMemberList);
        createGeneralMatter.nextBtnMatterInfo();
        createGeneralMatter.submitBtnClick();
        createGeneralMatter.yesBtnClick();
        createGeneralMatter.viewMatterListBtnClick();
        cy.wait(5000);
        //createGeneralMatter.matterNameAssert(data.matterDetails27.caseTitle);



})
         //29. mandatory with departments, clients and Documents

         it.only('createMatterWithMandatoryandDepartmentsandClientsDocuments',()=>{          
          cy.reload();
          createGeneralMatter.mattersIconClick();
          cy.wait(5000);
          createGeneralMatter.generalMattersTabClick();
          createGeneralMatter.createTabClick();
          cy.scrollTo(0,200);
          cy.wait(2000);
          createGeneralMatter.caseTitleText(data.matterDetails29.caseTitle);  
          cy.wait(2000);
          createGeneralMatter.caseNumberText(data.matterDetails29.caseNumber);
          cy.wait(2000);
          createGeneralMatter.nextBtnMatterInfo();
          cy.wait(2000);
          createGeneralMatter.SelectNameLists(departNameList);
          createGeneralMatter.nextBtnMatterInfo();
          cy.wait(1000);
          createGeneralMatter.SelectNameLists(clientNameList);
          createGeneralMatter.nextBtnMatterInfo();
          cy.wait(1000);
          createGeneralMatter.SelectNameLists(teamMemberList);
          createGeneralMatter.nextBtnMatterInfo();
          createGeneralMatter.submitBtnClick();
          createGeneralMatter.yesBtnClick();
          createGeneralMatter.viewMatterListBtnClick();
          cy.wait(5000);
          //createGeneralMatter.matterNameAssert(data.matterDetails28.caseTitle);
})


         // 30. mandatory with all


         it.only('createMatterWithMandatorywithAll',()=>{          
          cy.reload();
          createGeneralMatter.mattersIconClick();
          cy.wait(5000);
          createGeneralMatter.generalMattersTabClick();
          createGeneralMatter.createTabClick();
          cy.scrollTo(0,200);
          cy.wait(2000);
          createGeneralMatter.caseTitleText(data.matterDetails30.caseTitle);  
          cy.wait(2000);
          createGeneralMatter.caseNumberText(data.matterDetails30.caseNumber);
          cy.wait(2000);
          createGeneralMatter.nextBtnMatterInfo();
          cy.wait(2000);
          createGeneralMatter.SelectNameLists(departNameList);
          createGeneralMatter.nextBtnMatterInfo();
          cy.wait(1000);
          createGeneralMatter.SelectNameLists(clientNameList);
          createGeneralMatter.nextBtnMatterInfo();
          cy.wait(1000);
          createGeneralMatter.SelectNameLists(teamMemberList);
          createGeneralMatter.nextBtnMatterInfo();
          createGeneralMatter.SelectNameLists(documentsList);
          createGeneralMatter.submitBtnClick();
          createGeneralMatter.yesBtnClick();
          createGeneralMatter.viewMatterListBtnClick();
          cy.wait(5000);
          //createGeneralMatter.matterNameAssert(data.matterDetails29.caseTitle);



})

           //31. Mandatory and start date with Departments

           it.only('createMatterWithMandatoryandStartDatewithDepartments',()=>{          
            cy.reload();
            createGeneralMatter.mattersIconClick();
            cy.wait(5000);
            createGeneralMatter.generalMattersTabClick();
            createGeneralMatter.createTabClick();
            cy.scrollTo(0,200);
            cy.wait(2000);
            createGeneralMatter.caseTitleText(data.matterDetails30.caseTitle);  
            cy.wait(2000);
            createGeneralMatter.caseNumberText(data.matterDetails30.caseNumber);
            cy.wait(2000);
            createGeneralMatter.startDateCalendar();
            createGeneralMatter.StartDateSelection(data.matterDetails30.stDate);
            createGeneralMatter.nextBtnMatterInfo();
            cy.wait(2000);
            createGeneralMatter.SelectNameLists(departNameList);
            createGeneralMatter.nextBtnMatterInfo();
            cy.wait(1000);
            createGeneralMatter.nextBtnMatterInfo();
            cy.wait(1000);
            createGeneralMatter.nextBtnMatterInfo();
            createGeneralMatter.submitBtnClick();
            createGeneralMatter.yesBtnClick();
            createGeneralMatter.viewMatterListBtnClick();
            cy.wait(5000);
            //createGeneralMatter.matterNameAssert(data.matterDetails30.caseTitle);
})


           //32. Mandatory and start date with Departments and clients

           it.only('createMatterWithMandatoryandStartDatewithDepartmentandClients',()=>{          
            cy.reload();
            createGeneralMatter.mattersIconClick();
            cy.wait(5000);
            createGeneralMatter.generalMattersTabClick();
            createGeneralMatter.createTabClick();
            cy.scrollTo(0,200);
            cy.wait(2000);
            createGeneralMatter.caseTitleText(data.matterDetails32.caseTitle);  
            cy.wait(2000);
            createGeneralMatter.caseNumberText(data.matterDetails32.caseNumber);
            cy.wait(2000);
            createGeneralMatter.startDateCalendar();
            createGeneralMatter.StartDateSelection(data.matterDetails32.stDate);
            createGeneralMatter.nextBtnMatterInfo();
            cy.wait(2000);
            createGeneralMatter.SelectNameLists(departNameList);
            createGeneralMatter.nextBtnMatterInfo();
            cy.wait(1000);
            createGeneralMatter.SelectNameLists(clientNameList);
            createGeneralMatter.nextBtnMatterInfo();
            cy.wait(1000);
            createGeneralMatter.nextBtnMatterInfo();
            createGeneralMatter.submitBtnClick();
            createGeneralMatter.yesBtnClick();
            createGeneralMatter.viewMatterListBtnClick();
            cy.wait(5000);
            //createGeneralMatter.matterNameAssert(data.matterDetails31.caseTitle);


      
})

         // 33. Mandatory and start date with Departments and TM

         it.only('createMatterWithMandatoryandStartDatewithDepartmentandTM',()=>{          
          cy.reload();
          createGeneralMatter.mattersIconClick();
          cy.wait(5000);
          createGeneralMatter.generalMattersTabClick();
          createGeneralMatter.createTabClick();
          cy.scrollTo(0,200);
          cy.wait(2000);
          createGeneralMatter.caseTitleText(data.matterDetails33.caseTitle);  
          cy.wait(2000);
          createGeneralMatter.caseNumberText(data.matterDetails33.caseNumber);
          cy.wait(2000);
          createGeneralMatter.startDateCalendar();
          createGeneralMatter.StartDateSelection(data.matterDetails33.stDate);
          createGeneralMatter.nextBtnMatterInfo();
          cy.wait(2000);
          createGeneralMatter.SelectNameLists(departNameList);
          createGeneralMatter.nextBtnMatterInfo();
          cy.wait(1000);
          createGeneralMatter.nextBtnMatterInfo();
          cy.wait(1000);
          createGeneralMatter.SelectNameLists(teamMemberList);
          createGeneralMatter.nextBtnMatterInfo();
          createGeneralMatter.submitBtnClick();
          createGeneralMatter.yesBtnClick();
          createGeneralMatter.viewMatterListBtnClick();
          cy.wait(5000);
          //createGeneralMatter.matterNameAssert(data.matterDetails31.caseTitle);
})


         
         //34. Mandatory and start date with Departments and Document 


         it.only('createMatterWithMandatoryandStartDatewithDepartmentandDocuments',()=>{          
          cy.reload();
          createGeneralMatter.mattersIconClick();
          cy.wait(5000);
          createGeneralMatter.generalMattersTabClick();
          createGeneralMatter.createTabClick();
          cy.scrollTo(0,200);
          cy.wait(2000);
          createGeneralMatter.caseTitleText(data.matterDetails34.caseTitle);  
          cy.wait(2000);
          createGeneralMatter.caseNumberText(data.matterDetails34.caseNumber);
          cy.wait(2000);
          createGeneralMatter.startDateCalendar();
          createGeneralMatter.StartDateSelection(data.matterDetails34.stDate);
          createGeneralMatter.nextBtnMatterInfo();
          cy.wait(2000);
          createGeneralMatter.SelectNameLists(departNameList);
          createGeneralMatter.nextBtnMatterInfo();
          cy.wait(1000);
          createGeneralMatter.nextBtnMatterInfo();
          cy.wait(1000);
          createGeneralMatter.nextBtnMatterInfo();
          createGeneralMatter.SelectNameLists(documentsList);

          createGeneralMatter.submitBtnClick();
          createGeneralMatter.yesBtnClick();
          createGeneralMatter.viewMatterListBtnClick();
          cy.wait(5000);
          //createGeneralMatter.matterNameAssert(data.matterDetails34.caseTitle);



})

          //35. Mandatory and start date with Departments , Clients and TM 

          it.only('createMatterWithMandatoryandStartDatewithDepartmentandClientsandTM',()=>{          
            cy.reload();
            createGeneralMatter.mattersIconClick();
            cy.wait(5000);
            createGeneralMatter.generalMattersTabClick();
            createGeneralMatter.createTabClick();
            cy.scrollTo(0,200);
            cy.wait(2000);
            createGeneralMatter.caseTitleText(data.matterDetails35.caseTitle);  
            cy.wait(2000);
            createGeneralMatter.caseNumberText(data.matterDetails35.caseNumber);
            cy.wait(2000);
            createGeneralMatter.startDateCalendar();
            createGeneralMatter.StartDateSelection(data.matterDetails35.stDate);
            createGeneralMatter.nextBtnMatterInfo();
            cy.wait(2000);
            createGeneralMatter.SelectNameLists(departNameList);
            createGeneralMatter.nextBtnMatterInfo();
            cy.wait(1000);
            createGeneralMatter.SelectNameLists(clientNameList);

            createGeneralMatter.nextBtnMatterInfo();
            cy.wait(1000);
            createGeneralMatter.SelectNameLists(teamMemberList);

            createGeneralMatter.nextBtnMatterInfo();
  
            createGeneralMatter.submitBtnClick();
            createGeneralMatter.yesBtnClick();
            createGeneralMatter.viewMatterListBtnClick();
            cy.wait(5000);
            //createGeneralMatter.matterNameAssert(data.matterDetails34.caseTitle);


})

           //36. Mandatory and  start date with Departments , Clients and Documents 

           it.only('createMatterWithMandatoryandStartDatewithDepartmentandClientsandDocuments',()=>{          
            cy.reload();
            createGeneralMatter.mattersIconClick();
            cy.wait(5000);
            createGeneralMatter.generalMattersTabClick();
            createGeneralMatter.createTabClick();
            cy.scrollTo(0,200);
            cy.wait(2000);
            createGeneralMatter.caseTitleText(data.matterDetails36.caseTitle);  
            cy.wait(2000);
            createGeneralMatter.caseNumberText(data.matterDetails36.caseNumber);
            cy.wait(2000);
            createGeneralMatter.startDateCalendar();
            createGeneralMatter.StartDateSelection(data.matterDetails36.stDate);
            createGeneralMatter.nextBtnMatterInfo();
            cy.wait(2000);
            createGeneralMatter.SelectNameLists(departNameList);
            createGeneralMatter.nextBtnMatterInfo();
            cy.wait(1000);
            createGeneralMatter.SelectNameLists(clientNameList);

            createGeneralMatter.nextBtnMatterInfo();
            cy.wait(1000);
            createGeneralMatter.nextBtnMatterInfo();
            cy.wait(1000);
            createGeneralMatter.SelectNameLists(documentsList);  
            createGeneralMatter.submitBtnClick();
            createGeneralMatter.yesBtnClick();
            createGeneralMatter.viewMatterListBtnClick();
            cy.wait(5000);
            //createGeneralMatter.matterNameAssert(data.matterDetails34.caseTitle);
})


            // 37. Mandatory  and start date with All 

            it.only('createMatterWithMandatoryandStartDatewithDepartmentandClientsandDocuments',()=>{          
              cy.reload();
              createGeneralMatter.mattersIconClick();
              cy.wait(5000);
              createGeneralMatter.generalMattersTabClick();
              createGeneralMatter.createTabClick();
              cy.scrollTo(0,200);
              cy.wait(2000);
              createGeneralMatter.caseTitleText(data.matterDetails36.caseTitle);  
              cy.wait(2000);
              createGeneralMatter.caseNumberText(data.matterDetails36.caseNumber);
              cy.wait(2000);
              createGeneralMatter.startDateCalendar();
              createGeneralMatter.StartDateSelection(data.matterDetails36.stDate);
              createGeneralMatter.nextBtnMatterInfo();
              cy.wait(2000);
              createGeneralMatter.SelectNameLists(departNameList);
              createGeneralMatter.nextBtnMatterInfo();
              cy.wait(1000);
              createGeneralMatter.SelectNameLists(clientNameList);
  
              createGeneralMatter.nextBtnMatterInfo();
              cy.wait(1000);
              createGeneralMatter.SelectNameLists(teamMemberList);
              createGeneralMatter.nextBtnMatterInfo();
              cy.wait(1000);
              createGeneralMatter.SelectNameLists(documentsList);  
              createGeneralMatter.submitBtnClick();
              createGeneralMatter.yesBtnClick();
              createGeneralMatter.viewMatterListBtnClick();
              cy.wait(5000);
              //createGeneralMatter.matterNameAssert(data.matterDetails34.caseTitle);
            })


            //38. Mandatory and close date with Departments

            it.only('createMatterWithMandatoryandcloseDatewithDepartments',()=>{          
              cy.reload();
              createGeneralMatter.mattersIconClick();
              cy.wait(5000);
              createGeneralMatter.generalMattersTabClick();
              createGeneralMatter.createTabClick();
              cy.scrollTo(0,200);
              cy.wait(2000);
              createGeneralMatter.caseTitleText(data.matterDetails38.caseTitle);  
              cy.wait(2000);
              createGeneralMatter.caseNumberText(data.matterDetails38.caseNumber);
              cy.wait(2000);
              createGeneralMatter.endDateCalendar();
              createGeneralMatter.endDateSelection(data.matterDetails38.EndDate);
              createGeneralMatter.nextBtnMatterInfo();
              cy.wait(2000);
              createGeneralMatter.SelectNameLists(departNameList);
              createGeneralMatter.nextBtnMatterInfo();
              cy.wait(1000);
              createGeneralMatter.nextBtnMatterInfo();
              cy.wait(1000);
              createGeneralMatter.nextBtnMatterInfo();
              createGeneralMatter.submitBtnClick();
              createGeneralMatter.yesBtnClick();
              createGeneralMatter.viewMatterListBtnClick();
              cy.wait(5000);
              //createGeneralMatter.matterNameAssert(data.matterDetails38.caseTitle);


       
            })

            //39. Mandatory and close date with Departments and clients

           it.only('createMatterWithMandatoryandCloseDatewithDepartmentandClients',()=>{          
            cy.reload();
            createGeneralMatter.mattersIconClick();
            cy.wait(5000);
            createGeneralMatter.generalMattersTabClick();
            createGeneralMatter.createTabClick();
            cy.scrollTo(0,200);
            cy.wait(2000);
            createGeneralMatter.caseTitleText(data.matterDetails39.caseTitle);  
            cy.wait(2000);
            createGeneralMatter.caseNumberText(data.matterDetails39.caseNumber);
            cy.wait(2000);
            createGeneralMatter.endDateCalendar();
            createGeneralMatter.endDateSelection(data.matterDetails39.EndDate);
            createGeneralMatter.nextBtnMatterInfo();
            cy.wait(2000);
            createGeneralMatter.SelectNameLists(departNameList);
            createGeneralMatter.nextBtnMatterInfo();
            cy.wait(1000);
            createGeneralMatter.SelectNameLists(clientNameList);
            createGeneralMatter.nextBtnMatterInfo();
            cy.wait(1000);
            createGeneralMatter.nextBtnMatterInfo();
            createGeneralMatter.submitBtnClick();
            createGeneralMatter.yesBtnClick();
            createGeneralMatter.viewMatterListBtnClick();
            cy.wait(5000);
            //createGeneralMatter.matterNameAssert(data.matterDetails39.caseTitle);
          
})
          // 40. Mandatory and close date with Departments and TM

         it.only('createMatterWithMandatoryandCloseDatewithDepartmentandTM',()=>{          
          cy.reload();
          createGeneralMatter.mattersIconClick();
          cy.wait(5000);
          createGeneralMatter.generalMattersTabClick();
          createGeneralMatter.createTabClick();
          cy.scrollTo(0,200);
          cy.wait(2000);
          createGeneralMatter.caseTitleText(data.matterDetails40.caseTitle);  
          cy.wait(2000);
          createGeneralMatter.caseNumberText(data.matterDetails40.caseNumber);
          cy.wait(2000);
          createGeneralMatter.endDateCalendar();
          createGeneralMatter.endDateSelection(data.matterDetails40.EndDate);
          createGeneralMatter.nextBtnMatterInfo();
          cy.wait(2000);
          createGeneralMatter.SelectNameLists(departNameList);
          createGeneralMatter.nextBtnMatterInfo();
          cy.wait(1000);
          createGeneralMatter.nextBtnMatterInfo();
          cy.wait(1000);
          createGeneralMatter.SelectNameLists(teamMemberList);
          createGeneralMatter.nextBtnMatterInfo();
          createGeneralMatter.submitBtnClick();
          createGeneralMatter.yesBtnClick();
          createGeneralMatter.viewMatterListBtnClick();
          cy.wait(5000);
          //createGeneralMatter.matterNameAssert(data.matterDetails31.caseTitle);
})


         
         //41. Mandatory and close date with Departments and Document 


         it.only('createMatterWithMandatoryandCloseDatewithDepartmentandDocuments',()=>{          
          cy.reload();
          createGeneralMatter.mattersIconClick();
          cy.wait(5000);
          createGeneralMatter.generalMattersTabClick();
          createGeneralMatter.createTabClick();
          cy.scrollTo(0,200);
          cy.wait(2000);
          createGeneralMatter.caseTitleText(data.matterDetails41.caseTitle);  
          cy.wait(2000);
          createGeneralMatter.caseNumberText(data.matterDetails41.caseNumber);
          cy.wait(2000);
          createGeneralMatter.endDateCalendar();
          createGeneralMatter.endDateSelection(data.matterDetails41.EndDate);
          createGeneralMatter.nextBtnMatterInfo();
          cy.wait(2000);
          createGeneralMatter.SelectNameLists(departNameList);
          createGeneralMatter.nextBtnMatterInfo();
          cy.wait(1000);
          createGeneralMatter.nextBtnMatterInfo();
          cy.wait(1000);
          createGeneralMatter.nextBtnMatterInfo();
          createGeneralMatter.SelectNameLists(documentsList);

          createGeneralMatter.submitBtnClick();
          createGeneralMatter.yesBtnClick();
          createGeneralMatter.viewMatterListBtnClick();
          cy.wait(5000);
          //createGeneralMatter.matterNameAssert(data.matterDetails41.caseTitle);
         })


})